// import products from "assets/data/products";
import { Rating } from "components";
import { useEffect, useState } from "react";

import { axios } from "@/lib/axios";
import {
  Button,
  Card,
  Col,
  Image,
  ListGroup,
  Row,
} from "@/lib/react-bootstrap";
import { Link, useParams } from "@/lib/react-router-dom";
import type { Product as ProductType } from "@/types";

function ProductScreen() {
  const { id: productId } = useParams();
  const [product, setProduct] = useState<ProductType>({});
  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await axios.get(`/api/products/${productId}`);
      setProduct(data);
    };
    fetchProduct();
  }, [productId]);
  return (
    <>
      <Link className="btn btn-light my-3" to="/">
        Go Back
      </Link>
      <Row>
        <Col md={5}>
          <Image src={product?.image} alt={product?.name} fluid />
        </Col>
        <Col md={4}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{product?.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating
                value={product?.rating || 0}
                text={`${product?.numReviews} reviews`}
              />
            </ListGroup.Item>
            <ListGroup.Item>Price: ${product?.price} </ListGroup.Item>
            <ListGroup.Item>{product?.description}</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Row>
                  <Col>Price:</Col>
                  <Col>
                    <strong>${product?.price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Row>
                  <Col>Status:</Col>
                  <Col>
                    <strong>
                      {product?.countInStock ? "In Stock" : "Out Of Stock"}
                    </strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Button
                  className="btn-block"
                  type="button"
                  disabled={product?.countInStock ? false : true}
                >
                  Add To Cart
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default ProductScreen;
