import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Header.scss';

const HeaderMenu = () => {

  const { finalPrice, SumCount } = useSelector((state: any ) => state.basket);

  return (
    <header>
      <div className='data'>
        <div className='title'>
          <div>
            <img src='https://rodion-kadyumov.github.io/Sultan-TS//images/location.svg' alt='Локация' />
            <p>г. Кокчетав, ул. Ж. Ташенова 129Б<br /><span>(Рынок Восточный)</span>
            </p>
          </div>
          <div>
            <img src='https://rodion-kadyumov.github.io/Sultan-TS//images/mail.svg' alt='Почта' />
            <p>opt.sultan@mail.ru<br /><span>На связи в любое время</span>
            </p>
          </div>
        </div>
        <ul className='about'>
          <li>О компании</li>
          <li>Доставка и оплата</li>
          <li>Возврат</li>
          <li>Контакты</li>
        </ul>
      </div>

      <div className='line'></div>

      <div className='company'>
        <p className='brand'><img src='https://rodion-kadyumov.github.io/Sultan-TS//images/logo.png' alt='Логотип' />султан</p>
        <a className='btn' href='#'>Каталог <img src='https://rodion-kadyumov.github.io/Sultan-TS//images/squares.svg' alt='' /></a>
        <form>
          <input className='search' type='search' placeholder='Поиск...' />
          <button className='search__btn'><img src='https://rodion-kadyumov.github.io/Sultan-TS//images/search.svg' /></button>
        </form>
        <div className='block'>
          <div className='block__data'>
            <a href='77774900091'>+7 (777) 490-00-91</a>
            <p>время работы: 9:00-20:00</p>
            <a href='#'>Заказать звонок</a>
          </div>
          <img src='https://rodion-kadyumov.github.io/Sultan-TS//images/callback.png' alt='Обратный звонок' />
        </div>
        <a className='btn btn__save' href='#'>Прайс-лист <img src='https://rodion-kadyumov.github.io/Sultan-TS//images/download.svg' /></a>
        <Link to={'/basket'} className='header__btn'>
          <svg width='50' height='27' xmlns='http://www.w3.org/2000/svg'></svg><span>{SumCount}</span>
        </Link>
          <p>Корзина <br /> {finalPrice}₸</p>
      </div>
      <div className='line'></div>
    </header>
  );
}

export default HeaderMenu