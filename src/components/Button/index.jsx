import React from "react";

import { Button as ComponentsButton } from "./styles";

function Button({ children, ...props }) {
  return <ComponentsButton {...props}>{children}</ComponentsButton>;
}

export default Button;
