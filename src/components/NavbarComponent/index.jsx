import React from "react";
import { WrapperContent, WrapperTextValue, WrapperLableText, WrapperTextPrice } from "./style";
import { Checkbox, Rate } from "antd";

const NavbarComponent = () => {
  const renderContent = (type, options) => {
    switch (type) {
      case "text":
        return options.map((option) => {
          return <WrapperTextValue>{option}</WrapperTextValue>;
        });
      case "checkbox":
        return (
          <Checkbox.Group style={{ width: "100%", display: "flex", flexDirection: "column", gap: "12px" }}>
            {options.map((option) => {
              return <Checkbox value={option.value}>{option.label}</Checkbox>;
            })}
          </Checkbox.Group>
        );
      case "star":
        return options.map((option) => {
          return (
            <div style={{ display: "flex", gap: "6px" }}>
              <Rate disabled defaultValue={option} />
              <span>từ ${option} sao</span>
            </div>
          );
        });
      case "price":
        return options.map((option) => {
          return <WrapperTextPrice style={{ display: "flex", gap: "6px" }}>{option}</WrapperTextPrice>;
        });
      default:
        return {};
    }
  };
  return (
    <div style={{ backgroundColor: "#fff" }}>
      <div>
        <WrapperLableText>THƯƠNG HIỆU</WrapperLableText>
        <WrapperContent>
          {renderContent("text", ["VNB", "Yonex", "Lining", "Victor", "Forza", "Kawasaki"])}
        </WrapperContent>
      </div>

      <div>
        <WrapperLableText>CHỌN MỨC GIÁ</WrapperLableText>
        <WrapperContent>
          {renderContent("checkbox", [
            { value: "a", label: "A" },
            { value: "b", label: "B" },
          ])}
        </WrapperContent>
      </div>

      <div>
        <WrapperLableText>ĐÁNH GIÁ</WrapperLableText>
        <WrapperContent>{renderContent("star", [3, 4, 5])}</WrapperContent>
      </div>

      <div>
        <WrapperLableText>GIÁ</WrapperLableText>
        <WrapperContent>{renderContent("price", ["duoi 50", "tren 50"])}</WrapperContent>
      </div>
    </div>
  );
};

export default NavbarComponent;
