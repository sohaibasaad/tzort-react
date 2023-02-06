import React from 'react'
import './css/Contact.css'

function Contact() {
    return (
        <div>
            <section className="contactSection">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12 col-lg-6">
                            <div className="main_heading">
                                <h2>How Can We Help You?</h2>
                                <p className="para my-4">At TZORT, we understand the critical nature of customer service in the travel industry.
                                    Do you
                                    have questions or concerns about your stay? Simply fill out this form and we will get back to you as soon
                                    as
                                    possible.</p>
                                <div className="contactInfo">
                                    <span className=""><strong>Email:</strong> <a href="support@tzort.com">Support@Tzort.com</a></span>
                                    <span className=" d-block my-3"><strong>Address:</strong>
                                        <p className="para w-50">201 W. Big Beaver Road Suite 500 Troy, MI 48084</p>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6">
                            <form action="">
                                <div className="row">
                                    <div className="col-12 col-lg-6">
                                        <input type="text" className="form-control custom_input" placeholder="First Name"/>
                                    </div>
                                    <div className="col-12 col-lg-6 mt-3 mt-lg-0">
                                        <input type="text" className="form-control custom_input" placeholder="Last Name"/>
                                    </div>
                                    <div className="col-12 col-lg-6 mt-3">
                                        <input type="number" className="form-control custom_input" placeholder="Phone"/>
                                    </div>
                                    <div className="col-12 col-lg-6 mt-3">
                                        <input type="email" className="form-control custom_input" placeholder="Email"/>
                                    </div>
                                    <div className="col-12 col-lg-12 mt-3">
                                        <textarea className="form-control custom_input" placeholder="Message"></textarea>
                                    </div>
                                    <div className="col-12 col-lg-12 mt-3">
                                        <button className="custom_btn w-100">Submit</button>
                                    </div>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contact
