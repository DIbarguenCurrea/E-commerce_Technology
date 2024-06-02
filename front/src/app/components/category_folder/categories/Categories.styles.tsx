import styled from "styled-components"

const CategoryContainer = styled.div`
  box-shadow: rgb(38, 57, 77) 0px 10px 15px -10px;
  background: linear-gradient(186deg, rgba(194,194,200,1) 0%, rgba(168,168,168,1) 95%);
  border-radius: 5px;
  margin: 0px 7px;
  color: black;
  padding: 10px;
  cursor: pointer;
  font-family: sans-serif;
  @media (max-width: 768px) {
    display:none
  }
`
export {
  CategoryContainer,
}