import styled from "styled-components";


export const Button = styled.button`
  background-color: #484CAD;
  border: none;
  border-radius: 4px;
  box-shadow: 0 0 2px #111111;
  color: #ffffff;
  cursor: pointer;
  font-size: 1em;
  min-width: 100px;
  outline: none;
  padding: 8px;
  text-transform: uppercase;

  :hover {
    background-color: #5b60e5;
    transition: 200ms
  }
`