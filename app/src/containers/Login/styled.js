import styled from 'styled-components';

export const BG = styled.div`
  background-color: ${props => props.theme.palette.primary.main};
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
`;

export const Main = styled.main`
  width: 400px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: auto;
  margin-bottom: auto;

  & .avatar {
    margin: ${props => props.theme.space.unit}px;
    background-color: ${props => props.theme.palette.secondary.main};
  }

  & .paper2 {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: ${props => props.theme.space.unit * 2}px
      ${props => props.theme.space.unit * 3}px
      ${props => props.theme.space.unit * 3}px;
    background-color: ${props => props.theme.palette.primary.main};
    color: ${props => props.theme.palette.primary.text};
    box-shadow: none;
  }

  & .paper {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: ${props => props.theme.space.unit * 2}px
      ${props => props.theme.space.unit * 3}px
      ${props => props.theme.space.unit * 3}px;
  }

  & .form {
    width: 100%;
    margin-top: ${props => props.theme.space.unit}px;
  }

  & .submit {
    margin-top: ${props => props.theme.space.unit * 3}px;
    background-color: ${props => props.theme.palette.primary.main};
    color: ${props => props.theme.palette.primary.text};
  }
`;
