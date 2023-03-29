import ChoiceProduct from './ChoiceProduct';
import { useSelector } from 'react-redux';
import HeaderMenu from '../../components/blocks/Header';
import Footer from '../../components/blocks/Footer';
import '../Basket/Basket.scss';

const Basket = () => {
  const basket = useSelector((state: any) => state.basket.basket);
  const { finalPrice } = useSelector((state: any) => state.basket)

  return (

    <div className="basket">
      <HeaderMenu />
      <div className="container">
        <h2 className='basket__title'>Корзина</h2>
        
        <div className="basket">
          {basket.map((item: any) => {
            const { id, url, weight, title, description, price } = item;

            return (
              <ChoiceProduct
              key={id}
              id={id}
              url={url}
              weight={weight}
              title={title}
              description={description}
              price={price}
              />
            )
          })}
        </div>
        <div className="choice__line"></div>
        <div className='basket__footer'>
          <button>Оформить заказ</button>
          <p>Заказ на сумму: {finalPrice}</p>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Basket;