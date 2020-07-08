import React from "react";

import styled from "styled-components";

export const Label = styled.h1<StyledProps>`
  font-size: 24px;
  color: ${({ color }) => color};
`;

interface Props {
   /**
   * Set this to change the title text
   */
  label: string;
  /**
   * Set this to change title color
   * @default red
   */
  color: "red" | "blue" | "green";
}

interface StyledProps {
  color: "red" | "blue" | "green";
}

const Title = ({ label, color = "green" }: Props) => (
  <Label color={color}>{label}</Label>
);

export default Title;
