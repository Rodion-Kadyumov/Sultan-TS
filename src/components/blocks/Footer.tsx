import './Footer.scss';

const Footer = () => {

  return(
    <footer>
      <div className='footer'>
        <div className='brand__footer'>
          <span className='brand'><img src="/images/sultan_footer.svg" alt="Логотип" />султан</span>
          <p>Компания «Султан» — снабжаем розничные магазины товарами "под ключ" в Кокчетаве и Акмолинской области</p>
          <form>
            <span className='brand'>Подпишись на скидки и акции</span>
            <input className='search' type='search' placeholder='Поиск...' />
            <button className='search__btn'><img src='/images/search.svg' /></button>
          </form>
        </div>

        <div className='footer__links'>
          <p>Меню сайта:</p>
          <ul>
            <li>О компании</li>
            <li>Доставка и оплата</li>
            <li>Возврат</li>
            <li>Контакты</li>
          </ul>
        </div>

        <div className='footer__links'>
          <p>Категории:</p>
          <ul>
            <li>Бытовая химия</li>
            <li>Косметика и гигиена</li>
            <li>Товары для дома</li>
            <li>Товары для детей и мам</li>
            <li>Посуда</li>
          </ul>
        </div>

        <div className='footer__links'>
          <p>Скачать прайс-лист:</p>
          <a className='footer__btn' href="#">Прайс-лист <img src="/images/download.svg" /></a>
          <div className="network">
            <span>Связь в мессенджерах:</span>
            <div>
              <img src="/images/watsapp.png" alt="Ватсап" />
              <img src="/images/telegram.png" alt="Телеграмм" />
            </div>
          </div>
        </div>
        
        <div className='footer__links'>
          <p>Контакты:</p>
          <a href='77774900091'>+7 (777) 490-00-91</a>
          <span>время работы: 9:00-20:00</span>
          <a href="#">Заказать звонок</a>
          <p>
            <img src="/images/mail.svg" alt="Почта" /> opt.sultan@mail.ru <span>На связи в любое время</span>
          </p>
          <div>
            <img src="/images/visa.png" alt="Виза" />
            <img src="/images/master_card.png" alt="Мастер кард" />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer