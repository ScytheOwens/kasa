import React from "react";
import Banner from "../../components/Banner";
import Dropbox from "../../components/Dropbox";
import bannerMedia from "../../assets/images/mountains.png";
import policy from "../../var/policy.json";

function About() {
    return (
        <React.Fragment>
            <Banner
                mediaUrl={ bannerMedia }
                mediaDescription="Photographie de montagnes"
            />

            <Dropbox
                items={ policy }
            />
        </React.Fragment>
    )
}

export default About;
