import React from 'react'
import Particle from '../Particle';
import { Container, } from "react-bootstrap";
import { GoLocation } from 'react-icons/go';
import { BsTelephoneOutbound } from 'react-icons/bs';
import { MdOutlineEmail } from 'react-icons/md';
function Contact() {

    return (
        <>

            <section class="mb-4 contact">
                <Particle />
                <Container >
                    <h2 class="h1-responsive font-weight-bold text-center my-4">Let's Talk</h2>
                    <Container >
                        <div class="row d-flex justify-content-center align-items-center mb-3">

                            <div class="col-md-6 mb-md-0 mb-5">
                                <form id="contact-form" name="contact-form" action="https://formspree.io/f/xoqbkbqk"
                                    method="POST">

                                    <div class="row">

                                        <div class="col-md-12 mb-3">
                                            <div class="md-form mb-0">
                                                <input type="text" id="name" name="name" class="form-control" placeholder='Full Name' required autoComplete='off' />
                                            </div>
                                        </div>



                                    </div>

                                    <div class="row">
                                        <div class="col-md-12 mb-3">
                                            <div class="md-form mb-0">
                                                <input type="text" id="email" name="email" class="form-control" placeholder='Email' required autoComplete='off' />
                                            </div>
                                        </div>
                                    </div>

                                    <div class="row">

                                        <div class="col-md-12 mb-3">

                                            <div class="md-form">
                                                <textarea type="text" id="message" name="message" rows="2" class="form-control md-textarea" placeholder='Write your subject' required autoComplete='off'></textarea>
                                            </div>

                                        </div>
                                    </div>
                                    <div class="text-center text-md-left">
                                        <button class="btn btn-primary" type='submit'>Send</button>
                                    </div>
                                </form>


                            </div>
                        </div>
                    </Container>
                    <div className='row mt-3 d-flex justify-content-center align-items-center'>
                        <div class="col-md-3 text-center">
                            <ul class="list-unstyled mb-0">
                                <li><i class="fas fa-map-marker-alt fa-2x"></i>
                                    <p className='text-center d-flex justify-content-center align-items-center'><GoLocation style={{ marginRight: "4px", fontSize: "22px" }} /> Pokhara,Nepal</p>
                                </li>

                                <li><i class="fas fa-phone mt-4 fa-2x"></i>
                                    <p className='text-center d-flex justify-content-center align-items-center'><BsTelephoneOutbound style={{ marginRight: "8px", fontSize: "22px" }} /> +9779809456396</p>
                                </li>

                                <li><i class="fas fa-envelope mt-4 fa-2x"></i>
                                    <p className='text-center d-flex justify-content-center align-items-center'><MdOutlineEmail style={{ marginRight: "8px", fontSize: "22px" }} /> khatritilak956@gmail.com</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </Container>
            </section>

        </>
    )
}

export default Contact