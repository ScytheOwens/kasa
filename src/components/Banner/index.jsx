import PropTypes from 'prop-types';

function Banner({ title, mediaUrl, mediaDescription }) {
    return (
        <div className="banner">
            <img src={ mediaUrl } alt={ mediaDescription } className="banner-media"/>
            { title ? <h1 className="banner-title">{ title }</h1> : null }
        </div>
    )
}

Banner.prototypes = {
    title: PropTypes.string,
    mediaUrl: PropTypes.string.isRequired,
    mediaDescription: PropTypes.string.isRequired,
}

export default Banner
