import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function Card({slug, title, mediaUrl, mediaDescription, id}) {
    return (
        <Link to={ slug } className="card" key={ id }>
            <img src={ mediaUrl } alt={ mediaDescription } className="card-media"/>
            <h2 className="card-title">{ title }</h2>
        </Link>
    )
}

Card.Prototypes = {
    slug: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    mediaUrl: PropTypes.string.isRequired,
    mediaDescription: PropTypes.string.isRequired,
}

export default Card;
