//https://nitro.unjs.io/config
export default defineNitroConfig({
  srcDir: "server",
  experimental: {
    websocket: true,
  },
  imports: {
    dirs: ["server/templates"],
  },
  devStorage: {
    users: {
      driver: "fs",
      base: ".data/users",
    },
    comments: {
      driver: "fs",
      base: ".data/comments",
    },
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
    // users: {
    //   driver: "cloudflare-kv-binding",
    //   base: 'users'
    // },
    // comments: {
    //   driver: "cloudflare-kv-binding",
    //   base: 'comments'
    // },
  },
  runtimeConfig: {
    authPassword: "",
  },
});
