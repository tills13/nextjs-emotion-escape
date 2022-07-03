import styled from "@emotion/styled";

const Icon = styled.span`
  &::before {
    content: "\u203A";
    color: green;
  }
`;

export default function IndexPage() {
  return <Icon />;
}
