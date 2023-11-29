import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";

import LogoImageOrders from "../../assets/order_ready.png";
import Trash from "../../assets/trash.png";

import H1 from "../../components/Title";
import Button from "../../components/Button";


import { Container, Image, ContainerItens, Order } from "./styles";

function App() {
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchOrders() {
      const { data: newOrder } = await axios.get(
        "http://localhost:3001/orders"
      );

      setOrders(newOrder);
    }
    fetchOrders();
  }, []);

  async function deleteOrder(orderId) {
    await axios.delete(`http://localhost:3001/orders/${orderId}`);
    const deletedOrders = orders.filter((oder) => oder.id !== orderId);
    setOrders(deletedOrders);
  }

  return (
    <Container>
      <Image alt="logo-image" src={LogoImageOrders} />

      <ContainerItens>
        <H1>Pedidos</H1>

        <ul>
          {orders.map((order) => (
            <Order key={order.id}>
              <section> <p>{order.demand}</p> <h3>{order.name}</h3> </section>
              <button onClick={() => deleteOrder(order.id)}>
                  <img src={Trash} alt="trash" />
              </button>
            </Order>
          ))}
        </ul>

        <Button isBack={true} onClick={ () => navigate(-1)}>Voltar</Button>
      </ContainerItens>
    </Container>
  );
}

export default App;
