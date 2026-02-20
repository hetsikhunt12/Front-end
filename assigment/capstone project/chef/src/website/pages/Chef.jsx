// import React from 'react'
// import Header from '../coman/Header'
// import Footer from '../coman/Footer'

// function Chef() {
//     return (
//         <div>

//             <Header />
//             <div>
//                 {/* Hero Start */}
//                 <div className="container-fluid p-5 mb-5 bg-dark text-secondary">
//                     <div className="container wow fadeIn" data-wow-delay="0.1s">
//                         <h1 className="display-1 text-secondary text-center mb-0">Chefs</h1>
//                     </div>
//                 </div>
//                 {/* Hero End */}
//                  {/* Team Start */}
//                 <div className="container-fluid p-5">
//                     <div className="mb-5 text-center wow fadeIn" data-wow-delay="0.1s" style={{ maxWidth: 700, margin: 'auto' }}>
//                         <h5 className="section-title">Expert Chefs</h5>
//                         <h1 className="display-3 mb-0">Let's Meet The Expert</h1>
//                     </div>
//                     <div className="row g-5">
//                         <div className="col-lg-4 col-md-6 wow fadeIn" data-wow-delay="0.1s">
//                             <div className="team-item position-relative">
//                                 <div className="position-relative overflow-hidden rounded-circle rounded-bottom rounded-end">
//                                     <img className="img-fluid w-100" src="img/--/img-8.jpg" alt />
//                                     <div className="team-overlay">
//                                         <div className="d-flex align-items-center justify-content-start">
//                                             <a className="btn btn-light btn-square rounded-circle mx-1" href="#"><i className="fab fa-twitter" /></a>
//                                             <a className="btn btn-light btn-square rounded-circle mx-1" href="#"><i className="fab fa-facebook-f" /></a>
//                                             <a className="btn btn-light btn-square rounded-circle mx-1" href="#"><i className="fab fa-linkedin-in" /></a>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div className="position-absolute start-0 bottom-0 d-flex flex-column justify-content-center w-100 rounded-bottom text-center" style={{ height: 100, background: 'rgba(34, 36, 41, .9)' }}>
//                                     <h5 className="text-light">John Deo</h5>
//                                     <p className="small text-uppercase text-secondary m-0" style={{ letterSpacing: 3 }}>Master Chef</p>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="col-lg-4 col-md-6 wow fadeIn" data-wow-delay="0.3s">
//                             <div className="team-item position-relative">
//                                 <div className="position-relative overflow-hidden rounded-circle rounded-bottom rounded-end">
//                                     <img className="img-fluid w-100" src="img/--/img-9.jpg" alt />
//                                     <div className="team-overlay">
//                                         <div className="d-flex align-items-center justify-content-start">
//                                             <a className="btn btn-light btn-square rounded-circle mx-1" href="#"><i className="fab fa-twitter" /></a>
//                                             <a className="btn btn-light btn-square rounded-circle mx-1" href="#"><i className="fab fa-facebook-f" /></a>
//                                             <a className="btn btn-light btn-square rounded-circle mx-1" href="#"><i className="fab fa-linkedin-in" /></a>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div className="position-absolute start-0 bottom-0 d-flex flex-column justify-content-center w-100 rounded-bottom text-center" style={{ height: 100, background: 'rgba(34, 36, 41, .9)' }}>
//                                     <h5 className="text-light">John Deo</h5>
//                                     <p className="small text-uppercase text-secondary m-0" style={{ letterSpacing: 3 }}>Assistant</p>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="col-lg-4 col-md-6 wow fadeIn" data-wow-delay="0.5s">
//                             <div className="team-item position-relative">
//                                 <div className="position-relative overflow-hidden rounded-circle rounded-bottom rounded-end">
//                                     <img className="img-fluid w-100" src="img/--/img-10.jpg" alt />
//                                     <div className="team-overlay">
//                                         <div className="d-flex align-items-center justify-content-start">
//                                             <a className="btn btn-light btn-square rounded-circle mx-1" href="#"><i className="fab fa-twitter" /></a>
//                                             <a className="btn btn-light btn-square rounded-circle mx-1" href="#"><i className="fab fa-facebook-f" /></a>
//                                             <a className="btn btn-light btn-square rounded-circle mx-1" href="#"><i className="fab fa-linkedin-in" /></a>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div className="position-absolute start-0 bottom-0 d-flex flex-column justify-content-center w-100 rounded-bottom text-center" style={{ height: 100, background: 'rgba(34, 36, 41, .9)' }}>
//                                     <h5 className="text-light">John Deo</h5>
//                                     <p className="small text-uppercase text-secondary m-0" style={{ letterSpacing: 3 }}>Assistant</p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 {/* Team End */}

//             </div>
//             <Footer />

//         </div>
//     )
// }

// export default Chef


import React, { useEffect } from "react";
import Header from "../coman/Header";
import Footer from "../coman/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

function Chef() {

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <>
            <Header />

            {/* Hero Section */}
            <div
                className="text-white d-flex align-items-center"
                style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/images/hero.jpg')", backgroundSize: "cover", backgroundPosition: "center", height: "50vh", }}>
                <div className="container text-center" data-aos="fade-up">
                    <h1 className="display-4 fw-bold text-warning">Our Professional Chefs</h1>
                    <p className="lead mt-2">Meet the experts behind our delicious cuisine</p>
                </div>
            </div>

            {/* Chef Section */}
            <div className="container py-5">
                <div className="row g-4">

                    {[
                        {
                            name: "Ethan Walker", role: "Master Chef", desc: "12+ Years Experience in Italian & Continental Cuisine.", img: "img/--/1.png", rating: "⭐⭐⭐⭐⭐"
                        },
                        {
                            name: "Olivia Martinez", role: "Pastry Specialist", desc: "Expert in Desserts, Cakes & French Bakery.", img: "img/--/5.avif", rating: "⭐⭐⭐⭐☆"
                        },
                        {
                            name: "Marco Rossi", role: "Sous Chef", desc: "Specialised in BBQ, Steak & Mediterranean dishes.", img: "img/--/2.jpg", rating: "⭐⭐⭐⭐⭐"
                        }
                    ].map((chef, index) => (
                        <div className="col-lg-4 col-md-6" key={index} data-aos="zoom-in" data-aos-delay={index * 200}>
                            <div className="card border-0 shadow-lg h-100 text-center"
                                style={{ transition: "0.4s", cursor: "pointer" }}
                                onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                                onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}>
                                <img src={chef.img} className="card-img-top" style={{ height: "450px", objectFit: "cover" }} alt={chef.name} />

                                <div className="card-body">
                                    <h5 className="fw-bold">{chef.name}</h5>
                                    <p className="text-muted mb-1">{chef.role}</p>

                                    <p className="small text-secondary">{chef.desc}</p>

                                    <div className="text-warning mb-2">{chef.rating}</div>

                                    <div className="d-flex justify-content-center gap-2 mb-3">
                                        <span className="badge bg-dark">Italian</span>
                                        <span className="badge bg-secondary">Grill</span>
                                        <span className="badge bg-warning text-dark">Seafood</span>
                                    </div>

                                    <div className="d-flex justify-content-center gap-3 mb-3">
                                        <i className="fab fa-twitter"></i>
                                        <i className="fab fa-facebook-f"></i>
                                        <i className="fab fa-linkedin-in"></i>
                                    </div>

                                    <button
                                        className="btn btn-dark w-100"
                                        style={{ transition: "0.3s" }}
                                        onMouseOver={(e) => (e.target.style.backgroundColor = "#ffc107")}
                                        onMouseOut={(e) => (e.target.style.backgroundColor = "#212529")}>Book Table
                                    </button>

                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>

            <Footer />
        </>
    );
}

export default Chef;
