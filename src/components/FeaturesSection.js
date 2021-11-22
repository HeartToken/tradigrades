import React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Section from "components/Section";
import SectionHeader from "components/SectionHeader";
import AspectRatio from "components/AspectRatio";
import ModalLauncher from "components/ModalLauncher";

function FeaturesSection(props) {
  const items = [
    {
      title: "MUG 1",
      body: "Integer ornare neque mauris, ac vulputate lacus venenatis et. Pellentesque ut ultrices purus.",
      image: "../img/MUG-5.png",
    },
    {
      title: "MUG 2",
      body: "Nunc nulla mauris, laoreet vel cursus lacinia, consectetur sit amet tellus.",
      image: "../img/MUG-1.png",
    },
    {
      title: "T SHIRT 1",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lobortis, metus et mattis ullamcorper",
      image: "../img/tshirt3.png",
    },
    {
      title: "T SHIRT 2",
      body: "Suspendisse ut tincidunt eros. In velit mi, rhoncus dictum neque a, tincidunt lobortis justo",
      image: "../img/tshirt1.png",
    },
    {
      title: "T SHIRT 3",
      body: "Suspendisse ut tincidunt eros. In velit mi, rhoncus dictum neque a, tincidunt lobortis justo",
      image: "../img/tshirt2.png",
    },
    {
      title: "VASE 1",
      body: "Suspendisse ut tincidunt eros. In velit mi, rhoncus dictum neque a, tincidunt lobortis justo",
      image: "../img/vase1.png",
    },
    {
      title: "VASE 2",
      body: "Suspendisse ut tincidunt eros. In velit mi, rhoncus dictum neque a, tincidunt lobortis justo",
      image: "../img/vase2.png",
    },
    {
      title: "MUG 3",
      body: "Suspendisse ut tincidunt eros. In velit mi, rhoncus dictum neque a, tincidunt lobortis justo",
      image: "../img/MUG-3.png",
    },
  ];

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
          size={2}
          spaced={true}
        />
        <Card>
          <Row className="no-gutters overflow-hidden">
            {items.map((item, index) => (
              <Col
                xs={12}
                lg={6}
                style={{
                  display: "flex",
                  alignItems: "stretch",
                  justifyContent: "center",
                  boxShadow: "1px 1px 0 0 #efefef",
                }}
                key={index}
              >
                <div className="FeaturesSection__item has-text-centered">
                  <div className="FeaturesSection__image-container">
                    <AspectRatio ratio={1}>
                      <Image src={item.image} alt={item.title} fluid={true} />
                    </AspectRatio>
                  </div>
                  <h4>{item.title}</h4>
                  <p>{item.body}</p>
                  <ModalLauncher 
                      title = {item.title}
                      src={item.image}
                  
                  />
                </div>
              </Col>
            ))}
          </Row>
        </Card>
      </Container>
    </Section>
  );
}

export default FeaturesSection;
