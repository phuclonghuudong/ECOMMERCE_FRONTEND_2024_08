import React from "react";
import { StyleNameProduct, WrapperCardStyle, WrapperDiscountText, WrapperPriceText, WrapperReport } from "./style";
import { StarFilled } from "@ant-design/icons";
import logo from "../../assets/images/logo.png";

const CardComponent = () => {
  return (
    <div>
      <WrapperCardStyle
        hoverable
        headStyle={{ width: "200px", height: "200px" }}
        style={{ width: 200 }}
        bodyStyle={{ padding: "10px" }}
        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
      >
        <img src={logo} style={{ width: "200px", height: "154px", position: "absolute", left: "-1px", top: "45px" }} />
        <StyleNameProduct>Name</StyleNameProduct>
        <WrapperReport>
          <span style={{ marginRight: "4px" }}>
            <span>4.96</span> <StarFilled style={{ fontSize: "12px", color: "yellow" }} />
          </span>
          <span>| Đã bán 100+</span>
        </WrapperReport>
        <WrapperPriceText>
          <span style={{ marginRight: "8px" }}>100.000đ</span>
          <WrapperDiscountText>-5%</WrapperDiscountText>
        </WrapperPriceText>
      </WrapperCardStyle>
    </div>
  );
};

export default CardComponent;
