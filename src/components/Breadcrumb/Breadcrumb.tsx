import { Link } from "react-router-dom";
import './Breadcrumb.scss'

export const Breadcrumb = () => (
  <nav className="breadcrumb">
    <ul>
      <li>
        <Link to="/">Каталог</Link>
      </li>
      <span>&nbsp;&gt;&nbsp;</span>
      <li>
        <Link to="/Detail">Карточка товара</Link>
      </li>
      <span>&nbsp;&gt;&nbsp;</span>
      <li>
        <Link to="/Basket">Корзина</Link>
      </li>
    </ul>
  </nav>
);