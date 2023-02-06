import React from 'react';
import './css/Testimonials.css'
import Banner from '../components/Banner';
import review1 from '../components/images/review-1.jpg';
import review2 from '../components/images/review-2.jpg';
import review3 from '../components/images/review-3.jpg';
import review4 from '../components/images/review-4.jpg';


function Testimonials() {
    return (
        <div>
            <Banner pageSectionClass="testimonialBannerSection" bannerHeading="Testimonials" bannerBoldText="" bannerText="" bannerButton="notShow" />

            <section className="testi_reviews_section">
                <div className="container">
                    <div className="reviewList">
                        <ul className="reviewListContainer">

                            <li className="review_item">
                                <div className="">
                                    <div className="reviews_slider_box">
                                        <div className="reviews_slider_box_info">
                                            <div className="reviews_slider_img">
                                                <img src={review1} className="img-fluid" alt="Reviews" />
                                            </div>
                                            <div className="reviews_slider_contact">
                                                <h5>Jessica</h5>
                                                <div className="review_location">
                                                    <span>Pensacola, FL</span>
                                                </div>
                                                <div className="review_rating my-2">
                                                    <ul>
                                                        <li><i className="fas fa-star"></i></li>
                                                        <li><i className="fas fa-star"></i></li>
                                                        <li><i className="fas fa-star"></i></li>
                                                        <li><i className="fas fa-star"></i></li>
                                                        <li><i className="fas fa-star"></i></li>
                                                    </ul>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="review_para mt-5">
                                            <p className="para">
                                                This room was absolutely PERFECT for our Disney getaway. The location is about
                                                10
                                                minutes away from each park and really really made it convenient getting to and
                                                from. We
                                                had dinner and drinks pool side at the restaurant on site and it was fabulous!
                                                Definitely will try and book this one next time we come down. Thanks for
                                                everything!</p>
                                        </div>
                                    </div>
                                </div>
                            </li>

                            <li className="review_item">
                                <div className="">
                                    <div className="reviews_slider_box">
                                        <div className="reviews_slider_box_info">
                                            <div className="reviews_slider_img">
                                                <img src={review2} className="img-fluid" alt="Reviews" />
                                            </div>
                                            <div className="reviews_slider_contact">
                                                <h5>Eric</h5>
                                                <div className="review_location">
                                                    <span>North Little Rock, AR</span>
                                                </div>
                                                <div className="review_rating my-2">
                                                    <ul>
                                                        <li><i className="fas fa-star"></i></li>
                                                        <li><i className="fas fa-star"></i></li>
                                                        <li><i className="fas fa-star"></i></li>
                                                        <li><i className="fas fa-star"></i></li>
                                                        <li><i className="fas fa-star"></i></li>
                                                    </ul>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="review_para mt-5">
                                            <p className="para">
                                                I would recommend this room to anyone looking for a great place to stay at Big
                                                Cedar.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </li>

                            <li className="review_item">

                                <div className="">
                                    <div className="reviews_slider_box">
                                        <div className="reviews_slider_box_info">
                                            <div className="reviews_slider_img">
                                                <img src={review3} className="img-fluid" alt="Reviews" />
                                            </div>
                                            <div className="reviews_slider_contact">
                                                <h5>Cheryl</h5>
                                                <div className="review_location">
                                                    <span>Lemoore, CA</span>
                                                </div>
                                                <div className="review_rating my-2">
                                                    <ul>
                                                        <li><i className="fas fa-star"></i></li>
                                                        <li><i className="fas fa-star"></i></li>
                                                        <li><i className="fas fa-star"></i></li>
                                                        <li><i className="fas fa-star"></i></li>
                                                        <li><i className="fas fa-star"></i></li>
                                                    </ul>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="review_para mt-5">
                                            <p className="para">
                                                This condo is in a great location to enjoy all of the surrounding beauty and fun
                                                on Lake
                                                Tahoe. We enjoyed all of the space inside the condo as well as the stocked
                                                kitchen where
                                                we cooked some meals. Walked down to the beach, lots of trails nearby. Would
                                                definitely
                                                recommend and stay again!</p>
                                        </div>
                                    </div>
                                </div>
                            </li>

                            <li className="review_item">
                                <div className="">
                                    <div className="reviews_slider_box">
                                        <div className="reviews_slider_box_info">
                                            <div className="reviews_slider_img">
                                                <img src={review4} className="img-fluid" alt="Reviews" />
                                            </div>
                                            <div className="reviews_slider_contact">
                                                <h5>Jennifer</h5>
                                                <div className="review_location">
                                                    <span>Goodyear, AZ</span>
                                                </div>
                                                <div className="review_rating my-2">
                                                    <ul>
                                                        <li><i className="fas fa-star"></i></li>
                                                        <li><i className="fas fa-star"></i></li>
                                                        <li><i className="fas fa-star"></i></li>
                                                        <li><i className="fas fa-star"></i></li>
                                                        <li><i className="fas fa-star"></i></li>
                                                    </ul>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="review_para mt-5">
                                            <p className="para">
                                                Absolutely loved staying at Christian’s condo at Wyndham Pagosa! It was a
                                                perfect getaway for my family! I was super impressed by the ease of check in and
                                                everything was super clean and comfortable! The view was beautiful of the lake
                                                and so peaceful. It was a wonderful vacation!
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </li>

                            <li className="review_item">
                                <div className="">
                                    <div className="reviews_slider_box">
                                        <div className="reviews_slider_box_info">
                                            <div className="reviews_slider_img">
                                                <img src={review3} className="img-fluid" alt="Reviews" />
                                            </div>
                                            <div className="reviews_slider_contact">
                                                <h5>Justin</h5>
                                                <div className="review_location">
                                                    <span>Homosassa Springs, FL</span>
                                                </div>
                                                <div className="review_rating my-2">
                                                    <ul>
                                                        <li><i className="fas fa-star"></i></li>
                                                        <li><i className="fas fa-star"></i></li>
                                                        <li><i className="fas fa-star"></i></li>
                                                        <li><i className="fas fa-star"></i></li>
                                                        <li><i className="fas fa-star"></i></li>
                                                    </ul>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="review_para mt-5">
                                            <p className="para">
                                                Great place just hotel stuff not so helpful
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </li>

                            <li className="review_item">
                                <div className="">
                                    <div className="reviews_slider_box">
                                        <div className="reviews_slider_box_info">
                                            <div className="reviews_slider_img">
                                                <img src={review2} className="img-fluid" alt="Reviews" />
                                            </div>
                                            <div className="reviews_slider_contact">
                                                <h5>Mike</h5>
                                                <div className="review_location">
                                                    <span>Rochester, MN</span>
                                                </div>
                                                <div className="review_rating my-2">
                                                    <ul>
                                                        <li><i className="fas fa-star"></i></li>
                                                        <li><i className="fas fa-star"></i></li>
                                                        <li><i className="fas fa-star"></i></li>
                                                        <li><i className="fas fa-star"></i></li>
                                                        <li><i className="fas fa-star"></i></li>
                                                    </ul>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="review_para mt-5">
                                            <p className="para">
                                                Tzort was an excellent host. Exceeded our expectations and very quick
                                                communication. Highly recommend and will do business again in the future. We
                                                were unexpectedly upgraded to a larger and higher-end room, which I’m sure is
                                                not standard and probably due to resort room availability, but it was an
                                                unexpected and welcome surprise.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </li>

                            <li className="review_item">
                                <div className="">
                                    <div className="reviews_slider_box">
                                        <div className="reviews_slider_box_info">
                                            <div className="reviews_slider_img">
                                                <img src={review1} className="img-fluid" alt="Reviews" />
                                            </div>
                                            <div className="reviews_slider_contact">
                                                <h5>Gabrielle</h5>
                                                <div className="review_location">
                                                    <span>Indian Creek, FL</span>
                                                </div>
                                                <div className="review_rating my-2">
                                                    <ul>
                                                        <li><i className="fas fa-star"></i></li>
                                                        <li><i className="fas fa-star"></i></li>
                                                        <li><i className="fas fa-star"></i></li>
                                                        <li><i className="fas fa-star"></i></li>
                                                        <li><i className="fas fa-star"></i></li>
                                                    </ul>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="review_para mt-5">
                                            <p className="para">
                                                Beautiful location with spacious comfortable rooms. The staff was extremely nice
                                                and helpful!
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </li>

                            <li className="review_item">
                                <div className="">
                                    <div className="reviews_slider_box">
                                        <div className="reviews_slider_box_info">
                                            <div className="reviews_slider_img">
                                                <img src={review4} className="img-fluid" alt="Reviews" />
                                            </div>
                                            <div className="reviews_slider_contact">
                                                <h5>Justin</h5>
                                                <div className="review_location">
                                                    <span>Homosassa Springs, FL</span>
                                                </div>
                                                <div className="review_rating my-2">
                                                    <ul>
                                                        <li><i className="fas fa-star"></i></li>
                                                        <li><i className="fas fa-star"></i></li>
                                                        <li><i className="fas fa-star"></i></li>
                                                        <li><i className="fas fa-star"></i></li>
                                                        <li><i className="fas fa-star"></i></li>
                                                    </ul>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="review_para mt-5">
                                            <p className="para">
                                                Great place just hotel stuff not so helpful
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </li>

                            <li className="review_item">
                                <div className="">
                                    <div className="reviews_slider_box">
                                        <div className="reviews_slider_box_info">
                                            <div className="reviews_slider_img">
                                                <img src={review1} className="img-fluid" alt="Reviews" />
                                            </div>
                                            <div className="reviews_slider_contact">
                                                <h5>James</h5>
                                                <div className="review_location">
                                                    <span>Pinehurst, TX</span>
                                                </div>
                                                <div className="review_rating my-2">
                                                    <ul>
                                                        <li><i className="fas fa-star"></i></li>
                                                        <li><i className="fas fa-star"></i></li>
                                                        <li><i className="fas fa-star"></i></li>
                                                        <li><i className="fas fa-star"></i></li>
                                                        <li><i className="fas fa-star"></i></li>
                                                    </ul>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="review_para mt-5">
                                            <p className="para">
                                                Very nice space. Well laid out. Nice furniture. Traditional finish. I would
                                                highly recommend this!
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </li>

                            <li className="review_item">
                                <div className="">
                                    <div className="reviews_slider_box">
                                        <div className="reviews_slider_box_info">
                                            <div className="reviews_slider_img">
                                                <img src={review3} className="img-fluid" alt="Reviews" />
                                            </div>
                                            <div className="reviews_slider_contact">
                                                <h5>Keisha</h5>
                                                <div className="review_location">
                                                    <span>Atlanta, GA</span>
                                                </div>
                                                <div className="review_rating my-2">
                                                    <ul>
                                                        <li><i className="fas fa-star"></i></li>
                                                        <li><i className="fas fa-star"></i></li>
                                                        <li><i className="fas fa-star"></i></li>
                                                        <li><i className="fas fa-star"></i></li>
                                                        <li><i className="fas fa-star"></i></li>
                                                    </ul>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="review_para mt-5">
                                            <p className="para">
                                                The view from this condo was amazing, lots of space amazing spot!
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </li>

                            <li className="review_item">
                                <div className="">
                                    <div className="reviews_slider_box">
                                        <div className="reviews_slider_box_info">
                                            <div className="reviews_slider_img">
                                                <img src={review2} className="img-fluid" alt="Reviews" />
                                            </div>
                                            <div className="reviews_slider_contact">
                                                <h5>Laura</h5>
                                                <div className="review_location">
                                                    <span>Tabor City, NC</span>
                                                </div>
                                                <div className="review_rating my-2">
                                                    <ul>
                                                        <li><i className="fas fa-star"></i></li>
                                                        <li><i className="fas fa-star"></i></li>
                                                        <li><i className="fas fa-star"></i></li>
                                                        <li><i className="fas fa-star"></i></li>
                                                        <li><i className="fas fa-star"></i></li>
                                                    </ul>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="review_para mt-5">
                                            <p className="para">
                                                Great location. Room clean and beds are comfortable. The host was quick to
                                                respond and courteous. The property staff were very friendly and helpful.
                                                Overall, we were pleased with our stay.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </li>

                            <li className="review_item">
                                <div className="">
                                    <div className="reviews_slider_box">
                                        <div className="reviews_slider_box_info">
                                            <div className="reviews_slider_img">
                                                <img src={review4} className="img-fluid" alt="Reviews" />
                                            </div>
                                            <div className="reviews_slider_contact">
                                                <h5>Lakeisha</h5>
                                                <div className="review_location">
                                                    <span>Smithfield, NC</span>
                                                </div>
                                                <div className="review_rating my-2">
                                                    <ul>
                                                        <li><i className="fas fa-star"></i></li>
                                                        <li><i className="fas fa-star"></i></li>
                                                        <li><i className="fas fa-star"></i></li>
                                                        <li><i className="fas fa-star"></i></li>
                                                        <li><i className="fas fa-star"></i></li>
                                                    </ul>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="review_para mt-5">
                                            <p className="para">
                                                This stay is perfect! It’s cute, clean and very convenient! Close to attractions
                                                and restaurants! Beautiful view and location. The host was very quick to respond
                                                and kind.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </li>

                            <li className="review_item">
                                <div className="">
                                    <div className="reviews_slider_box">
                                        <div className="reviews_slider_box_info">
                                            <div className="reviews_slider_img">
                                                <img src={review2} className="img-fluid" alt="Reviews" />
                                            </div>
                                            <div className="reviews_slider_contact">
                                                <h5>Allison</h5>
                                                <div className="review_location">
                                                    <span>Kill Devil Hills, NC</span>
                                                </div>
                                                <div className="review_rating my-2">
                                                    <ul>
                                                        <li><i className="fas fa-star"></i></li>
                                                        <li><i className="fas fa-star"></i></li>
                                                        <li><i className="fas fa-star"></i></li>
                                                        <li><i className="fas fa-star"></i></li>
                                                        <li><i className="fas fa-star"></i></li>
                                                    </ul>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="review_para mt-5">
                                            <p className="para">
                                                The cabin we got was very newly renovated and outstanding. Tucked in the trees
                                                but with modern luxury touches comfortable beds (even the pull-out couch) and
                                                everything we needed for a comfortable. The support staff was very responsive to
                                                all of my questions and the whole process was a breeze, I would definitely stay
                                                here again
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </li>

                            <li className="review_item">
                                <div className="">
                                    <div className="reviews_slider_box">
                                        <div className="reviews_slider_box_info">
                                            <div className="reviews_slider_img">
                                                <img src={review4} className="img-fluid" alt="Reviews" />
                                            </div>
                                            <div className="reviews_slider_contact">
                                                <h5>Haley</h5>
                                                <div className="review_location">
                                                    <span>Rochester Hills, MI</span>
                                                </div>
                                                <div className="review_rating my-2">
                                                    <ul>
                                                        <li><i className="fas fa-star"></i></li>
                                                        <li><i className="fas fa-star"></i></li>
                                                        <li><i className="fas fa-star"></i></li>
                                                        <li><i className="fas fa-star"></i></li>
                                                        <li><i className="fas fa-star"></i></li>
                                                    </ul>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="review_para mt-5">
                                            <p className="para">
                                                It was great! Great location and had lots to do
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </li>

                            <li className="review_item">
                                <div className="">
                                    <div className="reviews_slider_box">
                                        <div className="reviews_slider_box_info">
                                            <div className="reviews_slider_img">
                                                <img src={review3} className="img-fluid" alt="Reviews" />
                                            </div>
                                            <div className="reviews_slider_contact">
                                                <h5>Jennie</h5>
                                                <div className="review_location">
                                                    <span>Knoxville, TN</span>
                                                </div>
                                                <div className="review_rating my-2">
                                                    <ul>
                                                        <li><i className="fas fa-star"></i></li>
                                                        <li><i className="fas fa-star"></i></li>
                                                        <li><i className="fas fa-star"></i></li>
                                                        <li><i className="fas fa-star"></i></li>
                                                        <li><i className="fas fa-star"></i></li>
                                                    </ul>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="review_para mt-5">
                                            <p className="para">
                                                This was our second stay and it did not disappoint! Great location and a very
                                                nice and well-equipped condo.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </li>

                        </ul>

                    </div>
                </div>
            </section>
        </div>
    )
}

export default Testimonials
