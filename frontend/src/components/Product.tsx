import { Card } from "@/lib/react-bootstrap";
import { Link } from "@/lib/react-router-dom";
import { Product as ProductType } from "@/types";

import Rating from "./Rating";

type ProductProps = {
  product: ProductType;
};

function Product({ product }: ProductProps) {
  return (
    <Card className="my-3 p-3 rounded">
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} variant="top" />
      </Link>
      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title as="div" className="product-title">
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>
        <Card.Text as="div">
          <Rating
            value={product.rating || 0}
            text={`${product.numReviews || 0} reviews`}
          />
        </Card.Text>
        <Card.Text as="h3">{product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Product;
