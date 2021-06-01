import { AppProps } from 'next/app';
import { ReactElement } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../lib/themes/global-styles';
import { theme } from '../lib/themes/themes';

const MyApp = ({ Component, pageProps }: AppProps): ReactElement => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default MyApp;
