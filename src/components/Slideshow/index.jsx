import PropTypes from "prop-types";
import { useState } from "react";
import { ArrowPrev, ArrowNext } from "./arrow";

function Slideshow({mediaList}) {
    const [media, setMedia] = useState(0);
    const mediaCount = mediaList.length;

    return(
        <div className="slideshow">
            { mediaCount > 1 ? <ArrowPrev action={slidePrev}/> : null }
            <img src={ mediaList[media] } alt="Photographie du logement" className="slideshow-slide"/>
            { mediaCount > 1 ? <div className="slideshow-count">{media + 1}/{mediaCount}</div> : null }
            { mediaCount > 1 ? <ArrowNext action={slideNext}/> : null }
        </div>
    )

    function slidePrev() {
        if (media == 0) {
            setMedia(mediaCount - 1);
        } else {
            setMedia(media - 1);
        }
    }
    
    function slideNext() {
        if (media == (mediaCount - 1)) {
            setMedia(0);
        } else {
            setMedia(media + 1);
        }
    }
}

Slideshow.ProtoTypes = {
    mediaList: PropTypes.array.isRequired
}

export default Slideshow;
