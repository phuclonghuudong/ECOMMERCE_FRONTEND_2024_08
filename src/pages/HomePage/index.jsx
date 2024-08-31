import React from "react";
import { WrapperButtonMore, WrapperProducts, WrapperTypeProduct } from "./style";
import slide01 from "../../assets/images/slide01.png";
import slide02 from "../../assets/images/slide02.png";
import slide03 from "../../assets/images/slide03.png";

import TypeProduct from "../../components/TypeProduct";
import SliderComponent from "../../components/SliderComponent";
import CardComponent from "../../components/CardComponent";

const HomePage = () => {
  const arr = ["Flinning", "Yonex", "Kumpo"];
  return (
    <>
      <div style={{ width: "1270px", margin: "0 auto" }}>
        <WrapperTypeProduct>
          {arr.map((item) => {
            return <TypeProduct name={item} key={item} />;
          })}
        </WrapperTypeProduct>
      </div>
      <div className="body" style={{ width: "100%", backgroundColor: "#efefef" }}>
        <div style={{ height: "1000px", width: "1270px", margin: "0 auto" }}>
          <SliderComponent arrImages={[slide01, slide02, slide03]} />

          <WrapperProducts>
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
          </WrapperProducts>

          <div style={{ width: "100%", display: "flex", justifyContent: "center", marginTop: "10px" }}>
            <WrapperButtonMore
              textButton="Xem thêm"
              type="outline"
              styleButton={{
                border: "1px solid rgb(11,116,229)",
                color: "rgb(11,116,229)",
                width: "240px",
                height: "38px",
              }}
              styleTextButton={{ fontWeight: 500 }}
            />
          </div>

          {/* <NavbarComponent /> */}
        </div>
      </div>
    </>
  );
};

export default HomePage;
