import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GOOGLE_TAG}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
            title="google-tag-manager"
          />
        </noscript>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
