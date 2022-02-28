import React,{useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {GetProductList} from '../actions/ProductActions'
import _ from "lodash";
import {Link} from 'react-router-dom'
export const ProductList=()=>{
    const products=useSelector((state)=> state. ProductList)
    const dispatch=useDispatch();
    console.log(products)
    useEffect(()=>{
    dispatch(GetProductList());
    },[])

  const Showdata = () => {
    if (!_.isEmpty(products.data)) {
      return (
      <>
      <table border="5" cellSpacing="3">
        
          
            <tr>
              <th>Id</th>
              <th >Title</th>
              <th>Picture</th>
            </tr>            
          
          
        

      
      {
      products.data.map((el) => {
        return (
          <div className={"list-wrapper"}>
            <Link to="/CreateProduct" >Create Product</Link>
            <div className={"pokemom-item"}>
              <tr  key={el.id}>
              <td style={{width:"50px"}}>{el.id}</td>
              <td style={{width:"500px"}}>
                  <img src={el.image} 
                  width="200px" height="200px"
                  alt="jj"/>
              </td>
              <td style={{width:"700px"}}>{el.title}</td>
              
              </tr>
              {<Link to={`/Product/${el.id}`}>View</Link> }
            </div>
          </div>
        );
      })
    }
    
    
    </table>
      </>
      )
    }
    if (products.loading) {
      return <p>Loading...</p>;
    }
    if (products.errorMsg !== "") {
      return <p>{products.errorMsg}</p>;
    }
    return <p>unable to get data</p>;
  };
    return(
        <>
        {Showdata()}
        </>
    )
}