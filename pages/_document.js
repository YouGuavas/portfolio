import Document, { Head, Html, Main, NextScript } from "next/document";
import React from "react";


class MyDocument extends Document {
    static async getInitialProps(ctx) {
      const initialProps = await Document.getInitialProps(ctx);
      return { ...initialProps };
    }
  
    render() {
      return (
        <Html lang='en'>
          <Head>
            <meta charSet="utf-8" />
            <meta name="theme-color" content="#000000" />
            <meta
            name="description"
            content="Patrick Yambrick's portfolio website"
            />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=Amatic+SC&family=Oswald:wght@200&display=swap" rel="stylesheet" />
         </Head>
          <body>
            <Main />
            <NextScript />
          </body>
        </Html>
      );
    }
  }
  
  export default MyDocument;