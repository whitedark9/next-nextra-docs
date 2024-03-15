import React from "react";
import Footer from "../components/Footer";
import APP from "../lib/constants";
import Logo from "./Logo";

export default function FooterComponent() {
  const Description = (
    <>
      <p>Here is a site-map for you, so you may search some chapters easily.</p>
    </>
  );

  return (
    <Footer
      appName={APP.name}
      logo={<Logo size={42} alwaysDetail={true} />}
      description={Description}
    >
      <Footer.Section title="Docs">
        <Footer.Item href="/documentation">Documentation</Footer.Item>
      </Footer.Section>
    </Footer>
  );
}
