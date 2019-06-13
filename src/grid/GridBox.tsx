import React from "react";
import styled from "styled-components";

const FlexBoxContainer = styled.div`
  display: flex;
  width: 100%;
`;
interface ChildProps {
  base: number;
}
const Child = styled.div((props: ChildProps) => `flex:${props.base}`);
interface ContainerProps {}
export const Row: React.FunctionComponent<ContainerProps> = ({ children }) => {
  return (
    <FlexBoxContainer>
      {React.Children.map(children, child => {
        if (React.isValidElement(child) && child.type === Box) {
          return child;
        } else {
          return <Box>{child}</Box>;
        }
      })}
    </FlexBoxContainer>
  );
};
interface BoxProps {
  base?: number;
}
export const Box: React.FunctionComponent<BoxProps> = ({
  children,
  base = 1
}) => {
  return <Child base={base}>{children}</Child>;
};
