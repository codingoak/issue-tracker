import styled from 'styled-components/macro';

export default function HeadingMain({ title }) {
  return (
    <header>
      <Header>{title}</Header>
    </header>
  );
}

const Header = styled.h1`
  background: linear-gradient(var(--bg-color-dark), #144e74);
  color: var(--font-color-light);
  display: grid;
  font-size: 24px;
  height: 44px;
  letter-spacing: 3px;
  margin: 0 0 10px 0;
  place-items: center;
  top: 0;
  width: 100%;
`;