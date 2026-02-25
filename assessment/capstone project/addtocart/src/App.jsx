// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// import AddProduct from "./pages/AddProduct";
// import ViewProducts from "./pages/ViewProducts";
// import EditProduct from "./pages/EditProduct";

// function App() {
//   return (
//     <BrowserRouter>
//       <div className="container mt-4">
//         <Link to="/" className="btn btn-primary me-3">View</Link>
//         <Link to="/add" className="btn btn-success">Add</Link>

//         <Routes>
//           <Route path="/" element={<AddProduct />} />
//           <Route path="/view" element={<ViewProducts />} />
//           <Route path="/add" element={<AddProduct />} />
//           <Route path="/edit/:id" element={<EditProduct />} />
//         </Routes>
//       </div>
//     </BrowserRouter>
//   );
// }

// export default App;



import { BrowserRouter, Routes, Route } from "react-router-dom";
import ViewProducts from "./pages/ViewProducts";
import AddProduct from "./pages/AddProduct";
import EditProduct from "./pages/EditProduct";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ViewProducts />} />
        <Route path="/add" element={<AddProduct />} />
        <Route path="/edit/:id" element={<EditProduct />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;