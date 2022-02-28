

import "./App.css";
import { Switch, Route, NavLink, Redirect } from "react-router-dom";
import {ProductList} from "./containers/ProductList";
import Product from "./containers/Product";
import {CreateProduct} from './containers/CreateProduct'
import { EditProduct } from "./containers/EditProduct";
//import Post from './containers/Post'
//import Pokemon from "./containers/Pokemon";
function App() {
  return (
    <div className="App">
      
     
      <Switch>
        <Route exact path={"/"} component={ProductList} />
        <Route exact path={"/Product/:product"} component={Product} />
        <Route exact path={"/CreateProduct"} component={CreateProduct} /> 
      
        {/* <Route exact path="/EditProduct/:id/:title/:category/:price" component={EditProduct}/> */}
   
        <Route exact path="/EditProduct/:id/:title/:category/:price" component={EditProduct}/>
          
          
        
      
        <Redirect to={"/"} />
      </Switch>
    </div>
  );
}

export default App;



