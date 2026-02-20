// import React from 'react'
// import Header from '../coman/Header'
// import Footer from '../coman/Footer'

// function Menu() {
//     return (
//         <div>

//             <Header />
//             <div>
//                 {/* Hero Start */}
//                 <div className="container-fluid p-5 mb-5 bg-dark text-secondary">
//                     <div className="container wow fadeIn" data-wow-delay="0.1s">
//                         <h1 className="display-1 text-secondary text-center mb-0">Menu</h1>
//                     </div>
//                 </div>
//                 {/* Hero End */}
//                 {/* Feature Start */}
//                 <div className="container-fluid feature position-relative p-5 pb-0 mt-5">
//                     <div className="row g-5 gb-5">
//                         <div className="col-lg-4 col-md-6 wow fadeIn" data-wow-delay="0.1s">
//                             <div className="feature-item rounded text-center p-5">
//                                 <img className="img-fluid bg-white rounded-circle" src="img/--/i-1.webp" style={{ width: 150, height: 150 }} />
//                                 <h3 className="my-4">Best Chef</h3>
//                                 <p className="text-light">Sed amet tempor amet sit kasd sea lorem dolor ipsum elitr dolor amet kasd
//                                     elitr duo vero amet amet stet</p>
//                                 <a className="font-body" style={{ letterSpacing: 1 }} href>Read More <i className="bi bi-arrow-right" /></a>
//                             </div>
//                         </div>
//                         <div className="col-lg-4 col-md-6 wow fadeIn" data-wow-delay="0.3s">
//                             <div className="feature-item rounded text-center p-5">
//                                 <img className="img-fluid bg-white rounded-circle" src="img/--/i-2.webp" style={{ width: 150, height: 150 }} />
//                                 <h3 className="my-4">Menu Variations</h3>
//                                 <p className="text-light">Sed amet tempor amet sit kasd sea lorem dolor ipsum elitr dolor amet kasd
//                                     elitr duo vero amet amet stet</p>
//                                 <a className="font-body" style={{ letterSpacing: 1 }} href>Read More <i className="bi bi-arrow-right" /></a>
//                             </div>
//                         </div>
//                         <div className="col-lg-4 col-md-6 wow fadeIn" data-wow-delay="0.5s">
//                             <div className="feature-item rounded text-center p-5">
//                                 <img className="img-fluid bg-white rounded-circle" src="img/feature-3.png" style={{ width: 150, height: 150 }} />
//                                 <h3 className="my-4">Healthy Food</h3>
//                                 <p className="text-light">Sed amet tempor amet sit kasd sea lorem dolor ipsum elitr dolor amet kasd
//                                     elitr duo vero amet amet stet</p>
//                                 <a className="font-body" style={{ letterSpacing: 1 }} href>Read More <i className="bi bi-arrow-right" /></a>
//                             </div>
//                         </div>
//                         <div className="col-lg-12 col-md-6 text-center wow fadeIn" data-wow-delay="0.1s">
//                             <h1 className="display-4 text-secondary mb-4"><span className="text-primary">30% Discount</span><br /> For This Summer</h1>
//                             <a href className="btn btn-primary py-3 px-5">Order Now</a>
//                         </div>
//                     </div>
//                 </div>
//                 {/* Feature End */}
//                 {/* Menu Start */}
//                 <div className="container-fluid menu py-5 px-0">
//                     <div className="mb-5 text-center wow fadeIn" data-wow-delay="0.1s" style={{ maxWidth: 700, margin: 'auto' }}>
//                         <h5 className="section-title">Our Menu</h5>
//                         <h1 className="display-3 mb-0">Hands Craft More Than Meals</h1>
//                     </div>
//                     <div className="tab-class text-center">
//                         <ul className="nav nav-pills d-inline-flex justify-content-center bg-dark text-uppercase rounded-pill mb-5 wow fadeIn" data-wow-delay="0.2s">
//                             <li className="nav-item">
//                                 <a className="nav-link rounded-pill text-white active" data-bs-toggle="pill" href="#tab-1">Breakfast</a>
//                             </li>
//                             <li className="nav-item">
//                                 <a className="nav-link rounded-pill text-white" data-bs-toggle="pill" href="#tab-2">Launch</a>
//                             </li>
//                             <li className="nav-item">
//                                 <a className="nav-link rounded-pill text-white" data-bs-toggle="pill" href="#tab-3">Dinner</a>
//                             </li>
//                         </ul>
//                         <div className="tab-content">
//                             <div id="tab-1" className="tab-pane fade show p-0 active">
//                                 <div className="row g-2">
//                                     <div className="col-lg-4 col-md-4 col-sm-6">
//                                         <div className="position-relative">
//                                             <img className="img-fluid w-100 rounded" src="img/--/f-1.jpg" alt="Fruits"
//                                                 style={{ height: "250px", objectFit: "cover" }} />
//                                             <div className="position-absolute bottom-0 end-0 mb-3 me-3 py-1 px-3 bg-dark rounded-pill text-primary">Fruits</div>
//                                         </div>
//                                     </div>

//                                     <div className="col-lg-4 col-md-4 col-sm-6">
//                                         <div className="position-relative">
//                                             <img className="img-fluid w-100 rounded" src="img/--/f-2.webp" alt="Pizza"
//                                                 style={{ height: "250px", objectFit: "cover" }} />
//                                             <div className="position-absolute bottom-0 end-0 mb-3 me-3 py-1 px-3 bg-dark rounded-pill text-primary">Pizza</div>
//                                         </div>
//                                     </div>

//                                     <div className="col-lg-4 col-md-4 col-sm-6">
//                                         <div className="position-relative">
//                                             <img className="img-fluid w-100 rounded" src="img/--/f-3.webp" alt="Pasta"
//                                                 style={{ height: "250px", objectFit: "cover" }} />
//                                             <div className="position-absolute bottom-0 end-0 mb-3 me-3 py-1 px-3 bg-dark rounded-pill text-primary"> Pasta </div>
//                                         </div>
//                                     </div>

//                                     <div className="col-lg-4 col-md-4 col-sm-6">
//                                         <div className="position-relative">
//                                             <img className="img-fluid w-100 rounded" src="img/--/f-4.webp" alt="Donuts"
//                                                 style={{ height: "250px", objectFit: "cover" }} />
//                                             <div className="position-absolute bottom-0 end-0 mb-3 me-3 py-1 px-3 bg-dark rounded-pill text-primary">
//                                                 Donuts</div>
//                                         </div>
//                                     </div>
//                                     <div className="col-lg-4 col-md-4 col-sm-6">
//                                         <div className="position-relative">
//                                             <img className="img-fluid w-100 rounded" src="img/--/f-5.webp" alt="Meal"
//                                                 style={{ height: "250px", objectFit: "cover" }} />
//                                             <div className="position-absolute bottom-0 end-0 mb-3 me-3 py-1 px-3 bg-dark rounded-pill text-primary">
//                                                 Meal</div>
//                                         </div>
//                                     </div>
//                                     <div className="col-lg-4 col-md-4 col-sm-6">
//                                         <div className="position-relative">
//                                             <img className="img-fluid w-100 rounded" src="img/--/f-6.jpg" alt="Fries"
//                                                 style={{ height: "250px", objectFit: "cover" }} />
//                                             <div className="position-absolute bottom-0 end-0 mb-3 me-3 py-1 px-3 bg-dark rounded-pill text-primary">
//                                                 Fries</div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div id="tab-2" className="tab-pane fade p-0">
//                                 <div className="row g-0">

//                                 </div>
//                             </div>
//                             <div id="tab-3" className="tab-pane fade p-0">
//                                 <div className="row g-0">

//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 {/* Menu End */}

//             </div>
//             <Footer />

//         </div>
//     )
// }

// export default Menu


import React, { useEffect } from "react";
import Header from "../coman/Header";
import Footer from "../coman/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

function Menu() {

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div>

            <Header />

            {/* Hero */}
            <div
                className="text-white d-flex align-items-center"
                style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/images/hero.jpg')", backgroundSize: "cover", backgroundPosition: "center", height: "50vh", }}>
                <div className="container text-center" data-aos="fade-up">
                    <h1 className="display-4 fw-bold text-warning">Our Special Menu</h1>
                    <p className="lead mt-2">Fresh Ingredients • Authentic Taste • Premium Quality</p>
                </div>
            </div>

            {/* Feature Section */}
            <div className="container-fluid position-relative p-5 pb-0 mt-5">
                <div className="row g-5">

                    <div className="col-lg-6 col-md-6" data-aos="fade-right">
                        <div className="rounded text-center p-5 bg-dark text-white shadow"
                            style={{ transition: "0.4s", cursor: "pointer" }}
                            onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                            onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}>
                            <img className="img-fluid bg-white rounded-circle mb-3" src="img/--/i-1.webp" style={{ width: 150, height: 150 }} alt="Best Chef" />
                            <h3 className="my-3">Best Chef</h3>
                            <p>Sed amet tempor amet sit kasd sea lorem dolor ipsum elitr.</p>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-6" data-aos="fade-left">
                        <div className="rounded text-center p-5 bg-dark text-white shadow"
                            style={{ transition: "0.4s", cursor: "pointer" }}
                            onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                            onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}>
                            <img className="img-fluid bg-white rounded-circle mb-3" src="img/--/i-2.webp" style={{ width: 150, height: 150 }} alt="Menu Variations" />
                            <h3 className="my-3">Menu Variations</h3>
                            <p>Wide variety of delicious dishes crafted with perfection.</p>
                        </div>
                    </div>

                </div>
            </div>

            {/* Menu Section */}
            <div className="container py-5">

                <div className="text-center mb-5" data-aos="fade-down">
                    <h5 className="text-warning fw-bold">Our Menu</h5>
                    <h2 className="fw-bold">Delicious & Fresh Food</h2>
                </div>

                <div className="row g-4">

                    {[
                        { name: "Fresh Fruits", desc: "Healthy & Organic Selection", price: "$12.00", img: "/img/--/f-1.jpg" },
                        { name: "Italian Pizza", desc: "Cheesy & Delicious", price: "$18.00", img: "/img/--/f-2.webp" },
                        { name: "Creamy Pasta", desc: "Rich & Flavorful", price: "$15.00", img: "/img/--/f-3.webp" },
                        { name: "Sweet Donuts", desc: "Soft & Freshly Baked", price: "$10.00", img: "/img/--/f-4.webp" },
                        { name: "Special Meal", desc: "Chef’s Recommendation", price: "$22.00", img: "/img/--/f-5.webp" },
                        { name: "Crispy Fries", desc: "Golden & Crunchy", price: "$8.00", img: "/img/--/f-6.jpg" },
                    ].map((item, index) => (
                        <div className="col-lg-4 col-md-6" key={index} data-aos="zoom-in" data-aos-delay={index * 150}>
                            <div className="card border-0 shadow-lg rounded-4 overflow-hidden" style={{ transition: "0.4s", cursor: "pointer" }}
                                onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                                onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}>
                                <img src={item.img} className="w-100" style={{ height: "250px", objectFit: "cover" }} alt={item.name} />
                                <div className="card-body text-center">
                                    <h5 className="fw-bold">{item.name}</h5>
                                    <p className="text-muted small">{item.desc}</p>
                                    <h6 className="text-warning fw-bold">{item.price}</h6>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>

            {/* Summer Offer Section */}
            <div className="container-fluid bg-secondary text-white text-center py-5" data-aos="fade-up">
                <h2 className="fw-bold text-warning">30% Discount This Summer</h2>
                <p className="mb-4">Enjoy our special dishes at discounted prices</p>
            </div>

            <Footer />

        </div>
    );
}

export default Menu;
