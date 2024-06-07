import { useState } from "react";
import { ArrowPrev, ArrowNext } from "./arrow";

function Slideshow({mediaList}) {
    const [media, setMedia] = useState(0);
    const mediaCount = mediaList.length;

    return(
        <div className="slideshow">
            <ArrowPrev
                action={slidePrev}
            />
            <img src={ mediaList[media] } alt="Photographie du logement" className="slideshow-slide"/>
            <div className="slideshow-count">{media + 1}/{mediaCount}</div>
            <ArrowNext
                action={slideNext}
            />
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

export default Slideshow;
