import React from 'react'
import { Container, } from "react-bootstrap";
import { GoLocation } from 'react-icons/go';
import { BsTelephoneOutbound } from 'react-icons/bs';
import { MdOutlineEmail } from 'react-icons/md';
function Contact() {

    return (
        <>

            <section className="mb-4 contact">
                <Container >
                    <h2 className="h1-responsive font-weight-bold text-center my-4">Let's Talk</h2>
                    <Container >
                        <div className="row d-flex justify-content-center align-items-center mb-3">

                            <div className="col-md-6 mb-md-0 mb-5">
                                <form id="contact-form" name="contact-form" action="https://formspree.io/f/xoqbkbqk"
                                    method="POST">

                                    <div className="row">

                                        <div className="col-md-12 mb-3">
                                            <div className="md-form mb-0">
                                                <input type="text" id="name" name="name" className="form-control text-white" placeholder='Full Name' required autoComplete='off' />
                                            </div>
                                        </div>



                                    </div>

                                    <div className="row">
                                        <div className="col-md-12 mb-3">
                                            <div className="md-form mb-0">
                                                <input type="text" id="email" name="email" className="form-control text-white" placeholder='Email' required autoComplete='off' />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">

                                        <div className="col-md-12 mb-3">

                                            <div className="md-form">
                                                <textarea type="text" id="message" name="message" rows="2" className="form-control md-textarea text-white" placeholder='Write your subject' required autoComplete='off'></textarea>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="text-center text-md-left">
                                        <button className="btn btn-primary btn-md" type='submit'>Send</button>
                                    </div>
                                </form>


                            </div>
                        </div>
                    </Container>
                   
                </Container>
            </section>

        </>
    )
}

export default Contact