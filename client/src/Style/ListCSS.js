import styled from '@emotion/styled';

const ListDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 20px;
  padding-top: 1rem;
  padding-bottom: 1rem;
  max-width: 90%;
  margin: 0 auto !important;
  /* @media (max-width: 756px) {
    width: 90%;
  } */
`;

const ListItem = styled.div`
  width: 320px;
  min-height: 380px;
  background: #ffffff;
  margin-top: 5vh;
  padding: 20px;
  /* box-shadow: 0px 15px 38px rgba(0, 0, 0, 0.3), 0px 15px 12px rgba(0, 0, 0, 0.1); */
  /* flex: 0 0 25%; */
  a {
    color: black;
    text-decoration: none;
    .title {
      font-weight: bold;
    }
  }
`;

export { ListDiv, ListItem };
