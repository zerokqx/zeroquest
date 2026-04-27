import { resolve } from 'node:path';

const host = process.env.HOST || '0.0.0.0';
const rawPort = Number.parseInt(process.env.PORT || '4200', 10);
const port = Number.isFinite(rawPort) && rawPort > 0 ? rawPort : 4200;
const apiOrigin = (process.env.API_ORIGIN || '').trim().replace(/\/+$/, '');

const distDir = resolve(import.meta.dir, 'dist');
const indexPath = resolve(distDir, 'index.html');
const indexFile = Bun.file(indexPath);

const isApiPath = (pathname: string) =>
  pathname === '/api' || pathname.startsWith('/api/');

const proxyApiRequest = async (
  request: Request,
  pathname: string,
  search: string,
): Promise<Response> => {
  if (!apiOrigin) {
    return new Response('API_ORIGIN is not configured', { status: 502 });
  }

  const targetUrl = `${apiOrigin}${pathname}${search}`;
  const headers = new Headers(request.headers);

  headers.set('x-forwarded-proto', new URL(request.url).protocol.replace(':', ''));
  headers.set('x-forwarded-host', request.headers.get('host') || '');

  let body: BodyInit | undefined;
  if (request.method !== 'GET' && request.method !== 'HEAD') {
    body = await request.arrayBuffer();
  }

  try {
    const upstream = await fetch(targetUrl, {
      method: request.method,
      headers,
      body,
      redirect: 'manual',
    });

    return new Response(upstream.body, {
      status: upstream.status,
      headers: upstream.headers,
    });
  } catch {
    return new Response(`Cannot reach backend at ${apiOrigin}`, { status: 502 });
  }
};

const server = Bun.serve({
  hostname: host,
  port,
  async fetch(request) {
    const { pathname, search } = new URL(request.url);
    if (isApiPath(pathname)) {
      return proxyApiRequest(request, pathname, search);
    }

    if (request.method !== 'GET' && request.method !== 'HEAD') {
      return new Response('Method Not Allowed', { status: 405 });
    }

    const requestPath = pathname === '/' ? '/index.html' : pathname;
    const filePath = resolve(distDir, `.${requestPath}`);

    if (!filePath.startsWith(distDir)) {
      return new Response('Not Found', { status: 404 });
    }

    const file = Bun.file(filePath);
    if (await file.exists()) {
      return new Response(file);
    }

    return new Response(indexFile);
  },
});

console.log(`[zeroquest-frontend] listening on http://${server.hostname}:${server.port}`);
