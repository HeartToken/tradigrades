import React from "react";
import Container from "react-bootstrap/Container";
import Section from "components/Section";
import SectionHeader from "components/SectionHeader";

function HeroSection(props) {
  return (
    <Section
      bg={props.bg}
      textColor={props.textColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
    >
      <Container className="text-center">
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          size={1}
          spaced={true}
        />
      </Container>
    </Section>
  );
}

export default HeroSection;
