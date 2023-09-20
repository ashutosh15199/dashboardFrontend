import "./App.css";
import Footer from "./Component/Footer";
import Nav from "./Component/Nav";
import SignUp from "./Component/SignUp"
import PrivateComponent from './Component/PrivateComponent';
import Login from "./Component/Login";
import AddProduct from './Component/AddProduct';
import ProductList from "./Component/ProductList";
import UpdateProduct from "./Component/UpdateProduct";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav />
      <Routes>
         <Route element={<PrivateComponent/>}>
        <Route path="/" element={<ProductList/> }/>
        <Route path="/add" element={<AddProduct/> }/>
        <Route path="/update/:id" element={<UpdateProduct/> }/>
        <Route path="/logout" element={<h1>Logout Component</h1> }/>
        <Route path="/profile" element={<h1>profile Component</h1> }/>
        </Route>
        <Route path="/signup" element={<SignUp/> }/>
        
        <Route path="/login" element={<Login/>}/>
       
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
