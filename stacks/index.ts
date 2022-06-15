import { SupportDocsStack } from "./SupportDocsStack";
import { App } from "@serverless-stack/resources";

export default function (app: App) {
  app.setDefaultFunctionProps({
    runtime: "nodejs16.x",
    srcPath: "api",
    bundle: {
      format: "esm",
    },
  });
  app.stack(SupportDocsStack);
}
