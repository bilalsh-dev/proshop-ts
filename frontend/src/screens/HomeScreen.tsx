import {
  Loader,
  Message,
  Meta,
  Paginate,
  Product,
  ProductCarousel,
} from "components";
import { useGetProductsQuery } from "slices";

import { DANGER } from "@/constants";
import { Col, Row } from "@/lib/react-bootstrap";
import { Link, useParams } from "@/lib/react-router-dom";

function HomeScreen() {
  const { pageNumber, keyword } = useParams();
  const { data, isLoading, isError, error } = useGetProductsQuery({
    pageNumber: pageNumber || "1",
    keyword: keyword || "",
  });

  return (
    <>
      {keyword ? (
        <Link to="/" className="btn btn-light">
          Go Back
        </Link>
      ) : (
        <ProductCarousel />
      )}
      {isLoading ? (
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
          <Meta />
          <h1>Latest Products</h1>
          <Row>
            {data?.products?.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
          <Paginate
            pages={data?.pages || 1}
            page={data?.page || 1}
            keyword={keyword || ""}
          />
        </>
      )}
    </>
  );
}

export default HomeScreen;
