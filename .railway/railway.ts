import {
  defineRailway,
  github,
  preserve,
  project,
  service,
} from "railway/iac";

export default defineRailway(() => {
  const web = service("marketing-site", {
    source: github("TreehouseTechnology/marketing-site", { branch: "main" }),
    build: "pnpm build",
    start: "pnpm start",
    healthcheck: "/api/health",
    healthcheckTimeout: 120,
    env: {
      NODEMAILER_EMAIL: preserve(),
      NODEMAILER_PASSWORD: preserve(),
    },
  });

  return project("marketing-site", { resources: [web] });
});
