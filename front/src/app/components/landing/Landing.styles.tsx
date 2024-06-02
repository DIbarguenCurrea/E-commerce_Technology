'use client'

import styled from "styled-components";

const LandingPage = styled.div`
  text-align: center;
  height: 90vh;
  display: flex; 
  flex-direction: column;
  justify-content: center; 
  font-family: ui-sans-serif, system-ui, sans-serif;
  line-height: 36px;

  h1 {
    font-weight: 700;
    color: #3F375C;
    font-size: 8vmax;
  }

  p {
    font-size: 2vmax;
    line-height: 28px;
    margin-bottom: 15px;
  }

  button {
    display: inline-flex;
    font-size: 20px;
    line-height: 28px;
    font-weight: 500;
    background-color: #3F375C;
    padding: 8px 16px;
    margin-top: 12px;
    border-radius: 8px;
    color: white;
    &:hover {
      background-color: #BC8034;
    }
  }
`
const Bg_image = styled.div`
  background-size: cover;
  background-image: url("https://img.freepik.com/fotos-premium/carrito-compra-juguetes-cajas-tarjeta-credito-espacio-copia_339191-197.jpg?size=626&ext=jpg&ga=GA1.1.1488620777.1712880000&semt=ais");
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;  
`
export {
  LandingPage,
  Bg_image
}