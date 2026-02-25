import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updateProduct } from "../features/productSlice";
import { useState, useEffect } from "react";

export default function EditProduct(){

  const {id} = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const product = useSelector(s =>
    s.products.products.find(p => p.id == id)
  );

  const [form,setForm] = useState({
    name:"",
    price:"",
    category:""
  });

  useEffect(()=>{
    if(product){
      setForm(product);
    }
  },[product]);

  const handleSubmit=(e)=>{
    e.preventDefault();
    dispatch(updateProduct({id,data:form}));
    navigate("/");
  };

  return(
    <form onSubmit={handleSubmit}>
      <input value={form.name}
        onChange={e=>setForm({...form,name:e.target.value})}
        className="form-control mb-2"/>

      <input value={form.price}
        onChange={e=>setForm({...form,price:e.target.value})}
        className="form-control mb-2"/>

      <button className="btn btn-warning">Update</button>
    </form>
  );
}