import Document, {Html, Head, Main, NextScript} from "next/document";

export default class XDocument extends Document {
  render(): JSX.Element {
    return (
      <Html>
        <Head>
          <link href="https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,100;0,400;1,100&display=swap"
                rel="stylesheet"/>
        </Head>
        <body>
          <Main/>
          <NextScript/>
        </body>
      </Html>
    )
  }
}
