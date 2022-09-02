
function Card({image,name,description,category,key}) {
    return(
     <div id={key}>
        <img src={image} alt={name}/>
        <h2>{name}</h2>
        <p>{description}</p>
        <p>{category}</p>
     </div>
    )
}

export default Card;