import './css/About.css';
import about1 from './images/about-1.jpg';
import about2 from './images/about-2.jpg';
import about3 from './images/about-3.jpg';
import Banner from '../components/Banner';
import Reviews from '../components/Reviews';
import { NavLink } from 'react-router-dom';

function About() {
    return (
        <>
            <Banner pageSectionClass="aboutBannerSection" bannerHeading="A Resort-Centered Online Travel Agency" bannerBoldText="A Resort-Centered Online Travel Agency Offering Resort-Style Living for the Luxurious Vacation of Your Dreams" bannerText="TZORT is an online travel agency dedicated to offering our clients luxury accommodations at five-star resorts. We work with resort partners who offer ample amenities in some of the most beautiful locations around the country. We know that you will love the comfort, adventure, and fun that only a resort vacation can supply." bannerButton="show" />

            <section className="onlineAccomodationSection">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12 col-lg-6">
                            <div className="main_heading mb-5">
                                <h2>An Online Travel Agency with a Singular Focus</h2>
                            </div>
                            <div className="main_content">
                                <p className="para my-3">We founded TZORT with a simple purpose, to make your travel dreams come
                                    true. From the start, we recognized that resort accommodations were the key to a luxury
                                    vacation. Our job is to make connections between five-star resorts and travelers looking for
                                    a better vacation experience. </p>
                                <p className="para my-3">It’s no secret that an average hotel cannot compete with a luxury resort.
                                    Our partners provide rooms with full kitchens, beautiful views, and exclusive experiences.
                                    These properties are located in some of the most popular destinations in the United States
                                    and the Virgin Islands.</p>
                                <p className="para my-3">Time after time, we receive feedback from satisfied clients who can’t
                                    believe they never tried the resort experience before. At TZORT, we believe that you should
                                    never settle for just good enough when you can have an unforgettable resort experience.</p>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6">
                            <div className="img_accomodation">
                                <img src={about1} className="img-fluid" alt="" />
                            </div>
                        </div>
                    </div>

                    <div className="row align-items-center mt-5">
                        <div className="col-12 col-lg-6 order-lg-2 order-1">
                            <div className="main_heading mb-5">
                                <h2>The TZORT Process: Luxury Resorts at a Reasonable Price</h2>
                            </div>
                            <div className="main_content">
                                <p className="para my-3">Our team of travel experts brings over thirty years of expertise to your
                                    vacation. We use our advanced knowledge and owner connections to provide access to the
                                    finest resorts you can imagine. Our resort partners work with us to sell access to their
                                    properties when they can’t use them.</p>
                                <p className="para my-3">We then make world-class resort vacations available to you for a fraction
                                    of the retail cost. For the caliber of resorts and the locations, you simply can’t find a
                                    better price anywhere. Why stay in a hotel when you can stay at a 5-star resort for the same
                                    price or less?</p>
                                <p className="para my-3">When booking and traveling with our online travel agency, you never have to
                                    worry about hidden fees, pushy sales agents, or anything other than where you want to go and
                                    when you want to be there. Once you book, we take all the hassle out of your travel
                                    preparations. It is simple for us, but doing this work would be a tremendous burden for the
                                    average traveler.</p>
                                <p className="para my-3">Put our experience to good use for your next vacation or business trip.
                                    When you are relaxing in your comfortable resort room, you will be glad you took the time to
                                    work with us. With our experienced and helpful staff, five-star resort accommodations are
                                    easily within your reach.</p>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6 order-lg-1 order-2">
                            <div className="img_accomodation">
                                <img src={about2} className="img-fluid" alt="" />
                            </div>
                        </div>
                    </div>

                    <div className="row align-items-center mt-5">
                        <div className="col-12 col-lg-6">
                            <div className="main_heading mb-5">
                                <h2>The TZORT Process: Luxury Resorts at a Reasonable Price</h2>
                            </div>
                            <div className="main_content">
                                <p className="para my-3">TZORT is part of the global community, and many members of our online
                                    travel agency operate out of their homes in the Philippines. Our talented crew provides
                                    everything from website design and management to unparalleled customer service. </p>
                                <p className="para my-3">The natural hospitality of Filipino culture is a perfect fit for our style
                                    of business. You will find that our employees combine a friendly attitude with some of the
                                    fastest response times in the industry. They want to make certain that you have a great stay
                                    at your resort location.</p>

                            </div>
                            <div>
                                <NavLink to="/community" className="custom_btn m-0 mt-5">Meer Our Team</NavLink>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6 mt-5">
                            <div className="img_accomodation img_accomodation_about">
                                <img src={about3} className="img-fluid" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="guranteed_about_section">
                <div className="container">
                    <div className="guranteed_section_content guranteed_about_section_bg">
                        <div className="main_heading text-center">
                            <h2 className="">Our Guaranteed Reservation Policy</h2>
                            <p className="para mt-3">Poor communication with some online travel agencies can lead to
                                unexpected
                                cancellations. When
                                you book with TZORT, we guarantee you will have an excellent place to stay. If there is ever a
                                conflict with
                                your reservation, we will arrange for the best accommodation possible in the area.</p>
                        </div>
                    </div>
                </div>
            </section>

            <Reviews />

            <section className="vacation_deserve_section">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-9 m-auto">
                            <div className="main_heading text-center">
                                <h2 className="text-white">Enjoy the Vacation Your Deserve</h2>
                                <p className="para mt-3 text-white">Now that you know us a little better, we hope that you will try
                                    out the TZORT
                                    experience. Our team is waiting to make your luxury vacation a reality. It’s time to start
                                    exploring
                                    your vacation possibilities.</p>
                            </div>
                            <div>
                                <NavLink to="/home" className="custom_btn bg-white mt-5">Book a Vacation</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default About;
