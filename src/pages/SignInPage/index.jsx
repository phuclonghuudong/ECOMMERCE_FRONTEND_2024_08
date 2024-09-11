import React, { useState } from "react";
import imageLogoLogin from "../../assets/images/logo_login.png";
import { WrapperContainerLeft, WrapperContainerRight, WrapperTextLight } from "./style";
import InputForm from "../../components/InputForm";
import ButtonComponent from "./../../components/ButtonComponent/";
import { Image } from "antd";
import { EyeFilled, EyeInvisibleFilled } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useMutationHook } from "../../hooks/useMutationHook";
import * as UserService from "../../services/UserService";
import LoadingComponent from "../../components/LoadingComponent";

const SignInPage = () => {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const mutation = useMutationHook((data) => UserService.loginUser(data));

  const { data, isPending } = mutation;

  const handleOnchangeEmail = (e) => {
    setEmail(e);
  };
  const handleOnchangePassword = (e) => {
    setPassword(e);
  };

  const handleSignIn = () => {
    mutation.mutate({
      email,
      password,
    });
  };

  const handleNavigateSignUp = () => {
    navigate("/sign-up");
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(0,0,0,0.53)",
        height: "100vh",
      }}
    >
      <div style={{ width: "800px", height: "445px", backgroundColor: "#fff", display: "flex", borderRadius: "10px" }}>
        <WrapperContainerLeft>
          <h1>Xin chào</h1>
          <p>Đăng nhập và tạo tài khoản</p>
          <InputForm
            value={email}
            handleOnchange={handleOnchangeEmail}
            style={{ marginBottom: "10px" }}
            placeholder="abc@gmail.com"
          />
          <div style={{ position: "relative" }}>
            <span
              onClick={() => setIsShowPassword(!isShowPassword)}
              style={{ zIndex: 10, position: "absolute", top: "4px", right: "8px", cursor: "pointer" }}
            >
              {isShowPassword ? <EyeFilled /> : <EyeInvisibleFilled />}
            </span>
          </div>
          <InputForm
            value={password}
            handleOnchange={handleOnchangePassword}
            placeholder="password"
            type={isShowPassword ? "text" : "password"}
          />
          <div style={{ paddingTop: "10px" }}>
            {data?.EC === "ERR" && <span style={{ color: "red" }}>{data?.EM}</span>}
          </div>
          <LoadingComponent isLoading={isPending}>
            <ButtonComponent
              disabled={!email.length || !password.length}
              onClick={handleSignIn}
              size={40}
              styleButton={{
                background: "rgb(255,57,69)",
                borderRadius: "6px",
                height: "48px",
                width: "100%",
                border: "none",
                fontWeight: "700",
                margin: "26px 0 10px",
              }}
              styleTextButton={{ color: "#fff" }}
              textButton={"Tiếp tục"}
            />
          </LoadingComponent>

          <p>
            <WrapperTextLight> Quên mật khẩu</WrapperTextLight>
          </p>
          <p style={{ cursor: "pointer" }}>
            Chưa có tài khoản <WrapperTextLight onClick={handleNavigateSignUp}>Tạo tài khoản</WrapperTextLight>
          </p>
        </WrapperContainerLeft>

        <WrapperContainerRight>
          <Image src={imageLogoLogin} preview={false} alt="image-logo" height={"203px"} width={"203px"} />
          <h4>Mua sắm tại PHP</h4>
        </WrapperContainerRight>
      </div>
    </div>
  );
};

export default SignInPage;
