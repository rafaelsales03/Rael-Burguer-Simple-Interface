import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;

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

export const InputLabel = styled.p`
  color: #eee;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: -0.408px;
  font-size: 16px;
  margin-left: 15px;
`;
export const Textarea = styled.textarea`
  display: flex;
  align-items: center;
  resize: none;

  width: 400px;
  height: 60px;
  
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.25);
  
  margin-bottom: 40px;
  padding: 19px 139px 18px 15px;

  
  border: none;
  outline: none;

  color: #fff;
  font-weight: 300;
  line-height: normal;
  font-size: 18px;
`;



