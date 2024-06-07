import React from "react";
import chevronIcon from "../../assets/icons/chevron-up.svg";
import PropTypes from "prop-types";

function Dropbox({ items }) {
    return(
        <ul className="dropbox">
            {items.map((item, title) =>
                <li className="dropbox-item" key={"dropbox-item-" + title}>
                    <input type="checkbox" id={"dropbox-item-" + item.title} className="dropbox-item-input"/>
                    <h2 className="dropbox-item-title">
                        <label htmlFor={"dropbox-item-" + item.title} className="dropbox-item-title-label">{ item.title }<img src={ chevronIcon } className="dropbox-item-title-label-icon"/></label>
                    </h2>
                    <p className="dropbox-item-content">
                        { Array.isArray(item.content) ?
                            <ul>
                                { item.content.map((paragraph, index) =>
                                    <li key={"paragraph-" + index}>{paragraph}</li>
                                )}
                            </ul>
                            : item.content
                        }
                    </p>
                </li>
            )}
        </ul>
    )
}

Dropbox.Prototypes = {
    items: PropTypes.array.isRequired
}

export default Dropbox;
