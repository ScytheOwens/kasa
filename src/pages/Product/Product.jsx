import React from "react";
import { useParams, Navigate } from "react-router-dom";
import Error from "../../components/Error";
import Slideshow from "../../components/Slideshow";
import Avatar from "../../components/Avatar";
import Collapse from "../../components/Collapse";
import accomodations from "../../var/accomodations.json";
import greyStar from "../../assets/icons/star-grey.svg";
import pinkStar from "../../assets/icons/star-pink.svg";

function Product() {
    const { slug } = useParams();
    const product = accomodations.find(accomodation => accomodation.title == slug);

    if (product) {
        const items = [
            {
                "title": "Description",
                "content": product.description
            },
            {
                "title": "Equipments",
                "content": product.equipments
            }
        ]
    
        let rating = [];
        for (let i = 0; i < 5; i++) {
            if (i < product.rating) {
                rating.push(pinkStar)
            } else {
                rating.push(greyStar)
            }
        }

        return (
            <article className="presentation">
                <Slideshow
                    mediaList={product.pictures}
                />
                <section className="presentation-content">
                    <div className="presentation-content-left">
                        <h1 className="presentation-content-left-title">{product.title}</h1>
                        <p className="presentation-content-left-text">{product.location}</p>
                        <ul className="presentation-content-left-tags">
                            {product.tags.map((tag, index) =>
                                <li className="presentation-content-left-tags-tag" key={"tag-" + index}>{tag}</li>
                            )}
                        </ul>
                    </div>
                    <div className="presentation-content-right">
                        <Avatar
                            person={product.host}
                        />
                        <div className="presentation-content-right-rating">
                            {rating.map((star, index) => {
                                return(
                                    <img src={ star } key={"rating-" + index} alt="Icône d'étoile"/>
                                )
                            })}
                        </div>
                    </div>

                    <div className="presentation-content-collapse">
                        { items.map((item, title) => {
                            return(
                                <Collapse key={ title }
                                    item={ item }
                                />
                            )
                        })}
                    </div>
                </section>
            </article>
        )
    } else {
        return (
            <Navigate to="*"/>
        )
    }
}

export default Product;
