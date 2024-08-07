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
  console: {
    autodeploy: {
      target(event) {
        if (
          event.type === "branch" &&
          event.branch === "main" &&
          event.action === "pushed"
        ) {
          return {
            stage: "production",
          }
        }

        if (event.type === "pull_request") {
          return {
            stage: `pr-${event.number}`,
          }
        }
      },
    },
  },
  async run() {
    const domain =
      $app.stage === "production"
        ? "carlo.works"
        : $app.stage + "staging.carlo.works"

    const web = new sst.aws.Astro("Web", {
      dev: {
        command: "pnpm dev",
        url: "http://localhost:3000",
        autostart: true,
      },
      domain: {
        name: domain,
        redirects: [`www.${domain}`],
        dns: sst.cloudflare.dns(),
      },
    })

    return {
      web: web.url,
    }
  },
})
