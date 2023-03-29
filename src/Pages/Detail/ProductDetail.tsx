import { useSelector } from "react-redux";
import React, { FC } from 'react';
import Detail from "../../components/blocks/Detail";

const ProductDetail: FC = () => {

  const detailProduct = useSelector((state: any) => state.card.card)

  return(
    <div className="product">
      <div className="detail">
        <Detail
          id={detailProduct.id}
          url={detailProduct.url}
          title={detailProduct.title}
          code={detailProduct.code}
          price={detailProduct.price}
          weight={detailProduct.weight}
          description={detailProduct.description}
          manufacturer={detailProduct.manufacturer}
          brand={detailProduct.brand}
        />
      </div>
    </div>
  );
}

export default ProductDetail;