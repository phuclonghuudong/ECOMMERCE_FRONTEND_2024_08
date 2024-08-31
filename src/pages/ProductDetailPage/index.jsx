import React from "react";
import ProductDetailComponent from "../../components/ProductDetailComponent";

const ProductDetailPage = () => {
  return (
    <div style={{ padding: "0 120px", background: "#efefef" }}>
      <h5 style={{ margin: 0 }}>Trang chủ</h5>
      <div style={{ display: "flex" }}>
        <ProductDetailComponent />
        
      </div>
    </div>
  );
};

export default ProductDetailPage;
