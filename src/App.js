

import "./App.css";
import { Switch, Route, NavLink, Redirect } from "react-router-dom";
import {ProductList} from "./containers/ProductList";
import Product from "./containers/Product";
import {CreateProduct} from './containers/CreateProduct'
import { EditProduct } from "./containers/EditProduct";
import {Edit1}  from './containers/Edit1';
import { update } from "lodash";
import { Update} from "./containers/Update";
//import Post from './containers/Post'
//import Pokemon from "./containers/Pokemon";
function App() {
  return (
    <div className="App">
      
     
      <Switch>
       
        <Route exact path={"/Product/:product"} component={Product} />
        <Route exact path={"/"} component={CreateProduct} /> 
      
        {/* <Route exact path="/EditProduct/:id/:title/:category/:price" component={EditProduct}/> */}
   
        <Route exact path="/EditProduct/:id/:title/:category/:price" component={EditProduct}/>
        <Route exact path="/Edit1" component={Edit1}/>
        <Route exact path="/Update"  component={Update}/>
          
          
        
      
        <Redirect to={"/"} />
      </Switch>
    </div>
  );
}

export default App;



