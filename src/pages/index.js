import React from "react";
import Meta from "components/Meta";
import NavbarCustom from "components/NavbarCustom";
import HeroSection from "components/HeroSection";
import FeaturesSection from "components/FeaturesSection";
import Footer from "components/Footer";

function IndexPage(props) {
  return (
    <>
      <Meta />
      <NavbarCustom
        bg="white"
        variant="light"
        expand="md"
        logo={'../img/label.jpg'}
      />
      <HeroSection
        bg="white"
        textColor="dark"
        size="md"
        bgImage={'../img/banner.png'}
        bgImageOpacity={1}
        title=""
        subtitle=""
        buttonText="Get Started"

      />
      <FeaturesSection
        bg="white"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title="FEATURED PRODUCTS"
        subtitle="ALL PRODUCTS YOU NEED TO KNOW"
      />
      <Footer
        bg="white"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        copyright={`© ${new Date().getFullYear()} Company`}
        logo={'../img/label.jpg'}
      />
    </>
  );
}

export default IndexPage;
