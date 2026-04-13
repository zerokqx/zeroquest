const sse = new EventSource(
  `${import.meta.env.VITE_API_BASE_URL}/test/sse` as string,
);
sse.onmessage = (ev) => {
  console.log(ev);
};

export const App = () => {
  return <p>Hello world</p>;
};
