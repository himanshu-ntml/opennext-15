const config: any = {
  default: {
    override: {
      wrapper: "cloudflare-node",
      converter: "edge",
      // Unused implementation
      incrementalCache: "dummy",
      tagCache: "dummy",
      queue: "dummy",
    },
  },
  middleware: {
    external: true,
    override: {
      wrapper: "cloudflare-edge",
      converter: "edge",
      proxyExternalRequest: "fetch",
    },
  },
  // dangerous: {
  //   enableCacheInterception: false,
  // },
};

export default config;
