import React from "react";
import ServiceCard from "./Card";
import ContactForm from "./Form";
import "./App.css";

// Import service icons
import presentationIcon from "./icons/presentation.png";
import audioVisualIcon from "./icons/audio-visual.png";
import translationIcon from "./icons/translation.png";
import graphicDesignIcon from "./icons/graphic-design.png";
import researchIcon from "./icons/research.png";
import dataProcessingIcon from "./icons/data-processing.png";

import EZlogoicon from "./icons/EZlogo.png";
// import ContactForm from "./Form";

function App() {
  const services = [
    {
      title: "Presentation Design",
      description:
        "Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet",
      icon: presentationIcon,
    },
    {
      title: "Audio - Visual Production",
      description:
        "Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet",
      icon: audioVisualIcon,
    },
    {
      title: "Translation Services",
      description:
        "Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet",
      icon: translationIcon,
    },
    {
      title: "Graphic Design",
      description:
        "Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet",
      icon: graphicDesignIcon,
    },
    {
      title: "Research & Analytics",
      description:
        "Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet",
      icon: researchIcon,
    },
    {
      title: "Data Processing",
      description:
        "Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet",
      icon: dataProcessingIcon,
    },
  ];

  return (
    <div className="main">
      {/* <Header /> */}
      <div className="left">
        <header className="heading">
          <img src={EZlogoicon} alt="EZ Works Logo" />
          <h1>Suite Of Business Support Services</h1>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt...Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed
          </p>
          <ContactForm />
        </header>
      </div>

      <div className="right-wrapper">
        <div className="right">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
