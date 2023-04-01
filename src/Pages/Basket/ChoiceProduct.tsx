import React, { FC, useState } from 'react';
import { useDispatch} from 'react-redux';
import { deleteProduct } from '../../store/reducers/basket';
import '../Basket/ChoiceProduct.scss';

type ChoisePropsType = {
  id: number,
  url: string
  weight: string
  title: string
  description:string
  price: number
}

const Choice: FC<ChoisePropsType> = ({ id, url, weight, title, price, description }) => {

  const dispatch = useDispatch()

  const handleDeleteCard = () => {
    let item = { id: id }
    dispatch(deleteProduct(item))
  }

  const [counts, setCounts] = useState<number>(1);

  const handlePlus = () => {
    setCounts(counts + 1)
  }
  const handleMinus = () => {
    setCounts(counts - 1)
  }
  return (
    <div >
      <div className='choice__line'></div>
      <div className='choice'>
        <div className='blok__left'>
          <img className='choice__image' src={url} alt={title}/>
          <div>
            <span>{weight}</span>
            <p className='choice__title'>{title}</p>
            <span>{description}</span>
          </div>
        </div>

        <div className='blok__right'>
          <div className='block__count'>
            <button onClick={handleMinus} className='counts'>-</button>
            <div>{counts}</div>
            <button onClick={handlePlus} className='counts'>+</button>
          </div>
          <div>
            <div className='price'>{price * counts}</div>
          </div>
          <div>
            <button onClick={handleDeleteCard} className='blok__btn'><img src='https://rodion-kadyumov.github.io/Sultan-TS/images/delete_bascket.svg' /></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Choice