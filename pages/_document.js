import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta
          name="description"
          content="MINeD 2023 Hackathon is organised by Nirma University"
        />
        <link rel="shortcut icon" href="/favicon.png" />
        <meta
          property="og:image"
          content="https://www.mined2023.tech/logo.png"
        ></meta>
        <meta property="og:title" content="MINeD 2023 Hackathon"></meta>
        <meta
          property="og:description"
          content="MINeD 2023 Hackathon is organised by Nirma University"
        ></meta>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="MINeD 2023 Hackathon" />
        <meta
          name="twitter:description"
          content="MINeD 2023 Hackathon is organised by Nirma University"
        />
        <meta
          name="twitter:image"
          content="https://www.mined2023.tech/logo.png"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
