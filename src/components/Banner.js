import { NavLink } from 'react-router-dom';
import './css/Banner.css';
// bannerHeading="" bannerBoldText="" bannerText=""
function Banner(props) {
    const isBannerButton = props.bannerButton;
    return (
        <>
            <section className={`bannerSection ${props.pageSectionClass}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-9 col-xl-6">
                            <div className="main_heading">
                                <h1 className="my-3">{`${props.bannerHeading.length > 0 ? props.bannerHeading : ""}`} </h1>
                                <p className="bold_para my-3">{`${props.bannerBoldText.length > 0 ? props.bannerBoldText : ""}`}</p>
                                <p className="para">{`${props.bannerText.length > 0 ? props.bannerText : ""}`}</p>
                            </div>
                            {
                                isBannerButton === "show" &&
                                <div>
                                    <NavLink to="/home" className="custom_btn m-0 mt-5">Book a Vacation</NavLink>
                                </div>
                            }

                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Banner;
