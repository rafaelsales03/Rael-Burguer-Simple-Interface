import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  background: #0a0a10;
`;

export const Image = styled.img`
  width: 329px;
  height: 318px;
`;

export const ContainerItens = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Order = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 19px 20px 18px 20px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.25);

  min-height: 100px;
  margin-top: 20px;

  p {
    color: #fff;
    font-weight: 300;
    line-height: normal;
    font-size: 14px;
  }

  h3 {
    color: #fff;
    font-size: 15px;
    font-weight: 700;
    line-height: normal;

    margin-top: 10px;
  }

  button {
    background: none;
    border: none;
    cursor: pointer;
  }

  section {
    display: flex;
    flex-direction: column;
    margin-right: 20px;
  }
`;
