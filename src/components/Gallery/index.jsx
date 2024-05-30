import PropTypes from 'prop-types';

function Gallery({items}) {
    return (
        <ul className="gallery">
            { items.map(item =>
                <li className="gallery-item" key={ item.id }>
                    { item }
                </li>
            )}
        </ul>
    )
}

// Gallery.Prototypes = {
//     children: PropTypes.object.isRequired,
// }

export default Gallery;
