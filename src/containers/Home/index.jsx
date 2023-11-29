import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";

import LogoImage from "../../assets/main-logo.png";

import H1 from "../../components/Title";
import Button from "../../components/Button";

import {
  Container,
  Image,
  ContainerItens,
  InputLabel,
  Textarea,
} from "./styles";

function App() {
  const [orders, setOrders] = useState([]);
  const inputDemand = useRef();
  const inputName = useRef();
  const navigate = useNavigate();

  async function addNewOrders() {
    const { data: newOrder } = await axios.post(
      "http://localhost:3001/orders",
      {
        demand: inputDemand.current.value,
        name: inputName.current.value,
      }
    );

    setOrders([...orders, newOrder]);
    navigate("/orders");
  }

  return (
    <Container>
      <Image alt="logo-image" src={LogoImage} />

      <ContainerItens>
        <H1>Faça seu pedido!</H1>

        <InputLabel>Pedido</InputLabel>
        <Textarea ref={inputDemand} placeholder="1 Coca-Cola, 1 X-Salada" maxLength={50} wrap="hard"/>

        <InputLabel>Nome do Cliente</InputLabel>
        <Textarea ref={inputName} placeholder="Steve Jobs" maxLength={10}/>

        <Button onClick={addNewOrders}>Novo Pedido</Button>
      </ContainerItens>
    </Container>
  );
}

export default App;
