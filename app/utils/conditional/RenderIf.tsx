import {ReactElement, ReactNode} from 'react';

export interface IRenderIfProps {
  isTrue: boolean;
  children: ReactNode;
}

const RenderIf: React.FC<IRenderIfProps> = ({isTrue, children}) =>
  isTrue ? (children as ReactElement<unknown>) : null;

export default RenderIf;
