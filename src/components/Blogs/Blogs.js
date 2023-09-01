import React from 'react';
import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap'
function Blogs() {
    return (


        <section className="blogs-section">
            <div className='blogs-banner d-flex flex-col justify-content-center align-items-center text-center'>
                <div>
                    <div>
                        <h2 className="h1 text-center text-light header"><b>My Writes</b>
                        </h2>
                        <p className='text-light text-center'>I am here to share all the knowledge, I aqure during by profession.</p>
                    </div>
                    <div className='category-btn'>
                        <Button variant="outline-light m-2">PROGRAMMING</Button>{' '}
                        <Button variant="outline-light m-2">API</Button>{' '}
                        <Button variant="outline-light m-2">REACTJS</Button>{' '}
                        <Button variant="outline-light m-2">SECURITY</Button>{' '}
                        <Button variant="outline-light m-2">DATABASES</Button>
                    </div>

                </div>
            </div>
            <div className='mt-4 blogs'>
                <Container>
                    <h1 className='text-light'>
                        Under Maintanance...

                    </h1>
                </Container>
            </div>
        </section>

    )
}

export default Blogs