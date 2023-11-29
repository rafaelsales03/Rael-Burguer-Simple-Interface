import styled from "styled-components";


export const Button = styled.button`
  background: #d93856;
  width: 342px;
  height: 68px;
  padding: 0px 113px;
  margin: 10px auto;
  border: none;
  border-radius: 14px;

  color: #fff;
  font-weight: 700;
  line-height: normal;
  font-size: 17px;
  line-height: 2.5px;

  cursor: pointer;
  transition: 0.2s ease-in-out;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.6;
  }

  ${ props => props.isBack && `
  
    margin: 40px auto;
  
  `}
`;