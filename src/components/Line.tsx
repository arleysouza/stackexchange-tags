import { ReactNode } from "react";
import styled from "styled-components";

export default function Line ({ children }: Props) {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;

interface Props {
  children: ReactNode;
}
