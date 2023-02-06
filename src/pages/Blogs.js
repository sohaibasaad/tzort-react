import React from 'react'
import blog1 from './images/blog-1.jpg'
import blog2 from './images/blog-2.jpg'
import blog3 from './images/blog-3.jpg'
import "./css/Blogs.css"
import { NavLink } from 'react-router-dom'

function Blogs() {
    return (
        <div>
            <section className="blogSection">
                <div className="container">
                    <div className="row justify-content-center mb-5">
                        <div className="col-12 col-lg-8">
                            <div className="custom_input_blog">
                                <input type="text" className="form-control" placeholder="Search..." />
                                    <div className="blog_search_icon">
                                        <form action="" className="h-100">
                                            <i className="far fa-search"></i>
                                        </form>
                                    </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-lg-6 col-xl-4">
                            <div className="custom_card">
                                <div className="card_header">
                                    <NavLink to="/blog-details">
                                        <img src={blog1} className="img-fluid" alt="Blog Image" />
                                    </NavLink>
                                </div>
                                <div className="card_body">
                                    <div className="main_heading">
                                        <h4>The Historic Powhatan Resort a Hilton Vacation Club</h4>
                                        <p className="para my-3">This resort is my Williamsburg Favorite and you will love it too.
                                            Video
                                            by Traveling With Jennifer Sparks Savoy Day One Travel & Arrival At</p>
                                        <NavLink to="/blog-details" className="my-3">Read More <i
                                            className="fas fa-angle-double-right"></i></NavLink>
                                    </div>
                                </div>
                                <div className="card_footer">
                                    <span>August 16, 2022</span>
                                    <span>No Comments</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-lg-6 col-xl-4">
                            <div className="custom_card">
                                <div className="card_header">
                                    <NavLink to="/blog-details">
                                        <img src={blog2} className="img-fluid" alt="Blog Image" />
                                    </NavLink>
                                </div>
                                <div className="card_body">
                                    <div className="main_heading">
                                        <h4>Oceanaire a Hilton Vacation Club</h4>
                                        <p className="para my-3">This resort is right on the beach and in a prime location at
                                            Virginia Beach. You can choose 1, 2, or 3-bedroom villas here and</p>
                                        <NavLink to="/blog-details" className="my-3">Read More <i
                                            className="fas fa-angle-double-right"></i></NavLink>
                                    </div>
                                </div>
                                <div className="card_footer">
                                    <span>August 16, 2022</span>
                                    <span>No Comments</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-lg-6 col-xl-4">
                            <div className="custom_card">
                                <div className="card_header">
                                    <NavLink to="blog-details">
                                        <img src={blog3} className="img-fluid" alt="Blog Image" />
                                    </NavLink>
                                </div>
                                <div className="card_body">
                                    <div className="main_heading">
                                        <h4>Ocean Beach Club a Hilton Vacation Club</h4>
                                        <p className="para my-3">This resort and club not only offers the best of Virginia Beach,
                                            but it also gives you local access to the Hampton Roads area.</p>
                                        <NavLink to="blog-details" className="my-3">Read More <i
                                            className="fas fa-angle-double-right"></i></NavLink>
                                    </div>
                                </div>
                                <div className="card_footer">
                                    <span>August 16, 2022</span>
                                    <span>No Comments</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Blogs
