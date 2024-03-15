import React from "react";
import { useConfig } from "nextra-theme-docs";
import APP from "../lib/constants";

export default function Head() {
  const { title } = useConfig();

  return (
    <>
      <meta name="msapplication-TileColor" content="#fff" />
      <meta name="theme-color" content="#fff" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta
        name="keyword"
        content="learn english, myanmar, idioms, usage, differences, basic english in Myanmar, advanced english in Myanamr, basic english in burmese, advanced english in burmese, learn english in myanmar, english grammar in myanmar, compare with myanmar grammar, english idioms in myanmar, english word usage in myanmar, english word differences in myanmar, learn english in burmese, english grammar in burmese, compare with burmese grammar, english idioms in burmese, english word usage in burmese, english word differences in burmese, luna moonday, whitedark, leib, l.e.i.b."
      />
      <meta name="description" content={APP.description} />
      <meta name="og:description" content={APP.description} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site:domain" content={APP.domain} />
      <meta name="twitter:url" content={APP.domain} />
      <meta
        name="og:title"
        content={title ? title + " - " + APP.nameShort : APP.nameShort}
      />
      <meta name="apple-mobile-web-app-title" content={APP.nameShort} />
      <link rel="icon" href="/favicon.png" type="image/png" />
      {/* <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link
          rel="icon"
          href="/favicon-dark.svg"
          type="image/svg+xml"
          media="(prefers-color-scheme: dark)"
        /> */}
      <link
        rel="icon"
        href="/favicon-dark.png"
        type="image/png"
        media="(prefers-color-scheme: dark)"
      />
    </>
  );
}
