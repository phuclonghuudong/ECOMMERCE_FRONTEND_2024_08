import styled from "styled-components";
import ButtonComponent from "./../../components/ButtonComponent/index";

export const WrapperTypeProduct = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  justify-content: flex-start;
  /* border-bottom: 1px solid red; */
  height: 30px;
`;
export const WrapperButtonMore = styled(ButtonComponent)`
  &:hover {
    color: #fff;
    background: rgb(13, 92, 182);
    span {
      color: #fff;
    }
  }
  width: 100%;
  align-items: center;
`;
export const WrapperProducts = styled.div`
  display: flex;
  /* justify-content: center; */
  gap: 14px;
  margin-top: 20px;
  flex-wrap: wrap;
`;
