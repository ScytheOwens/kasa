import React, {useState} from "react";
import chevronIcon from "../../assets/icons/chevron-up.svg";
import PropTypes from "prop-types";

function Collapse({ item }) {
    const [open, setOpen] = useState(false);

    return(
        <section className={ open ? "collapse open" : "collapse" }>
            <h2 className="collapse-title" onClick={collapse}>{item.title}<img src={ chevronIcon } className="collapse-title-icon"/></h2>
            {Array.isArray(item.content) ?
                <ul className="collapse-content">
                    {item.content.map((element, index) =>
                        <li key={"element-" + index}>{element}</li> 
                    )}
                </ul> :
                <p className="collapse-content">{item.content}</p>
            }
        </section>
    )

    function collapse() {
        setOpen(!open)
    }
}

Collapse.Prototypes = {
    items: PropTypes.array.isRequired
}

export default Collapse;
