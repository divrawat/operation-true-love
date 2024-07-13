import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="monetag" content="6c604fa49cc658a0a65281a4faa3d32b" />

        <Script
          id="monetag-script"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(s,u,z,p){s.src=u,s.setAttribute('data-zone',z),p.appendChild(s);})(document.createElement('script'),'https://zovidree.com/tag.min.js',7726018,document.body||document.documentElement)`,
          }}
        />


      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
