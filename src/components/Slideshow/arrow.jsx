import chevron from "../../assets/icons/chevron-up.svg";

function ArrowPrev({action}) {
    return(
        <button className="slideshow-button slideshow-prev" onClick={action}><img src={ chevron } alt="Flèche précédente"/></button>
    )
}

function ArrowNext({action}) {
    return(
        <button className="slideshow-button slideshow-next" onClick={action}><img src={ chevron } alt="Flèche suivante"/></button>
    )
}

export {ArrowNext, ArrowPrev};
