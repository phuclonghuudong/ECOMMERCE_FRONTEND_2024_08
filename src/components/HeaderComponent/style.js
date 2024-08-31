import { Row } from "antd";
import styled from "styled-components";

export const WrapperHeader = styled(Row)`
  padding: 10px 0;
  width: 1270px;
  background-color: rgb(255, 0, 0);
  align-items: center;
  gap: 16px;
  flex-wrap: nowrap;
`;
export const WrapperTextHeader = styled.span`
  font-size: 18px;
  color: #fff;
  font-weight: bold;
  font-family: "Permanent Marker", cursive;
  text-align: center;
`;
export const WrapperHeaderAccount = styled.div`
  display: flex;
  align-items: center;
  color: #fff;
  gap: 10px;
  font-size: 12px;
`;
export const WrapperTextHeaderSmall = styled.span`
  font-size: 12px;
  color: #fff;
  white-space: nowrap;
`;
