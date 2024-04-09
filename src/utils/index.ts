export const fetcher = (...args: (URL | RequestInfo)[]) =>
  fetch(...args).then((res) => res.json());
