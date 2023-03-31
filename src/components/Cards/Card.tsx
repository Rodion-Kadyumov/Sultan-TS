import { useDispatch } from 'react-redux';
import React, { FC } from 'react';
import { addProduct } from '../../store/reducers/basket';
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';
import { detailProduct } from '../../store/reducers/fullCard';
import './Card.scss';

type CardPropsType = {
  id: number
  url: string
  weight: string
  title: string
  code: number
  manufacturer:string
  brand: string
  price: number
  description:string
}

const Card: FC<CardPropsType> = ({ id, url, weight, title, code, manufacturer, brand, price, description }) => {

  const dispatch = useDispatch()

  const handleClickCard = () => {
    let item = {
      id,
      url,
      weight,
      title,
      code,
      manufacturer,
      brand,
      price,
      description,
    }
    dispatch(detailProduct(item))
  }

  const handleAddCard = (e: React.FormEvent<HTMLButtonElement>) => {
    let item: any = {
      id: uuidv4(),
      title,
      url,
      price,
      code,
      description
    }
    dispatch(addProduct(item))
    e.preventDefault()
  };

  return (
      <div className="card">
        <Link to={`/basket/${id}`} onClick={handleClickCard}>
          <img className="card__preview" src={url} alt={title} />
        </Link>
        <div className='card__data'>
          <p>{weight}</p>
          <h2>{title}</h2>
          <p>{code}</p>
          <p>{manufacturer}</p>
          <p>{brand}</p>
        </div>
        <div className='card__footer'>
          <span className="card__price">{price} ₸</span>
          <button onClick={handleAddCard}>
          В корзину <img src="/images/bascket_btn.svg" alt="Корзина" />
          </button>
        </div>
      </div>
  );
}

export default Card