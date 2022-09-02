import "./card.css"
import Like from "../Like/Like";


// add favourite component
// return checkbox/button has function switch favourite (true), heart shape become red , if false heart shape become grey.
// style checkbox/button to heart shape or other
// set checkbox default as false


function Card({image,name,description,category}) {
    return(
     <div className="card">
        <img className="card-image" src={image} alt={name}/>
        <h2 className="card-title">{name}</h2>
        <p className="card-description">{description}</p>
        <p className="card-category">{category}</p>
        <Like/>
     </div>
    )
}

export default Card;