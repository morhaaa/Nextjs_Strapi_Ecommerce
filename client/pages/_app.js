import "../styles/globals.css";
import Layout from "../components/layout";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import Head from "next/head";
import ProgressBar from "@badrap/bar-of-progress";
import { Router } from "next/router";

const progress = new ProgressBar({
  size: 4,
  color: "#94a3b8",
  className: "z-50",
  delay: 100,
});

Router.events.on("routeChangeStart", progress.start);
Router.events.on("routeChangeComplete", progress.finish);
Router.events.on("routeChangeError", progress.finish);

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Head>
        <title>Store, where can you find everything</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/Logo.svg" />
      </Head>
      <Layout>
        {" "}
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}