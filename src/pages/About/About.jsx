import React from "react";
import Banner from "../../components/Banner";
import Collapse from "../../components/Collapse";
import bannerMedia from "../../assets/images/mountains.png";
import policy from "../../var/policy.json";

function About() {
    return (
        <React.Fragment>
            <Banner
                mediaUrl={ bannerMedia }
                mediaDescription="Photographie de montagnes"
            />

            <div className="about-content">
                { policy.map((item, title) => {
                    return(
                        <Collapse key={ title }
                            item={ item }
                        />
                    )
                })}
            </div>
            
        </React.Fragment>
    )
}

export default About;
