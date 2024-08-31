import React from "react";
import { Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import InputComponent from "../InputComponent";
import ButtonComponent from "../ButtonComponent";

const ButtonInputSearch = (props) => {
  const { size, placeholder, textButton, bordered, backgroundColorInput = "#fff", colorButton = "#fff" } = props;
  return (
    <div style={{ display: "flex" }}>
      <InputComponent
        size={size}
        placeholder={placeholder}
        bordered={bordered}
        style={{ background: backgroundColorInput, borderRadius: "0px" }}
      />
      <ButtonComponent
        size={size}
        icon={<SearchOutlined />}
        styleButton={{
          background: "rgb(200,8,21)",
          borderRadius: "0px",
          border: !bordered && "none",
          color: colorButton,
        }}
        styleTextButton={{ color: colorButton }}
        textButton={textButton}
      />
    </div>
  );
};

export default ButtonInputSearch;
