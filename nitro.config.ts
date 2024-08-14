//https://nitro.unjs.io/config
export default defineNitroConfig({
  srcDir: "server",
  experimental: {
    asyncContext: true,
  },
  imports: {
    dirs: ["server/templates"],
  },
  storage: {
    users: {
      driver: "fs",
      base: ".data/users",
    },
    comments: {
      driver: "fs",
      base: ".data/comments",
    },
    public: {
      driver: 'fs',
      base: 'public',
    }
  },
  // storage: {
  //   users: {
  //     driver: "cloudflare-kv-binding",
  //     binding: 'USERS'
  //   },
  //   comments: {
  //     driver: "cloudflare-kv-binding",
  //     binding: 'COMMENTS'
  //   },
  //   public: {
  //     driver: 'memory',
  //     base: 'public',
  //   }
  // },
});
