import React from "react";
import SiteBackground from "./SiteBackground";
import Footer from "../Footer/Footer";

/** Inner pages (not the home landing) — site background + footer */
const PageShell = ({ children }) => (
  <SiteBackground className="min-h-screen">
    {children}
    <Footer />
  </SiteBackground>
);

export default PageShell;
