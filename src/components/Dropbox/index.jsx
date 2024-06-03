import React from "react";
import chevronIcon from "../../assets/icons/chevron-up.svg";

function Dropbox({ items }) {
    return(
        <ul className="dropbox">
            {items.map((item, title) =>
                <li className="dropbox-item" key={"dropbox-item-" + title}>
                    <input type="checkbox" id={"dropbox-item-" + item.title} className="dropbox-item-input"/>
                    <h2 className="dropbox-item-title">
                        <label htmlFor={"dropbox-item-" + item.title} className="dropbox-item-title-label">{ item.title }<img src={ chevronIcon } className="dropbox-item-title-label-icon"/></label>
                    </h2>
                    <p className="dropbox-item-content">{ item.content }</p>
                </li>
            )}
        </ul>
    )
}

export default Dropbox;
