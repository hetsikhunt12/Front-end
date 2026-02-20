// import React from 'react'
// import Header from '../coman/Header'
// import Footer from '../coman/Footer'

// function About() {
//     return (
//         <div>

//             <Header />
//             <div>
//                 {/* Hero Start */}
//                 <div className="container-fluid p-5 mb-5 bg-dark text-secondary">
//                     <div className="container wow fadeIn" data-wow-delay="0.1s">
//                         <h1 className="display-1 text-secondary text-center mb-0">About</h1>
//                     </div>
//                 </div>
//                 {/* Hero End */}
//                 {/* About Start */}
//                 <div className="container-fluid p-5">
//                     <div className="row gx-5">
//                         <div className="col-lg-5 mb-5 mb-lg-0 wow fadeIn" data-wow-delay="0.1s" style={{ minHeight: 500 }}>
//                             <div className="position-relative h-100">
//                                 <div className="position-absolute top-0 start-0 animate-rotate" style={{ width: 160, height: 160 }}>
//                                     <img className="img-fluid" src="img/about-round.jpg" alt />
//                                 </div>
//                                 <img className="position-absolute w-100 h-100 rounded-circle rounded-bottom rounded-end" src="img/--/img-7.jpg"style={{ objectFit: 'cover' }} />
//                             </div>
//                         </div>
//                         <div className="col-lg-7">
//                             <div className="mb-4 wow fadeIn" data-wow-delay="0.2s">
//                                 <h5 className="section-title">About Us</h5>
//                                 <h1 className="display-3 mb-0">Cooking Together With The Expert</h1>
//                             </div>
//                             <p className="mb-4 wow fadeIn" data-wow-delay="0.3s">Nonumy erat diam duo labore clita. Sit magna ipsum dolor sed ea duo at ut. Tempor sit
//                                 lorem sit magna ipsum duo. Sit eos dolor ut sea rebum, diam sea rebum lorem kasd ut ipsum dolor est
//                                 ipsum. Et stet amet justo amet clita erat, ipsum sed at ipsum eirmod labore lorem.</p>
//                             <div className="row">
//                                 <div className="col-sm-6 wow fadeIn" data-wow-delay="0.4s">
//                                     <div className="bg-light rounded p-4">
//                                         <img className="img-fluid bg-primary rounded-circle mb-3" src="img/--/i-1.webp" style={{ width: 80, height: 80 }} />
//                                         <h4>Master Chefs</h4>
//                                         <p className="mb-0">Tempor erat elitr at rebum at at clita aliquyam consetetur. Diam dolor diam
//                                             ipsum et, tempor voluptua sit consetetur sit. Aliquyam diam amet diam et eos sadipscing
//                                             labore.</p>
//                                     </div>
//                                 </div>
//                                 <div className="col-sm-6 wow fadeIn" data-wow-delay="0.5s">
//                                     <div className="bg-light rounded p-4">
//                                         <img className="img-fluid bg-primary rounded-circle mb-3" src="img/feature-3.png" style={{ width: 80, height: 80 }} />
//                                         <h4>Quality Food</h4>
//                                         <p className="mb-0">Tempor erat elitr at rebum at at clita aliquyam consetetur. Diam dolor diam
//                                             ipsum et, tempor voluptua sit consetetur sit. Aliquyam diam amet diam et eos sadipscing
//                                             labore.</p>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 {/* About End */}
//                 {/* Facts Start */}
//                 <div className="container-fluid bg-dark facts p-5 my-5">
//                     <div className="row gx-5 gy-4 py-5">
//                         <div className="col-lg-3 col-md-6 wow fadeIn" data-wow-delay="0.1s">
//                             <div className="d-flex">
//                                 <div className="rounded-circle d-flex align-items-center justify-content-center mb-3" style={{ width: 80, height: 80, }}>
//                                     <i className="fa fa-star fs-4 text-primary" />
//                                 </div>
//                                 <div className="ps-4">
//                                     <h5 className="text-white">Years</h5>
//                                     <h1 className="display-5 text-secondary mb-0" data-toggle="counter-up">1234</h1>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="col-lg-3 col-md-6 wow fadeIn" data-wow-delay="0.2s">
//                             <div className="d-flex">
//                                 <div className="rounded-circle d-flex align-items-center justify-content-center mb-3" style={{ width: 80, height: 80, }}>
//                                     <i className="fa fa-users fs-4 text-primary" />
//                                 </div>
//                                 <div className="ps-4">
//                                     <h5 className="text-white">Clients</h5>
//                                     <h1 className="display-5 text-secondary mb-0" data-toggle="counter-up">1234</h1>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="col-lg-3 col-md-6 wow fadeIn" data-wow-delay="0.3s">
//                             <div className="d-flex">
//                                 <div className="rounded-circle d-flex align-items-center justify-content-center mb-3" style={{ width: 80, height: 80, }}>
//                                     <i className="fa fa-check fs-4 text-primary" />
//                                 </div>
//                                 <div className="ps-4">
//                                     <h5 className="text-white">Awards</h5>
//                                     <h1 className="display-5 text-secondary mb-0" data-toggle="counter-up">1234</h1>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="col-lg-3 col-md-6 wow fadeIn" data-wow-delay="0.4s">
//                             <div className="d-flex">
//                                 <div className="rounded-circle d-flex align-items-center justify-content-center mb-3" style={{ width: 80, height: 80, }}>
//                                     <i className="fa fa-mug-hot fs-4 text-primary" />
//                                 </div>
//                                 <div className="ps-4">
//                                     <h5 className="text-white">Events</h5>
//                                     <h1 className="display-5 text-secondary mb-0" data-toggle="counter-up">1234</h1>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 {/* Facts End */}
//                 {/* Team Start */}
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

// export default About


import React, { useEffect } from "react";
import Header from "../coman/Header";
import Footer from "../coman/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

function About() {

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div>
            <Header />

            {/* HERO SECTION */}
            <div className="text-white d-flex align-items-center"
                style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/images/hero.jpg')", backgroundSize: "cover", backgroundPosition: "center", height: "50vh", }} >
                <div className="container text-center" data-aos="fade-up">
                    <h1 className="display-4 fw-bold text-warning">About Our Kitchen</h1>
                    <p className="lead mt-2">Passion, Perfection & Premium Taste Experience </p>
                </div>
            </div>

            {/* About Section */}
            <div className="container py-5">
                <div className="row align-items-center g-5">

                    <div className="col-lg-6" data-aos="fade-right">
                        <img src="/img/--/img-7.jpg" alt="Chef" className="img-fluid rounded-4 shadow-lg"
                            style={{ height: "450px", objectFit: "cover", width: "100%", transition: "0.4s", cursor: "pointer" }}
                            onMouseOver={(e) => (e.target.style.transform = "scale(1.05)")}
                            onMouseOut={(e) => (e.target.style.transform = "scale(1)")} />
                    </div>

                    <div className="col-lg-6" data-aos="fade-left">
                        <h2 className="fw-bold mb-4">Cooking With Passion & Creativity</h2>
                        <p className="text-muted">Our chefs blend tradition with innovation to create unforgettable dishes.We focus on fresh ingredients, authentic flavors, and elegant presentation.</p>
                        <div className="row mt-4 g-4">
                            <div className="col-md-6" data-aos="zoom-in">
                                <div className="p-4 bg-dark text-white rounded-4 shadow h-100" style={{ transition: "0.4s", cursor: "pointer" }}
                                    onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                                    onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}>
                                    <h5 className="fw-bold">Master Chefs</h5>
                                    <p className="small">Experienced professionals delivering excellence.</p>
                                </div>
                            </div>

                            <div className="col-md-6" data-aos="zoom-in" data-aos-delay="200">
                                <div className="p-4 bg-dark text-white rounded-4 shadow h-100"
                                    style={{ transition: "0.4s", cursor: "pointer" }}
                                    onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                                    onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}>
                                    <h5 className="fw-bold">Premium Quality</h5>
                                    <p className="small">Fresh ingredients with hygienic preparation.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Statistics Section */}
            <div className="container-fluid py-5 bg-secondary text-white">
                <div className="container">
                    <div className="row text-center g-4">

                        {[
                            { number: "15+", label: "Years Experience" }, { number: "500+", label: "Happy Clients" },
                            { number: "120+", label: "Expert Chefs" }, { number: "50+", label: "Awards Winning" },
                        ].map((item, index) => (
                            <div className="col-md-3" key={index} data-aos="fade-up" data-aos-delay={index * 200}>
                                <h1 className="fw-bold">{item.number}</h1>
                                <p className="mb-0">{item.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Team Section */}
            <div className="container py-5">
                <div className="text-center mb-5" data-aos="fade-down">
                    <h2 className="fw-bold">Meet Our Expert Chefs</h2>
                    <p className="text-muted">Professional & Passionate Team</p>
                </div>

                <div className="row g-4">

                    {[
                        { name: "John Deo", role: "Master Chef", img: "/img/--/img-8.jpg" },
                        { name: "Alex Smith", role: "Sous Chef", img: "/img/--/img-9.jpg" },
                        { name: "Michael Lee", role: "Pastry Chef", img: "/img/--/img-10.jpg" },
                    ].map((chef, index) => (
                        <div className="col-md-4" key={index} data-aos="flip-left" data-aos-delay={index * 200}>
                            <div className="shadow-lg rounded-4 overflow-hidden text-center"
                                style={{ transition: "0.4s", cursor: "pointer" }}
                                onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                                onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}>
                                <img src={chef.img} className="w-100" alt="Chef"
                                    style={{ height: "350px", objectFit: "cover", }} />
                                <div className="p-4 bg-dark text-white">
                                    <h5 className="fw-bold mb-1">{chef.name}</h5>
                                    <small className="text-warning">{chef.role}</small>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default About;
