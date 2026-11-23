import Document, { Html, Head, Main, NextScript } from 'next/document';
import { AppRegistry } from 'react-native';

export default class NativeBaseDocument extends Document {
  static async getInitialProps(ctx) {
    AppRegistry.registerComponent('Main', () => Main);
    const initialProps = await Document.getInitialProps(ctx);
    const { getStyleElement } = AppRegistry.getApplication('Main');
    return {
      ...initialProps,
      styles: [initialProps.styles, getStyleElement()],
    };
  }
  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
