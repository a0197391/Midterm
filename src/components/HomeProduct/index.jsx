import { Row, Col } from "antd";
import ProductItem from "../ProductItem";

export default function ProductList({Home}) {
  return (
    <Row gutter={[24, 24]}>
    {Home.map(product => (
        <Col 
          key={product.id} 
          sm={{ span: 12 }} //2 576
          lg={{ span: 8 }}//3個 992
          xl={{ span: 8 }}//3個 1200
          xxl={{ span: 4 }}//6個 1600
        >
          <ProductItem product={product}/>
        </Col>
      ))}
    </Row>
  );
}