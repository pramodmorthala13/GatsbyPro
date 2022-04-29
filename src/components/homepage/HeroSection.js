import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { HeroSectionStyles } from "../../styles/homePage/HeroSectionStyles";
import Button from "../buttons/Button";
import ParagraphText from '../typography/ParagraphText'

const HeroSection = () => {
  return (
    <HeroSectionStyles>
      <div className="container">
        <div className="hero__wrapper">
          <div className="left">
            <h1 className="hero__headding">Gatsby Sanity</h1>
            <ParagraphText className="hero__text">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur, omnis fugit ratione pariatur excepturi vitae quaerat voluptatem. Sunt quae aliquid perspiciatis cum adipisci accusamus! Voluptates labore cupiditate corrupti a. Facere!
            </ParagraphText>
            
            <Button to="/blog" tag={Link} className="hero__button">Explor Blog's</Button>
          </div>
          <div className="right">
              <StaticImage className="hero__image" src="../../images/vr-guy.jpg" alt="vr guy" placeholder="blurred" objectPosition="50% 30%"></StaticImage>
          </div>
        </div>
      </div>
    </HeroSectionStyles>
  );
};

export default HeroSection;
