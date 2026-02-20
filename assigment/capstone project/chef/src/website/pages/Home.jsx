import React, { useEffect, useState } from "react";
import Header from "../coman/Header";
import Footer from "../coman/Footer";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";

function Home() {
    const [breakfast, setBreakfast] = useState([]);
    const [lunch, setLunch] = useState([]);

    useEffect(() => {
        fetchBreakfast();
        fetchLunch();
        AOS.init({ duration: 1000 });
    }, []);

    const fetchBreakfast = async () => {
        const res = await axios.get(
            "http://localhost:3000/menu?category=breakfast"
        );
        setBreakfast(res.data);
    };

    const fetchLunch = async () => {
        const res = await axios.get(
            "http://localhost:3000/menu?category=lunch"
        );
        setLunch(res.data);
    };

    return (
        <>
            <Header />

            {/* HERO SECTION */}
            <div
                className="text-white d-flex align-items-center"
                style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/images/hero.jpg')", backgroundSize: "cover", backgroundPosition: "center", height: "60vh", }}>
                <div className="container text-center" data-aos="fade-up">
                    <h1 className="display-3 fw-bold text-warning">ChefZone</h1>
                    <p className="lead mt-3">Experience the taste of luxury & authentic flavors</p>
                    <button className="btn btn-warning btn-lg mt-2 px-4"
                        style={{ transition: "0.4s", }}
                        onMouseOver={(e) => (e.target.style.transform = "scale(1.1)")}
                        onMouseOut={(e) => (e.target.style.transform = "scale(1)")}>Explore Menu
                    </button>
                </div>
            </div>

            {/* 👨‍🍳 OUR CHEFS */}
            <div className="container py-5">
                <h2 className="text-center mb-5 fw-bold" data-aos="fade-down">Meet Our Master Chefs</h2>

                <div className="row g-4">
                    {[
                        {
                            name: "Chef Antonio", role: "Italian Cuisine Specialist", img: "img/--/img-2.jpg",
                        },
                        {
                            name: "Chef Maria", role: "Pastry & Dessert Expert", img: "img/--/img-8.jpg",
                        },
                        {
                            name: "Chef Daniel", role: "Grill & BBQ Master", img: "img/--/img-10.jpg",
                        },
                    ].map((chef, index) => (
                        <div className="col-md-4" key={index} data-aos="zoom-in" data-aos-delay={index * 200}>
                            <div className="card border-0 shadow-lg text-center"
                                style={{ transition: "0.4s", cursor: "pointer", }}
                                onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                                onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}>
                                <img src={chef.img} alt={chef.name} className="card-img-top"
                                    style={{ height: "350px", objectFit: "cover", }} />
                                <div className="card-body">
                                    <h5 className="fw-bold">{chef.name}</h5>
                                    <p className="text-muted">{chef.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* 🍽️ FOOD GALLERY */}
            <div className="container-fluid bg-light py-5">
                <div className="container">
                    <h2 className="text-center mb-5 fw-bold" data-aos="fade-up"> Our Delicious Food</h2>

                    <div className="row g-4">
                        {[
                            "img/--/img-1.jpg", "img/--/img-3.jpg",
                            "img/--/img-4.jpg", "img/--/img-6.jpg",
                        ].map((img, index) => (
                            <div className="col-md-3" key={index} data-aos="flip-left" data-aos-delay={index * 150}>
                                <img src={img} alt="food" className="img-fluid rounded shadow"
                                    style={{ transition: "0.5s", cursor: "pointer", }}
                                    onMouseOver={(e) => (e.target.style.transform = "scale(1.1)")}
                                    onMouseOut={(e) => (e.target.style.transform = "scale(1)")} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}

export default Home;
