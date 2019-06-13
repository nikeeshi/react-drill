import { ReactNode, createContext, FunctionComponent } from "react";
import styled from "styled-components/macro";
type HSL = {
  hue: number;
  saturation: number;
  lightness: number;
};
export function hsl(hue: number, saturation: number, lightness: number): HSL {
  return { hue, saturation, lightness };
}
function hslToCss(hsl: HSL): string {
  return `hsl(${hsl.hue},${hsl.saturation}%,${hsl.lightness}%)`;
}
const ContrastContext = createContext(hsl(10, 10, 10));

type BlockProps = {
  children: ReactNode;
};
// const Block = styled.div`
//   width: 100%;
//   background-color: hsl(${props => props.backgroundColor});
// `;
// export const ContrastBlock: FunctionComponent<BlockProps> = ({ children }) => {
//   return (
//     <ContrastContext.Consumer>
//       {back => <Block backgroundColor={back}>{children}</Block>}
//     </ContrastContext.Consumer>
//   );
// };
export default ContrastContext;
