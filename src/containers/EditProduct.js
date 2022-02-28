import React ,{useState} from 'react'
import {useParams,useLocation}  from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'
import { CreateProductNew, GetProduct ,DeleteProduct,EditProduct1} from "../actions/ProductActions";
import {GetProductList} from '../actions/ProductActions'
export const EditProduct = (props) => {
    
  const {id,title,category,price}= useParams();
  console.log(id, title,category,price)
const [form ,setForm] =useState({
    title:title,
    category:category,
    price:price,
    image:""
 

})
const product = props.match.params.id
 
 
 console.log(product)
const dispatch=useDispatch();
const postData1=useSelector((state)=> state.CreateProduct)
console.log(postData1)
const products=useSelector((state)=> state.ProductList)
console.log(products.data)

const [data2,setData2]= useState(
     [...products.data]
)
console.log(data2)

const handleSubmit=(e)=>{

e.preventDefault();


//dispatch(createPosts(postData))
dispatch(EditProduct1(form,product))
data2.push(postData1.data)

 
}

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
            <h2>Edit product</h2>
            <form onSubmit={handleSubmit}>
                <label>Title</label>
                <input type="text" value={form.title} onChange={(e)=>setForm({...form,title:e.target.value})}
                />
                <br/>
                <label>Category</label>
                <input type="text" value={form.category} onChange={(e)=>setForm({...form,category:e.target.value})}
                />
                <br/>
                <label>Price</label>
                <input type="number" value={form.price} onChange={(e)=>setForm({...form,price:e.target.value})}
                />
                <br/>
                <input type="file" onChange={changeImage} name="image" id="file"/>




  
   <img src={form.image} width="200px" height="190px" style={form.image === "" ? {display: "none"} : {position:"absolute",top:"200px" ,right:"270px",
   
   }}
   
   />
                <input type="submit" value="save changes"/>
            </form>
        </div>
    )
}
