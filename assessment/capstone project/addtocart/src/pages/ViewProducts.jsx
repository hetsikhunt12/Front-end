import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts, deleteProduct } from "../features/productSlice";
import { useNavigate } from "react-router-dom";

export default function ViewProducts() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    // ✅ FIXED LINE
    const { products } = useSelector((state) => state.products);

    const [search, setSearch] = useState("");

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);

    const filtered = products.filter(p =>
        p.name?.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <>
            <input
                placeholder="Search"
                className="form-control mb-3 mt-2"
                onChange={(e) => setSearch(e.target.value)}
            />

            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Category</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                    {filtered.length === 0 ? (
                        <tr>
                            <td colSpan="4">No records found</td>
                        </tr>
                    ) : (
                        filtered.map((p) => (
                            <tr key={p.id}>
                                <td>{p.name}</td>
                                <td>{p.price}</td>
                                <td>{p.category}</td>
                                <td>
                                    <button
                                        className="btn btn-danger me-2"
                                        onClick={() => dispatch(deleteProduct(p.id))}
                                    >
                                        Delete
                                    </button>

                                    <button
                                        className="btn btn-warning"
                                        onClick={() => navigate(`/edit/${p.id}`)}
                                    >
                                        Edit
                                    </button>
                                </td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </>
    );
}




