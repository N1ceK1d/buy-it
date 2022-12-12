import './App.css';
import Products from './components/Products';

function App() {
  return (
    <div>
      <header>
        <img className='catalog icon' src="./images/burger.png" />
        <h1>BUY-IT Shop</h1>
        <div className='search-block'>
          <input placeholder="Искать здесь..." type="search"/>
          <button type="submit">Поиск</button>
        </div>
        <div className='menu login'>
          <p>Войти</p>
          <img className="icon login-icon" src="./images/profile.png"/>
        </div>
        <div className='menu favorite'>
          <p>Избранное</p>
          <img className="icon favorite-icon" src="./images/favorite.png"/>
        </div>
        <div className="menu shopping-cart">
          <p>Корзина</p>
          <img className="icon shopping-cart-icon" src="./images/shoppingCart.png"/>
        </div>
      </header>
      <Products/>  
      <footer>
        <p>Copyright by N1ceK1d</p>
      </footer>
    </div>
  
  )
}

export default App;
