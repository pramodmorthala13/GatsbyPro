import React from "react";
import GlobalStyles from "../styles/GlobalStyles";
import Footer from "./Footer";
import Header from "./Header";
import { SearchModalContextProvider } from "../context/searchModalContext";
import Search from "./search/SearchModal";

const Layout = ({ children }) => {
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
