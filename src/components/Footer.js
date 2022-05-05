import { Link } from "gatsby";
import React from "react";
import { menu } from "../constants/menu";
import { socialLinks } from "../constants/socialLinks";
import { FooterStyles } from "../styles/FooterStyles";
import Logo from "./Logo";
import ParagraphText from "./typography/ParagraphText";

const Footer = () => {
  return (
    <FooterStyles>
      <div className="container">
        <Logo />
        <ParagraphText className="footer__text">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium
          iusto voluptatibus alias delectus consequatur nulla officiis quod
          dicta corrupti, cumque nesciunt praesentium vero rerum expedita
          possimus! Facere exercitationem obcaecati eveniet?
        </ParagraphText>

        <ul className="footer__menuList">
          {menu.map((item) => {
            return (
              <li key={item.title}>
                <Link to={item.path}>{item.title}</Link>
              </li>
            );
          })}
        </ul>
        <ul className="footer__socialList">
          {socialLinks.map((social) => {
            return (
              <li key={social.name}>
                <a href={social.url}>{social.icon}</a>
              </li>
            );
          })}
        </ul>

        <ParagraphText className="copyright">
          @Copyrights {new Date().getFullYear()}
        </ParagraphText>
      </div>
    </FooterStyles>
  );
};

export default Footer;
