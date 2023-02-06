import React from 'react'
import { NavLink } from 'react-router-dom';
import Banner from '../components/Banner';
import community8 from './images/community-8.jpg';

function CommunityFee() {
    return (
        <div>
            <Banner pageSectionClass="communityFeeBannerSection" bannerHeading="Understanding the TZORT Community Fee" bannerBoldText="Supporting the Team that Supports Your Travel"
                bannerText="Behind every remarkable TZORT resort stay, there is a dedicated team making sure
            the whole process runs smoothly. We want to be certain that our employees are
            well-compensated for their hard work. The TZORT Community Fee makes that goal possible." bannerButton="show" />

            <section className="onlineAccomodationSection" id="learn_more">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12 col-lg-6">
                            <div className="main_heading mb-5">
                                <h2>What is the TZORT Community Fee?</h2>
                            </div>
                            <div className="main_content">
                                <p className="para my-3">When you reached the checkout area during the booking process, you may have
                                    noticed our Community Fee listed as part of the cost. Because you are staying in resort
                                    accommodations, there are no cleaning fees as you might see with other online accommodation
                                    sites.</p>
                                <p className="para my-3">We know you will receive excellent service from our resort partners, but
                                    you may not realize the behind-the-scenes services that make your trip possible. Our
                                    friendly, efficient hospitality staff members are easily accessible whenever you have a
                                    question and take pride in responding quickly to your needs.</p>
                                <p className="para my-3">We want to treat our valued team in the Philippines fairly, offering a
                                    competitive wage that makes a difference in their lives. Our Community Fee supports them and
                                    their families by rewarding their loyalty and unsurpassed customer service. Thank you for
                                    helping us maintain a strong TZORT community!</p>
                            </div>
                            <div>
                                <NavLink to="/community" className="custom_btn m-0 mt-4 mb-4 mb-lg-0">Meet the Team</NavLink>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6">
                            <div className="img_accomodation">
                                <img src={community8} className="img-fluid" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="vacation_deserve_section">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-9 m-auto">
                            <div className="main_heading text-center">
                                <h2 className="text-white">Your Luxury Vacation Is Our Priority</h2>
                                <p className="para mt-3 text-white">The dedicated TZORT team will take the hassle out of your next
                                    resort stay. Our committed staff members combined with five-star resort partners will
                                    provide an unforgettable experience. Start booking your next adventure today.</p>
                            </div>
                            <div>
                                <NavLink to="/index" className="custom_btn bg-white mt-5">Book a Vacation</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default CommunityFee
