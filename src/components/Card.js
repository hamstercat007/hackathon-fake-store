import "./card.css"


function Card({image,name,description,category,key}) {
    return(
     <div className="card" id={key}>
        <img className="card-image" src={image} alt={name}/>
        <h2 className="card-title">{name}</h2>
        <p className="card-description">{description}</p>
        <p className="card-category">{category}</p>
     </div>
    )
}

export default Card;