function Avatar({person}) {
    return(
        <div className="avatar">
            <p className="avatar-name">{person.name}</p>
            <img src={person.picture} alt={"Photographie de " + person.name} className="avatar-media"/>
        </div>
    )
}

export default Avatar;
