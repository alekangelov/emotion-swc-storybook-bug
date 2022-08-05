import styled from "@emotion/styled";
const Selector = styled.div`
  color: red;
`;
const Wrapper = styled.div`
  color: blue;
  ${Selector} {
    color: green;
  }
`;

export const Index = () => {
  return (
    <Wrapper>
      jakoto
      <Selector>Jakoto</Selector>
    </Wrapper>
  );
};
