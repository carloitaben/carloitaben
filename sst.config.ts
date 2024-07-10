/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "carloitaben",
      removal: input?.stage === "production" ? "retain" : "remove",
      home: "aws",
      providers: {
        cloudflare: true,
      },
    }
  },
  async run() {
    const web = new sst.aws.Astro("Web", {
      domain: {
        name: "carlo.works",
        dns: sst.cloudflare.dns(),
      },
    })

    return {
      web,
    }
  },
})
