import Document, { Head, Html, Main, NextScript } from "next/document";
import React from "react";


class MyDocument extends Document {
    static async getInitialProps(ctx) {
      const initialProps = await Document.getInitialProps(ctx);
      return { ...initialProps };
    }
  
    render() {
      return (
        <Html>
          <Head>
            <meta charset="utf-8" />
            <meta name="theme-color" content="#000000" />
            <meta
            name="description"
            content="Patrick Yambrick's portfolio website"
            />
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