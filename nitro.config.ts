//https://nitro.unjs.io/config
export default defineNitroConfig({
  srcDir: "server",
  imports: {
    dirs: ["server/templates"],
  },
  devStorage:{
    users: {
      driver: "fs",
      base: '.data/users'
    },
    comments: {
      driver: "fs",
      base: '.data/comments'
    },
  },
  storage: {
    users: {
      driver: "cloudflare-kv-binding",
      base: 'users'
    },
    comments: {
      driver: "cloudflare-kv-binding",
      base: 'comments'
    },
  },
});
