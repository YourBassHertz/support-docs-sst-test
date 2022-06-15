import { 
  StackContext,
  NextjsSite, 
  Api 
} from "@serverless-stack/resources";

export function SupportDocsStack({ stack }: StackContext) {
  new Api(stack, "api", {
    routes: {
      "GET /": "functions/lambda.handler",
    },
  });

  // Create a Next.js site
  const site = new NextjsSite(stack, "Site", {
    path: "frontend"
  });

  // Show the site URL in the output
  stack.addOutputs({
    URL: site.url,
  });
}
