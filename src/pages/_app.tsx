// import '../styles/globals.css'
import type { AppProps } from "next/app";
import { Globalstyle } from "../styles/themes/globals";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "../styles/themes/default";
import { Header } from "../components/header";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Header />
      <Component {...pageProps} />
      <Globalstyle />
    </ThemeProvider>
  );
}
