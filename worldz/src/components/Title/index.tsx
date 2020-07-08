import React from "react";

import styled from "styled-components";

export const Label = styled.h1<StyledProps>`
  font-size: 1.5em;
  text-align: center;
  color: ${({ color }) => color};
`;

interface Props {
  label: string;
  /**
   * color props
   */
  color: "red" | "blue" | "green";
}

interface StyledProps {
  color: "red" | "blue" | "green";
}

const Title = ({ label, color = "red" }: Props) => (
  <Label color={color}>{label}</Label>
);

export default Title;
