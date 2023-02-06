import './css/Reviews.css';
import review1 from './images/review-1.jpg';
import review2 from './images/review-2.jpg';
import review3 from './images/review-3.jpg';
import review4 from './images/review-4.jpg';
import Slider from "react-slick";

function Reviews() {
    const reviewSlider = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
        ]
    };
    return (
        <>
            <section className="reviews_section">
                <div className="container">
                    <div className="main_heading text-center py-5">
                        <h2>Recent Reviews</h2>
                        <p className="para my-3">See What People Have to Say About Our Accommodations</p>
                    </div>
                    <Slider {...reviewSlider}>
                        <div>
                            <div className="reviews_slider_box">
                                <div className="reviews_slider_box_info">
                                    <div className="reviews_slider_img">
                                        <img src={review1} className="img-fluid" alt="Reviews" />
                                    </div>
                                    <div className="reviews_slider_contact">
                                        <h5>Neil</h5>
                                        <div className="review_rating my-2">
                                            <ul>
                                                <li><i className="fas fa-star"></i></li>
                                                <li><i className="fas fa-star"></i></li>
                                                <li><i className="fas fa-star"></i></li>
                                                <li><i className="fas fa-star"></i></li>
                                                <li><i className="fas fa-star"></i></li>
                                            </ul>
                                        </div>
                                        <div className="review_location">
                                            <span>Columbus, OH</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="review_para mt-5">
                                    <p className="para">
                                        We will definitely be staying at Club La Pension again! It exceeded our expectations and the suite we
                                        were
                                        in was amazing. The location is unbeatable to the French quarter, canal street, the Mississippi River,
                                        and
                                        the garden district. </p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="reviews_slider_box">
                                <div className="reviews_slider_box_info">
                                    <div className="reviews_slider_img">
                                        <img src={review2} className="img-fluid" alt="Reviews" />
                                    </div>
                                    <div className="reviews_slider_contact">
                                        <h5>Aaron</h5>
                                        <div className="review_rating my-2">
                                            <ul>
                                                <li><i className="fas fa-star"></i></li>
                                                <li><i className="fas fa-star"></i></li>
                                                <li><i className="fas fa-star"></i></li>
                                                <li><i className="fas fa-star"></i></li>
                                                <li><i className="fas fa-star"></i></li>
                                            </ul>
                                        </div>
                                        <div className="review_location">
                                            <span>Loogootee, IN</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="review_para mt-5">
                                    <p className="para">
                                        Good place to stay. Very close to waterfront park and some great restaurants. Make sure you double check
                                        what room you booked, as far as bed size and room size goes. Thought we were getting a queen bed but got
                                        two double beds instead. </p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="reviews_slider_box">
                                <div className="reviews_slider_box_info">
                                    <div className="reviews_slider_img">
                                        <img src={review3} className="img-fluid" alt="Reviews" />
                                    </div>
                                    <div className="reviews_slider_contact">
                                        <h5>Sarah</h5>
                                        <div className="review_rating my-2">
                                            <ul>
                                                <li><i className="fas fa-star"></i></li>
                                                <li><i className="fas fa-star"></i></li>
                                                <li><i className="fas fa-star"></i></li>
                                                <li><i className="fas fa-star"></i></li>
                                                <li><i className="fas fa-star"></i></li>
                                            </ul>
                                        </div>
                                        <div className="review_location">
                                            <span>Surprise, AZ</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="review_para mt-5">
                                    <p className="para">

                                        The home is fabulous! We came with our two kiddos ages 12 and 9 and had so much fun. The property is
                                        beautiful and the home spotless. It is an great proximity to many locations for food and activities.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="reviews_slider_box">
                                <div className="reviews_slider_box_info">
                                    <div className="reviews_slider_img">
                                        <img src={review4} className="img-fluid" alt="Reviews" />
                                    </div>
                                    <div className="reviews_slider_contact">
                                        <h5>Cheryl</h5>
                                        <div className="review_rating my-2">
                                            <ul>
                                                <li><i className="fas fa-star"></i></li>
                                                <li><i className="fas fa-star"></i></li>
                                                <li><i className="fas fa-star"></i></li>
                                                <li><i className="fas fa-star"></i></li>
                                                <li><i className="fas fa-star"></i></li>
                                            </ul>
                                        </div>
                                        <div className="review_location">
                                            <span>Lemoore, CA</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="review_para mt-5">
                                    <p className="para">

                                        This condo is in a great location to enjoy all of the surrounding beauty and fun on Lake Tahoe. We
                                        enjoyed all of the space inside the condo as well as the stocked kitchen where we cooked some meals.
                                        Walked down to the beach, lots of trails nearby. Would definitely recommend and stay again! </p>
                                </div>
                            </div>
                        </div>

                    </Slider>
                </div>
            </section>

 



        </>
    );
}

export default Reviews;
