import { defineConfig } from 'orval';

const MUTATOR_CONFIG = {
  path: './src/shared/api/axios-client.ts',
  name: 'customInstance',
};

const BASE_TARGET_PATH = './src/shared/api/orval';

const targetPath = <T extends string>(
  name: T,
): `${typeof BASE_TARGET_PATH}/${T}/${T}.ts` => {
  return `${BASE_TARGET_PATH}/${name}/${name}.ts`;
};


export default defineConfig({
  api: {
    input: {
      target: 'http://localhost:4000/docs-json',
    },
    output: {
      target: targetPath('base-api'),
      client: 'react-query',
      httpClient: 'axios',
      indexFiles: true,
      mode: 'tags-split',
      namingConvention: 'kebab-case',
      override: { mutator: MUTATOR_CONFIG },
    },
  },
});
