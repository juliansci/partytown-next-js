/* eslint-disable @next/next/next-script-for-ga */
/* eslint-disable @next/next/no-sync-scripts */
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Partytown } from "@builder.io/partytown/react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>My App</title>
        <Partytown
          debug={false}
          forward={["dataLayer.push"]}
          loadScriptsOnMainThread={[]}
          resolveUrl={(url, location, type) => {
            console.log({
              url,
              location,
              type,
            });
            const proxyHostnameMap = {
              "js.hs-analytics.net": "https://partytown-next-js.vercel.app",
              "js.hsadspixel.net": "https://partytown-next-js.vercel.app",
            } as any;
            const proxyPathnameMap = {
              "js.hs-analytics.net": "/proxy/js-hs-analytics-net",
              "js.hsadspixel.net": "/proxy/js-hs-adspixel-net",
            } as any;
            const newHostname = proxyHostnameMap[url.hostname] || url.hostname;
            const newPathname = proxyPathnameMap[url.hostname]
              ? `${proxyPathnameMap[url.hostname]}${url.pathname}`
              : url.pathname;
            url.hostname = newHostname;
            url.pathname = newPathname;
            console.log("newHostname: ", newHostname);
            console.log("newPathname: ", newPathname);
            return url;
          }}
        />
        <script
          id="gtm-script"
          type="text/partytown"
          dangerouslySetInnerHTML={{
            __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer', '${process.env.NEXT_PUBLIC_GOOGLE_TAG}');
          `,
          }}
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
