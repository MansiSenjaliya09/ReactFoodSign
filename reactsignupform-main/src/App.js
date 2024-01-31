import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Signuppage from './components/Login-signup-page/Signuppage'; 
import Login from "./components/Login-signup-page/Login"
import { BrowserRouter as Router,Route,Routes,Switch } from 'react-router-dom';
import Aboutdetail from "./components/Userdetail/Aboutdetail";
import Foodmaindetail from './components/restaurants/Foodmaindetail';
import Createuseform from './components/Usecurd/Createuserform';
import Updatedata from './components/Usecurd/Updatedata';
import Readuserdata from './components/Usecurd/Readuserdata';
import Context from './components/restaurants/mainFood/ContextFood';
import FoodHome from './components/restaurants/mainFood/FoodHome';
import Menu from './components/restaurants/mainFood/Menu';
import CartFood from './components/restaurants/mainFood/CartFood';
import ReadTableCom from './components/Usecurd/ReadTableCom';

function App() {
  return (

    // <Router>
    //   <div className="App">
    //     <Navbar />
    //     <Switch>
    //       <Route exact path='/' component={Signuppage}/>
    //       <Route exact path='/login' component={Login}/>
    //       <Route exact path="/home" component={Home} />
    //       <Route exact path="/about" component={About} />
    //       <Route exact path="/contact" component={Contact} />
    //       <Route exact path="/users/add" component={AddUserr} />
    //       <Route exact path="/users/edit/:id" component={EditUserr} />
    //       <Route exact path="/users/:id" component={User} />
    //       <Route component={NotFound} />
    //     </Switch>
    //   </div>
    // </Router>
  
<>

     <Context>
      {/* <NevbarFood/> */}
      <Routes>
        <Route path='/login' element={<Signuppage/>}></Route>
        <Route path='/' element={<Login/>}></Route>
        <Route  path="/aboutdetail" element={<Aboutdetail/>}/>
        <Route path='/homefood'  element={ <><FoodHome/> <Menu/></>}/>
        <Route path='/cart'  element={<CartFood/>}/>
        <Route path='/Foodmaindetail' element={<Foodmaindetail/>}/>
        <Route  path="/users"  element={<Createuseform/>}/>
        <Route  path="/update"  element={<Updatedata/>}/>
        {/* <Route path="/read"  element={<Readuserdata/>}/> */}
        <Route path="/read"  element={<ReadTableCom/>}/>
        </Routes>
        </Context>

        
    </>
  );
}

export default App;
 