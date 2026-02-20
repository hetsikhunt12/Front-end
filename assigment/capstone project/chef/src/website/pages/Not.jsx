// import React from 'react'
// import { Link } from 'react-router-dom'
// import Header from '../coman/Header'
// import Footer from '../coman/Footer'

// function Not() {
//     return (
//         <div>
//              <Header />
//             <div>
//                 {/* Hero Start */}
//                 <div className="container-fluid p-5 mb-5 bg-dark text-secondary">
//                     <div className="container wow fadeIn" data-wow-delay="0.1s">
//                         <h1 className="display-1 text-secondary text-center mb-0">404 Error</h1>
//                     </div>
//                 </div>
//                 {/* Hero End */}
//                 {/* 404 Start */}
//                 <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
//                     <div className="container text-center">
//                         <div className="row justify-content-center">
//                             <div className="col-lg-6">
//                                 <i className="bi bi-exclamation-triangle display-1 text-primary" />
//                                 <h1 className="display-1">404</h1>
//                                 <h1 className="mb-4">Page Not Found</h1>
//                                 <p className="mb-4">We’re sorry, the page you have looked for does not exist in our website! Maybe go to our home page or try to use a search?</p>
//                                 <Link className="btn btn-primary rounded-pill py-3 px-5" to="/">Go Back To Home</Link>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 {/* 404 End */}

//             </div>

//          <Footer />
//         </div>
//     )
// }

// export default Not



import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Header from '../coman/Header'
import Footer from '../coman/Footer'
import AOS from "aos";
import "aos/dist/aos.css";

function Not() {

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    return (
        <>
            <Header />

            {/* Hero Header */}
            <div
                className="text-white d-flex align-items-center"
                style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/images/hero.jpg')", backgroundSize: "cover", backgroundPosition: "center", height: "30vh", }}>
                <div className="container text-center">
                    <h1 className="display-4 fw-bold text-warning" data-aos="zoom-in">404
                    </h1>
                    <p className="lead mt-2" data-aos="fade-up">Not Found
                    </p>
                </div>
            </div>

            <div className="d-flex align-items-center justify-content-center bg-light"
                style={{ minHeight: "50vh" }}>

                <div className="text-center">

                    {/* Icon */}
                    <div className="mb-4" data-aos="flip-up"><i className="fa fa-exclamation-triangle fa-3x text-warning"></i></div>

                    {/* Text */}
                    <h3 className="fw-bold mb-3" data-aos="fade-right">Oops! Page Not Found</h3>

                    <p className="text-muted mb-4 px-3" data-aos="fade-left">The page you are looking for might have been removed,renamed or is temporarily unavailable.</p>

                    {/* Buttons */}
                    <div className="d-flex justify-content-center gap-3" data-aos="fade-up">
                        <Link to="/" className="btn btn-dark px-4">Go Home</Link>

                        <Link to="/contact" className="btn btn-outline-dark px-4">Contact Us</Link>
                    </div>

                </div>
            </div>

            <Footer />
        </>
    )
}

export default Not
