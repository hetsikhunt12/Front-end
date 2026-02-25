import { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../features/productSlice";
import { useNavigate } from "react-router-dom";

export default function AddProduct() {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    price: "",
    category: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.price || !form.category) {
      alert("All fields required");
      return;
    }

    dispatch(
      addProduct({
        id: Date.now(),
        ...form,
        added_date: new Date().toISOString()
      })
    );

    navigate("/");
  };

  return (
    <div className="d-flex justify-content-center align-items-start pt-5"
      style={{ minHeight: "100vh", background: "gray" }}>

      <div className="card shadow-lg p-4"
        style={{ width: "400px", borderRadius: "15px" }}>

        <h3 className="text-center mb-4 fw-bold text-primary">
          Add New Product
        </h3>

        <form onSubmit={handleSubmit}>

          <input name="name" placeholder="Product Name" value={form.name}
            onChange={handleChange} className="form-control mb-3 rounded-pill" />

          <input name="price" type="number" placeholder="Price" value={form.price}
            onChange={handleChange} className="form-control mb-3 rounded-pill" />

          <input name="category" placeholder="Category" value={form.category}
            onChange={handleChange} className="form-control mb-4 rounded-pill" />

          <button className="btn w-100 text-white fw-bold"
            style={{ background: "linear-gradient(45deg,#ff7e5f,#feb47b)", borderRadius: "30px" }}>
            Add Product
          </button>

        </form>
      </div>
    </div>
  );
}