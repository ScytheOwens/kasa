import React from "react";
import Banner from "../../components/Banner";
import bannerMedia from "../../assets/images/mountains.png";

function About() {
    return (
        <React.Fragment>
            <Banner
                mediaUrl={ bannerMedia }
                mediaDescription="Photographie de montagnes"
            />
        </React.Fragment>
    )
}

export default About;
