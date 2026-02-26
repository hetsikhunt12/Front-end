import { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../features/productSlice";
import { useNavigate } from "react-router-dom";

export default function AddProduct() {

  const [form, setForm] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await dispatch(addProduct({
      ...form,
      added_date: new Date().toISOString()
    }));

    navigate("/view");
  };


  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Name"
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        className="form-control mb-2" />

      <input placeholder="Price"
        onChange={(e) => setForm({ ...form, price: e.target.value })}
        className="form-control mb-2" />

      <input placeholder="Category"
        onChange={(e) => setForm({ ...form, category: e.target.value })}
        className="form-control mb-2" />

      <button className="btn btn-success">Add Product</button>
    </form>
  );
}

