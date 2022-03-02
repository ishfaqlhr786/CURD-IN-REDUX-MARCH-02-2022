

import React ,{useState,useEffect} from 'react'
import {useParams,useLocation}  from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'
import { CreateProductNew, GetProduct ,DeleteProduct,EditProduct1} from "../actions/ProductActions";
import {GetProductList} from '../actions/ProductActions'
export const Edit1 = (props) => {
    
 // const {id,title,category,price}= useParams();
  //console.log(id, title,category,price)
  const editObject=props.location.state;

  console.log(editObject)
  const {id,title,category,price,image}=editObject;
  console.log(title)
const [form ,setForm] =useState({
    title:title,
    category:category,
    price:price,
    image:image
 

})
// const product = props.match.params.id
 
 
//  console.log(product)
const dispatch=useDispatch();
const postData1=useSelector((state)=> state.EditReducerList)
console.log(postData1)
console.log(postData1.data)
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
console.log(data2)

const handleSubmit=(e)=>{

e.preventDefault();


//dispatch(createPosts(postData))
dispatch(EditProduct1(form,id))
//data2.push(postData1.data)
//dispatch(GetProductList())
let arr= [...data1.data]
arr[id-1]=postData1.data;
//data2[id-1]= postData1.data
setData2(arr)

 
}
useEffect(()=>{
    dispatch(EditProduct1(form,id))
   // dispatch(CreateProductNew(postData))
},[postData1])
useEffect(()=>{
dispatch(GetProductList())
},[dispatch])
// useEffect(()=>{
//   dispatch(GetProductList())
// },[postData1])
const changeImage=(e)=>{
    try {
    //   setImage(
    //     URL.createObjectURL(e.target.files[0])
    //  )
    setForm({...form,image:URL.createObjectURL(e.target.files[0])})
    }
    catch {
      return 0
    }
    

  }
// const handleSubmit=()=>{
//     console.log("form states are",form)
// }
console.log(form.title)
    return (
        <div>
            
            <div className="main">
            
            <div style={{position:"relative",border:'5px solid #1dd1a1'}} className="item">
                 <label for="file">Please select am image</label>
               
           
<input type="file" onChange={changeImage} name="image" id="file"/>




  
   <img src={form.image} width="200px" height="190px" style={form.image === "" ? {display: "none"} : {position:"absolute",top:"200px" ,right:"270px",
   
   }}
   
   />
   </div>
   <div className="item">
   
            
            <form onSubmit={handleSubmit}>
                <label>Title</label><br/>
                <input type="text"
                className="txt"
                value={form.title} onChange={(e)=>setForm({...form,title:e.target.value})}
                />
                <br/>
                <label>Category</label><br/>
                <input type="text" 
                className="txt"
                value={form.category} onChange={(e)=>setForm({...form,category:e.target.value})}
                />
                <br/>
                <label>Price</label><br/>
                <input type="number" 
                className="txt"
                value={form.price} onChange={(e)=>setForm({...form,price:e.target.value})}
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
                <input type="submit" value="Save  Changes "/>

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


        </div>
    )
}

