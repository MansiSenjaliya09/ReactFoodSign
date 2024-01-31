
import Cart from '../restaurants/mainFood/CartFood';
import Context from '../restaurants/mainFood/ContextFood';
import Home from '../restaurants/mainFood/FoodHome';
import Menu from '../restaurants/mainFood/Menu';
import Nevbar from '../restaurants/mainFood/NevbarFood';
import{BrowserRouter as Router, Routes,Route} from 'react-router-dom'

function Foodmaindetail() {
  return (
    <div>
      <Context>
      <Router>
      <Nevbar/>
     <Routes>
      <Route path='/homefood'  element={ <><Home/> <Menu/></>}/>
      <Route path='/cart'  element={<Cart/>}/>
      </Routes>
      </Router>
      </Context>
      
    </div>
  );
}

export default Foodmaindetail;
