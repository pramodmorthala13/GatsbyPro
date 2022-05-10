import React from "react";
import GlobalStyles from "../styles/GlobalStyles";
import Footer from "./Footer";
import Header from "./Header";
import { SearchModalContextProvider } from "../context/searchModalContext";
import Search from "./search/SearchModal";
import posthog from 'posthog-js';

const Layout = ({ children }) => {
  posthog.init("phc_RTmH4J8QRMDOrvF05HFOufKwU004g0QQE2jezSDQr8H", {api_host: 'https://app.posthog.com'});
  posthog.capture('$pageview')
  return (
    <SearchModalContextProvider>
      <GlobalStyles />
      <Search />
      <Header />
      {children}
      <Footer />
    </SearchModalContextProvider>
  );
};

export default Layout;
