import { Loader, Message, Product } from "components";
import { useGetProductsQuery } from "slices";

import { DANGER } from "@/constants";
import { Col, Row } from "@/lib/react-bootstrap";

function HomeScreen() {
  const { data: products, isLoading, isError, error } = useGetProductsQuery();
  return isLoading ? (
    <Loader />
  ) : isError ? (
    <Message variant={DANGER}>
      {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (error as any)?.data?.message || (error as any)?.error
      }
    </Message>
  ) : (
    <>
      <h1>Latest Products</h1>
      <Row>
        {products?.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
}

export default HomeScreen;
