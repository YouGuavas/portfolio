import Document, { Head, Html, Main, NextScript } from 'next/document';
import React from 'react';

class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}
	render() {
		return (
			<Html lang="en">
				<Head>
					<meta charSet="utf-8" />
					<meta name="theme-color" content="#000000" />
					<meta
						name="description"
						content="Patrick Yambrick's portfolio website"
					/>
					<link rel="preconnect" href="https://fonts.googleapis.com" />
					<link
						rel="preconnect"
						href="https://fonts.gstatic.com"
						crossOrigin="true"
					/>
					<link
						href="https://fonts.googleapis.com/css2?family=Amatic+SC:wght@400;700&family=Exo+2:ital,wght@0,100..900;1,100..900&family=Lora:ital,wght@0,400..700;1,400..700&family=Orbitron:wght@400..900&family=Patrick+Hand&display=swap"
						rel="stylesheet"
					/>
				</Head>
				<body id="#body">
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
