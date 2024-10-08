import React from "react";
import { Badge, Col } from "antd";
import { WrapperHeader, WrapperHeaderAccount, WrapperTextHeader, WrapperTextHeaderSmall } from "./style";
import { CaretDownOutlined, ShoppingCartOutlined, UserOutlined } from "@ant-design/icons";
import ButtonInputSearch from "../ButtonInputSearch";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const HeaderComponent = () => {
  const navigate = useNavigate();

  const user = useSelector((state) => state.user);

  const handleNavigateLogin = () => {
    navigate("/sign-in");
  };

  return (
    <div style={{ width: "100%", background: "rgb(255, 0, 0)", display: "flex", justifyContent: "center" }}>
      <WrapperHeader>
        <Col span={5}>
          <WrapperTextHeader>PHAMHONGPHUC</WrapperTextHeader>{" "}
        </Col>

        <Col span={13}>
          <ButtonInputSearch size="large" textButton="Tìm kiếm" placeholder="Search...." bordered={false} />
        </Col>

        <Col span={6} style={{ display: "flex", gap: "54px", alignItems: "center" }}>
          <WrapperHeaderAccount>
            <UserOutlined style={{ fontSize: "30px", color: "#fff" }} />
            {user?.name ? (
              <div style={{ cursor: "pointer" }}>{user.name}</div>
            ) : (
              <div onClick={handleNavigateLogin} style={{ cursor: "pointer" }}>
                <WrapperTextHeaderSmall>Đăng nhập/ Đăng ký</WrapperTextHeaderSmall>
                <div>
                  <WrapperTextHeaderSmall>Tài khoản</WrapperTextHeaderSmall>
                  <CaretDownOutlined style={{ fontSize: "18px", color: "#fff" }} />
                </div>
              </div>
            )}
          </WrapperHeaderAccount>
          <div>
            <Badge count={10} size="small">
              <ShoppingCartOutlined style={{ fontSize: "30px", color: "#fff" }} />
            </Badge>
            <WrapperTextHeaderSmall>Giỏ hàng</WrapperTextHeaderSmall>
          </div>
        </Col>
      </WrapperHeader>
    </div>
  );
};

export default HeaderComponent;
