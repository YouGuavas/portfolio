import Document, { Head, Html, Main, NextScript } from "next/document";
import React from "react";
import Nav from '../components/Nav';


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
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
            <link href="https://fonts.googleapis.com/css2?family=Amatic+SC&family=Oswald:wght@200&display=swap" rel="stylesheet" />
         </Head>
          <body id="#body">
          <Nav links={['Home', 'About', 'Work', 'Skills', 'Contact']} pages={['about']}/> {/*'Blog', 'Obsessions' */}

            <Main />
            <NextScript />
          </body>
        </Html>
      );
    }
  }
  
  export default MyDocument;