import Card from '../../components/Cards/Card';
import HeaderMenu from '../../components/blocks/Header';
import Footer from '../../components/blocks/Footer'
import { menu } from '../../mockData/menu';
import Pagination from '../../components/Pagination/Pagination';
import { CatalogPropsType } from '../../components/assets/types';
import { useEffect, useState } from 'react';
import { FC } from 'react';
import './Catalog.scss';

const data: Array<object> = menu;

const filterProduct = (searchText: string, menu: Array<any>) => {
  if(!searchText) {
    return menu;
  }
  return menu.filter(({ manufacturer }) => 
    manufacturer.toLowerCase().includes(searchText.toLowerCase()),
  );
}

  const ul = document.querySelectorAll('.list')[0]
  document.querySelector('.show_hide_list')?.addEventListener ('click', () => {
    ul.classList.toggle('active');
  })
  const uls = document.querySelectorAll('.list')[1]
  document.querySelector('.show_hide_lists')?.addEventListener ('click', () => {
    uls.classList.toggle('actives');
  })

const Catalog: FC<CatalogPropsType> = () => {
  
  const [productList, setProductList] = useState(data);
  const [searchProd, setSearchProd] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const lastPage = 3;

  useEffect(() => {
    const Debounce = setTimeout(() => {
      const filteredProduct = filterProduct(searchProd, data);
      setProductList(filteredProduct);
    }, 200);
    return () => clearTimeout(Debounce);
  }, [searchProd]);
  
  return (
    <main className='main'>
      <HeaderMenu />
      <div className='container'>
        <div className='menu'>
          <h1>Косметика и гигиена</h1>
          <div>
            <ul>
              {productList.map((product: any, elem: number) => {
                return <li key={elem}>{product.for}</li>
              })}
            </ul>
          </div>
        </div>
        
        <div className='products'>
          <aside className='sidebar'>
            <p>ПОДБОР ПО ПАРАМЕТРАМ</p>
            <div className='price'>
              <p>Цена ₸</p>
              <input
                // value={searchProd}
                type='text'
                autoComplete='off'
                placeholder='0' 
                // onChange={(e) => setSearchProd(e.target.value)}
              />
              <span>-</span>
              <input
                // value={searchProd}
                type='text'
                autoComplete='off'
                placeholder='1000' 
                // onChange={(e) => setSearchProd(e.target.value)}
              />
            </div>
            <div className='manufacturer'>
              <p>Производитель</p>
              <form>
                <input className='search'
                  value={searchProd}
                  type='text'
                  autoComplete='off'
                  placeholder='Поиск...'
                  onChange={(e) => setSearchProd(e.target.value)}
                />
                <button className='search__btn'><img src='https://rodion-kadyumov.github.io/Sultan-TS/images/search.svg' /></button>
              </form>
              <ul className="list active">
                {productList.map((product: any, index: number) => {
                  return <li key={index}>{product.manufacturer}</li>
                })}
              </ul>
              <div className="show_hide_list">Смотреть все</div>
            </div>
            <p>Уход за телом</p>
            <ul className="body actives">
              {productList.map((product: any, elem: number) => {
                return <li key={elem}>{product.for}</li>
              })}
            </ul>
            <div className="show_hide_lists">Смотреть все</div>
          </aside>

          <div className='catalog'>
            {productList.map((totality: any) => {

              const { id, url, weight, title, code, manufacturer, brand, price, description } = totality

              return (
                <Card
                key={id}
                id={id}
                url={url}
                weight={weight}
                title={title}
                code={code}
                manufacturer={manufacturer}
                brand={brand}
                price={price}
                description={description}
                />
              );
            })}
            <Pagination
              currentPage={currentPage}
              lastPage={lastPage}
              maxLength={7}
              setCurrentPage={setCurrentPage}
            />
          </div>
        </div>
      </div>
        <Footer />
    </main>
  );
}

export default Catalog;