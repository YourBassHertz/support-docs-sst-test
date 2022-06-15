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
    path: "frontend",
    environment: {
      // Pass the table details to our app
      NEXT_PUBLIC_GTM_ID: process.env.NEXT_PUBLIC_GTM_ID ? process.env.NEXT_PUBLIC_GTM_ID : '',
      NEXT_PUBLIC_ALGOLIA_APP_ID: process.env.NEXT_PUBLIC_ALGOLIA_APP_ID ? process.env.NEXT_PUBLIC_ALGOLIA_APP_ID : '',
      NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY: process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY ? process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY : '',
      ALGOLIA_SEARCH_ADMIN_KEY: process.env.ALGOLIA_SEARCH_ADMIN_KEY ? process.env.ALGOLIA_SEARCH_ADMIN_KEY : '',
    },
  });

  // Show the site URL in the output
  stack.addOutputs({
    URL: site.url,
  });
}
