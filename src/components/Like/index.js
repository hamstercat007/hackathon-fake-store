import {useState} from "react"
// add favourite component
//state false = heart white, upon click state is true, and turns heart to red. 


// function Like() {
//   const [like, setLike] = useState(false)
//   const likeHeart = () => setLike((prevLike) => !prevLike)
//     return(
//      <div onClick={likeHeart}>
//       Like: {like? "❤️": "❤"}  
//      </div>
//     )
// }

function Like() {
  const [like, setLike] = useState(false)
    return(
     <div onClick={() => setLike((prevLike) => !prevLike)}>
      Like: {like? "❤️": "❤"}  
     </div>
    )
}

export default Like;

