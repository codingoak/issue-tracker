import styled from 'styled-components/macro';
import { NavLink } from 'react-router-dom';
import Heading from '../components/Heading';

export default function MyIssues({ myIssues, toggleMyPin }) {
  return (
    <>
      <header>
        <Heading title="MY ISSUES" />
      </header>
      <main>
        {myIssues.length > 0 ? (
          <HeadingWrapper>
            <HeadingTitle>Title</HeadingTitle>
            <HeadingState>State</HeadingState>
          </HeadingWrapper>
        ) : (
          <EmptyState>Create an issue on the add page</EmptyState>
        )}
        {myIssues?.map(myIssue => {
          return (
            <Wrapper
              key={myIssue.id}
              title={myIssue.title}
              state={myIssue.state}
            >
              <Link to={`/${myIssue.id}`}>
                <IssueTitle>{myIssue.title}</IssueTitle>
                <IssueState>{myIssue.state}</IssueState>
              </Link>
              <PinButton
                aria-label="PinButton"
                onClick={() => {
                  toggleMyPin(myIssue.id, myIssues);
                }}
              >
                {myIssue.isPinned ? (
                  <svg
                    role="img"
                    aria-label="Pin fill"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <title>Pin</title>
                    <path d="M9.828.722a.5.5 0 0 1 .354.146l4.95 4.95a.5.5 0 0 1 0 .707c-.48.48-1.072.588-1.503.588-.177 0-.335-.018-.46-.039l-3.134 3.134a5.927 5.927 0 0 1 .16 1.013c.046.702-.032 1.687-.72 2.375a.5.5 0 0 1-.707 0l-2.829-2.828-3.182 3.182c-.195.195-1.219.902-1.414.707-.195-.195.512-1.22.707-1.414l3.182-3.182-2.828-2.829a.5.5 0 0 1 0-.707c.688-.688 1.673-.767 2.375-.72a5.922 5.922 0 0 1 1.013.16l3.134-3.133a2.772 2.772 0 0 1-.04-.461c0-.43.108-1.022.589-1.503a.5.5 0 0 1 .353-.146z" />
                  </svg>
                ) : (
                  <svg
                    role="img"
                    aria-label="Pin empty"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M9.828.722a.5.5 0 0 1 .354.146l4.95 4.95a.5.5 0 0 1 0 .707c-.48.48-1.072.588-1.503.588-.177 0-.335-.018-.46-.039l-3.134 3.134a5.927 5.927 0 0 1 .16 1.013c.046.702-.032 1.687-.72 2.375a.5.5 0 0 1-.707 0l-2.829-2.828-3.182 3.182c-.195.195-1.219.902-1.414.707-.195-.195.512-1.22.707-1.414l3.182-3.182-2.828-2.829a.5.5 0 0 1 0-.707c.688-.688 1.673-.767 2.375-.72a5.922 5.922 0 0 1 1.013.16l3.134-3.133a2.772 2.772 0 0 1-.04-.461c0-.43.108-1.022.589-1.503a.5.5 0 0 1 .353-.146zm.122 2.112v-.002.002zm0-.002v.002a.5.5 0 0 1-.122.51L6.293 6.878a.5.5 0 0 1-.511.12H5.78l-.014-.004a4.507 4.507 0 0 0-.288-.076 4.922 4.922 0 0 0-.765-.116c-.422-.028-.836.008-1.175.15l5.51 5.509c.141-.34.177-.753.149-1.175a4.924 4.924 0 0 0-.192-1.054l-.004-.013v-.001a.5.5 0 0 1 .12-.512l3.536-3.535a.5.5 0 0 1 .532-.115l.096.022c.087.017.208.034.344.034.114 0 .23-.011.343-.04L9.927 2.028c-.029.113-.04.23-.04.343a1.779 1.779 0 0 0 .062.46z" />
                  </svg>
                )}
              </PinButton>
            </Wrapper>
          );
        })}
      </main>
    </>
  );
}

const HeadingWrapper = styled.section`
  margin-bottom: -15px;
  display: grid;
  grid-template-columns: 10px 1fr 52px 32px 10px 10px;
`;

const HeadingTitle = styled.h2`
  grid-column: 2/3;
  letter-spacing: 2px;
  padding-left: 10px;
  border-bottom: 1px solid var(--border-color-dark);
`;

const HeadingState = styled.h2`
  grid-column: 3/6;
  letter-spacing: 2px;
  border-bottom: 1px solid var(--border-color-dark);
`;

const Wrapper = styled.section`
  margin-left: 10px;
  margin-right: 10px;
  display: grid;
  align-items: center;
  grid-template-columns: 10px 1fr 52px 42px;
  grid-template-rows: 60px;
  :nth-of-type(2n) {
    background-color: var(--bg-color-light);
    border-radius: 5px;
  }
`;

const EmptyState = styled.p`
  margin-top: 50px;
  display: grid;
  place-items: center;
`;

const Link = styled(NavLink)`
  display: inherit;
  align-items: center;
  grid-column: 1 /4;
  grid-template-columns: 10px 1fr 52px;
  grid-template-rows: 60px;
  &:link,
  &:visited,
  &:hover,
  &:active {
    text-decoration: none;
    color: inherit;
  }
`;

const IssueTitle = styled.p`
  grid-column: 2/3;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const IssueState = styled.div`
  grid-column: 3;
`;

const PinButton = styled.button`
  grid-column: 4/6;
  justify-self: end;
  width: 42px;
  height: 42px;
  background: none;
  border: none;
  border-radius: 50%;
`;
