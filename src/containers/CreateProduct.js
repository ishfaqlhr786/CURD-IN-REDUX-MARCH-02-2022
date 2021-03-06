import React,{useState,useEffect,useRef} from 'react'
import {Link,useHistory}  from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'
import { CreateProductNew, GetProduct ,DeleteProduct} from "../actions/ProductActions";
import {GetProductList} from '../actions/ProductActions'
import { propertyOf, set } from 'lodash';
import './Product.css'
import axios from 'axios'
import { ProductList } from './ProductList';
import { getDefaultNormalizer } from '@testing-library/dom';
import { EditProduct } from './EditProduct';
export const CreateProduct = (props) => {
    
   
  
   
   const history=useHistory()
    // const [title1,setTitle] = useState("")
   
    // const [ProductId,setPid]=useState()
   const [postData,setPostdata]=useState({
      // id:null,
       title:"",
       image:"",
       category:"",
       price:0,
   })
    const dispatch=useDispatch();
   const postData1=useSelector((state)=> state.CreateProduct)
   console.log(postData1.data)
   const delObj=useSelector((state)=>state.DeleteProduct)
   console.log("deleted object is",delObj)
   const products=useSelector((state)=> state.ProductList)
   console.log(products.data)

   const [data2,setData2]= useState(
      [...products.data]
   
   )
   const [data1,setData1]=useState({
    data:   
   [...products.data]
   }
    )
   console.log(data1)
 
const handleSubmit=(e)=>{
   
 e.preventDefault();
  
 
  //dispatch(createPosts(postData))
  dispatch(CreateProductNew(postData))
  let arr=[...data1.data]
  arr.push(postData1.data)
  setData2(arr)
 //console.log(arr)
  
    
}
useEffect(()=>{
    dispatch(CreateProductNew(postData))
},[postData1])
const changeImage=(e)=>{
    try {
    //   setImage(
    //     URL.createObjectURL(e.target.files[0])
    //  )
    setPostdata({...postData,image:URL.createObjectURL(e.target.files[0])})
    }
    catch {
      return 0
    }
    

  }
//   useEffect(()=>{
//     <ProductList/>
//     },[])
useEffect(()=>{
   
    dispatch(GetProductList())
},[dispatch])
useEffect((e)=>{
   // e.preventDefault()
   // dispatch(GetProductList())
  // dispatch(GetProduct(product))
},[data2,postData])
const getIndex=(index)=>{
    console.log(index)
    return index;
}
const handleDelete=async(index)=>{
 console.log(index)
await   axios.delete(`https://fakestoreapi.com/products/${index}`)
   .then(res => {
       console.log(res.data)
    
   const rows=[...data2]
   console.log(rows)
   rows.splice(index,1)
 setData2([...rows])
//dispatch(DeleteProduct(id))
console.log(data2)
  
   })
   
   
            }
    
const EditForm=(data)=>{
    history.push({
        pathname:"/edit1",
        state:data
    })
}
const EditForm1=(data)=>{
    history.push({
        pathname:"/Update",
        state:data


    })
}
   return (
        <>
        <Link to="/ProductList">

            <h2>View Lists </h2>
        </Link>
        <div className="main">
                        
            <div style={{position:"relative",border:'5px solid #1dd1a1'}} className="item">
                 <label for="file">Please select am image</label>
               
           
<input type="file" onChange={changeImage} name="image" id="file"/>




  
   <img src={postData.image} width="200px" height="190px" style={postData.image === "" ? {display: "none"} : {position:"absolute",top:"200px" ,right:"270px",
   
   }}
   
   />
   </div>
   <div className="item">
   
            
            <form onSubmit={handleSubmit}>
                <label>Title</label><br/>
                <input type="text"
                className="txt"
                value={postData.title} onChange={(e)=>setPostdata({...postData,title:e.target.value})}
                />
                <br/>
                <label>Category</label><br/>
                <input type="text" 
                className="txt"
                value={postData.category} onChange={(e)=>setPostdata({...postData,category:e.target.value})}
                />
                <br/>
                <label>Price</label><br/>
                <input type="number" 
                className="txt"
                value={postData.price} onChange={(e)=>setPostdata({...postData,price:e.target.value})}
                />

          
               
                {/* <label>Title</label><br/>
                <input type="text" value={postData.title} onChange={(e)=>setPostdata({...postData,title:e.target.value})}  />
                <br/>
                <label>Category</label><br/>
                <input type="text" value={postData.category} onChange={(e)=>setPostdata({...postData,category:e.target.value})}  />
                <br/>
                <label>Price</label><br/>
                <input type="number" value={postData.price} onChange={(e)=>setPostdata({...postData,price:e.target.value})}  />
              */}
                <br/>
                <br/>
                <input type="submit" value="Create Product "/>

            </form>
            
            </div>
            <div className="main" style={{textAlign:'center'}}>
                <span><h2>Latest Products</h2></span><br/>
           <table  width="100%" border="5px" cellspacing="8px" cellsPadding="10" rowspacing="10px">
               <tr>
                   <th>
                       Id:
                   </th>
                   <th>
                       Category:
                   </th>
                   <th>
                       Title:
                   </th>
                   <th>
                       Price:
                   </th>
                   <th>
                       Picture:
                   </th>
                   <th>
                       Actions:
                   </th>
               </tr>
               {
            data2?.map((product,index)=>{
                       const {id,title,category,price,image}=product

                       return(<>
                       <tr key={index} >
                           <td> {id}</td>
                           <td>{title}</td>
                           <td>{category}</td>
                           <td>{price}</td>
                           <td>{image}</td>
                           <td><img src={image} alt="ll" width="200px"  height="200px"/></td>
                           <td>
                           {/* <Link to={`/EditProduct/${id}/${title}/${category}/${price}`}>
                         
                               Edit</Link> */}
                               <button onClick={()=>EditForm(product)}
                               className="btn btn-lg btn-success"
                               >Edit</button>
                           </td>
                           <td>
                           <button onClick={()=>EditForm1(product)}
                           className="btn btn-lg btn-secondary"
                           >Update </button>
                           </td>
                          
                           <td  >
                               
                               <button className="btn btn-lg btn-danger"  onClick={()=>handleDelete(index)}
                           
                       
                         
                        
                        >Delete</button> 
                        
                        
                        </td>
                         
                           {/* <td>
                           <Link to={`/EditProduct/${id}/${title}/${category}/${price}`}>
                         
                               Edit</Link>
                           </td>
                          
                           <td  >
                               
                               <button className="btn btn-lg btn-danger"  onClick={()=>handleDelete(index)}
                           
                       
                         
                        
                        >Delete</button> 
                        
                        
                        </td> */}

                       </tr>
                       
                       </>)
                   })
               }
           </table>
           </div>
          
          


        </div>
        </>
    )
}
