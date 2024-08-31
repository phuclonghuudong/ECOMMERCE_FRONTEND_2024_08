import React from "react";
import { Col, Image, InputNumber, Row } from "antd";
import imageProduct from "../../assets/images/test01.png";
import imageProduct02 from "../../assets/images/test02.png";
import {
  WrapperAddressProduct,
  WrapperImageSmall,
  WrapperInputNumber,
  WrapperPriceProduct,
  WrapperPriceTextProduct,
  WrapperQuanlityProduct,
  WrapperStyleColSmall,
  WrapperStyleNameProduct,
  WrapperStyleTextSell,
} from "./style";
import { MinusOutlined, PlusOutlined, StarFilled } from "@ant-design/icons";
import ButtonComponent from "./../ButtonComponent/index";

const ProductDetailComponent = () => {
  const onChange = () => {};
  return (
    <Row style={{ padding: "16px", background: "#fff" }}>
      <Col span={10} style={{ paddingRight: "8px", borderRight: "1px solid #e5e5e5" }}>
        <Image src={imageProduct} alt="image product" preview={false} />
        <Row style={{ paddingTop: "10px", justifyContent: "space-between" }}>
          <WrapperStyleColSmall span={4}>
            <WrapperImageSmall src={imageProduct02} alt="image small" preview={false} />
          </WrapperStyleColSmall>

          <WrapperStyleColSmall span={4}>
            <WrapperImageSmall src={imageProduct02} alt="image small" preview={false} />
          </WrapperStyleColSmall>

          <WrapperStyleColSmall span={4}>
            <WrapperImageSmall src={imageProduct02} alt="image small" preview={false} />
          </WrapperStyleColSmall>

          <WrapperStyleColSmall span={4}>
            <WrapperImageSmall src={imageProduct02} alt="image small" preview={false} />
          </WrapperStyleColSmall>

          <WrapperStyleColSmall span={4}>
            <WrapperImageSmall src={imageProduct02} alt="image small" preview={false} />
          </WrapperStyleColSmall>
        </Row>
      </Col>

      <Col span={14} style={{ paddingLeft: "10px" }}>
        <WrapperStyleNameProduct>Xe máy điện VinFast Klara S (2022)</WrapperStyleNameProduct>
        <div>
          <StarFilled style={{ fontSize: "12px", color: "rgb(253,216,54)" }} />
          <StarFilled style={{ fontSize: "12px", color: "rgb(253,216,54)" }} />
          <StarFilled style={{ fontSize: "12px", color: "rgb(253,216,54)" }} />
          <StarFilled style={{ fontSize: "12px", color: "rgb(253,216,54)" }} />
          <WrapperStyleTextSell> | Đã bán 10+</WrapperStyleTextSell>
        </div>

        <WrapperPriceProduct>
          <WrapperPriceTextProduct>200.000</WrapperPriceTextProduct>
          <WrapperAddressProduct>
            <span>Giao đến </span>
            <span className="address">Long An </span>-<span className="change-address"> Đổi địa chỉ</span>
          </WrapperAddressProduct>
        </WrapperPriceProduct>

        <div
          style={{
            margin: "10px 0 20px",
            padding: "10px 0",
            borderTop: "1px solid #e5e5e5",
            borderBottom: "1px solid #e5e5e5",
          }}
        >
          <div style={{ marginBottom: "10px" }}>Số lượng</div>
          <WrapperQuanlityProduct>
            <button style={{ border: "none", background: "transparent" }}>
              <PlusOutlined style={{ color: "#000", fontSize: "20px" }} />
            </button>

            <WrapperInputNumber defaultValue={3} onChange={onChange} size="small" />

            <button style={{ border: "none", background: "transparent" }}>
              <MinusOutlined style={{ color: "#000", fontSize: "20px" }} />
            </button>
          </WrapperQuanlityProduct>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <ButtonComponent
            size={40}
            styleButton={{
              background: "rgb(255,57,69)",
              borderRadius: "0px",
              height: "48px",
              width: "220px",
              border: "none",
              fontWeight: "700",
            }}
            styleTextButton={{ color: "#fff" }}
            textButton={"Chọn mua"}
          />

          <ButtonComponent
            size={40}
            styleButton={{
              background: "#fff",
              borderRadius: "0px",
              height: "48px",
              width: "220px",
              border: "1px solid rbg(13,92,182)",
            }}
            styleTextButton={{ color: "rbg(13,92,182)", fontSize: "15px" }}
            textButton={"Mua trả sau"}
          />
        </div>
      </Col>
    </Row>
  );
};

export default ProductDetailComponent;
