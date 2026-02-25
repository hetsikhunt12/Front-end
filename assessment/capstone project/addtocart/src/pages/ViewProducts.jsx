import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts, deleteProduct } from "../features/productSlice";
import { useNavigate } from "react-router-dom";

export default function ViewProducts() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { products } = useSelector((state) => state.products);

    const [search, setSearch] = useState("");

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);

    const filtered = products.filter((p) =>
        p.name?.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div
            style={{ minHeight: "100vh", background: "gray", padding: "30px" }}>
            <div className="card shadow-lg p-4" style={{ borderRadius: "15px" }}>

                <div className="d-flex justify-content-between align-items-center mb-4">
                    <h3 className="fw-bold text-dark">Product List</h3>

                    <button className="btn btn-success rounded-pill px-4" onClick={() => navigate("/add")}>
                        + Add Product
                    </button>
                </div>

                <input placeholder=" Search Product..." className="form-control mb-3 rounded-pill" onChange={(e) => setSearch(e.target.value)} />

                <div className="table-responsive">
                    <table className="table table-hover align-middle text-center">

                        <thead className="table-secondary">
                            <tr>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Category</th>
                                <th width="200">Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {filtered.length === 0 ? (
                                <tr>
                                    <td colSpan="4" className="text-muted py-4">
                                        No records found
                                    </td>
                                </tr>
                            ) : (
                                filtered.map((p) => (
                                    <tr key={p.id}>
                                        <td className="fw-semibold">{p.name}</td>
                                        <td>₹ {p.price}</td>
                                        <td>
                                            <span className="badge bg-secondary">
                                                {p.category}
                                            </span>
                                        </td>

                                        <td>
                                            <button className="btn btn-danger btn-sm rounded-pill me-2 px-3" onClick={() => dispatch(deleteProduct(p.id))}>
                                                Delete
                                            </button>

                                            <button className="btn btn-warning btn-sm rounded-pill px-3" onClick={() => navigate(`/edit/${p.id}`)}>
                                                Edit
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>

                    </table>
                </div>

            </div>
        </div>
    );
}