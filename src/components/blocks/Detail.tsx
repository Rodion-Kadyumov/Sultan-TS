import React, { FC, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addProduct } from "../../store/reducers/basket";
import { v4 as uuidv4 } from "uuid";
import HeaderMenu from "./Header";
import './Detail.scss';

type DetailPropsType = {
  id: any,
  url: string
  weight: string
  title: string
  code: number
  manufacturer:string
  brand: string
  price: number
  description:string
}

const Detail: FC<DetailPropsType> = ({ url, weight, title, code, manufacturer, brand, price, description }) => {

  const card = useSelector((state: any) => state.card.card);
  const dispatch = useDispatch()

  const handleAddCard = () => {
    let item: any = {
      id: uuidv4(),
      title,
      url,
      price: price * counts,
      code,
      weight,
      description,
      manufacturer,
      brand,
    }
    dispatch(addProduct(item))
  }

  const [counts, setCounts] = useState<number>(1);

  const handlePlus = () =>  { 
    setCounts(counts + 1)
  }
  const handleMinus = () => {
    setCounts(counts - 1)
  }
  
  return (
    <div>
      <HeaderMenu />
      {/* <Breadcrumb /> */}
      <div className="container container__detail">
        <div className="detail__image">
          <img src={card.url} alt={title} />
        </div>
        <div className="detail__right">
          <div className="detail__information">
            <h2>{card.title}</h2>
            <span>{card.weight}</span>
          </div>
          <div className="detail__info">
            <p>{card.price * counts} ₸</p>
            <button onClick={handleMinus} className="counts">-</button>
            <div className="count">{counts}</div>
            <button onClick={handlePlus} className="counts">+</button>
            <button onClick={handleAddCard} className="detail-btn">В корзину <img src="/images/bascket_btn.svg" /></button>
          </div>
          <div className="detail__links">
            <div>
              <img src="/images/send.svg" alt="Поделиться" />
            </div>
            <div>
              <p>При покупке от 10 000 ₸ бесплатная <br />
                доставка по Кокчетаву и области</p>
            </div>
            <div>
              <p>Прайс-лист <img src="/images/save.svg" alt="Отправить" /></p>
            </div>
          </div>
          <div className="detail__data">
            <p>{card.manufacturer}</p>
            <p>{card.brand}</p>
            <p>{card.code}</p>
          </div>
          <div>
            <p>{card.description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Detail