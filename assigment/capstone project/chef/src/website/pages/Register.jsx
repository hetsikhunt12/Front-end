import React, { useState, useEffect } from 'react';
import {
    MDBBtn,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBCheckbox
} from 'mdb-react-ui-kit';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import Footer from '../coman/Footer';
import Header from '../coman/Header';
import AOS from "aos";
import "aos/dist/aos.css";

function Register() {

    const redirect = useNavigate();

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    const [form, setform] = useState({
        id: "",
        name: "",
        email: "",
        password: "",
        status: ""
    });

    const getchange = (e) => {
        setform({
            ...form,
            id: new Date().getTime().toString(),
            status: "unblock",
            [e.target.name]: e.target.value
        });
    };

    const getdata = async (e) => {
        e.preventDefault();

        try {

            if (!form.email.trim() || !form.password.trim() || !form.name.trim()) {
                toast.error("Please enter your name, email and password!");
                return false;
            }

            const res = await axios.post("http://localhost:3000/user", form);
            console.log(res.data);

            toast.success("Registration successful!");
            redirect("/login");

        } catch (error) {
            console.log("API error", error);
        }
    };

    return (
        <div>
            <Header />

            <MDBContainer fluid className='d-flex align-items-center justify-content-center bg-image' style={{ minHeight: "100vh" }}>

                <MDBCard className='m-5 shadow' style={{ maxWidth: '600px' }} data-aos="zoom-in">

                    <form onSubmit={getdata}>
                        <MDBCardBody className='px-5'>

                            <h2 className="text-uppercase text-center mb-5" data-aos="fade-down" >Create an Account
                            </h2>

                            <div data-aos="fade-right">
                                <MDBInput value={form.name} name='name' onChange={getchange} wrapperClass='mb-4' label='Your Name' size='lg' type='text' />
                            </div>

                            <div data-aos="fade-left">
                                <MDBInput value={form.email} name='email' onChange={getchange} wrapperClass='mb-4' label='Your Email' size='lg' type='email' />
                            </div>

                            <div data-aos="fade-right">
                                <MDBInput value={form.password} name='password' onChange={getchange} wrapperClass='mb-4' label='Password' size='lg' type='password' />
                            </div>

                            <div className='d-flex flex-row justify-content-center mb-4' data-aos="fade-up">
                                <MDBCheckbox name='flexCheck' id='flexCheckDefault' label='I agree all statements in Terms of service' />
                            </div>

                            <MDBBtn
                                className='mb-4 w-100 gradient-custom-4' size='lg' data-aos="zoom-in-up">Register
                            </MDBBtn>

                        </MDBCardBody>
                    </form>

                </MDBCard>

            </MDBContainer>

            <Footer />
        </div>
    );
}

export default Register;
