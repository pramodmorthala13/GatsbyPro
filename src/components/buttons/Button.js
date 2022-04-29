import React from "react";
import {ButtonStyles} from "../../styles/buttons/ButtonStyles";
import { buttonTypes}  from "../../constants/buttonTypes";

const Button = ({ children, tag, variant = buttonTypes.primary, ...props }) => {
  return (
    <ButtonStyles as={tag} variant={variant} {...props}>
      {children}
    </ButtonStyles>
  );
};

export default Button;
