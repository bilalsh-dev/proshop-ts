// import products from "assets/data/products";
import { Product } from "components";
import { useEffect, useState } from "react";

import { axios } from "@/lib/axios";
import { Col, Row } from "@/lib/react-bootstrap";
import type { Product as ProductType } from "@/types";

function HomeScreen() {
  const [products, setProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get("/api/products");
      setProducts(data);
    };
    fetchProducts();
  }, []);
  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
}

export default HomeScreen;
