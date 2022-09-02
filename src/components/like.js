import "./like.css"
// add favourite component
// return checkbox/button has function switch favourite (true), heart shape become red , if false heart shape become grey.
// style checkbox/button to heart shape or other
// set checkbox default as false


function Like() {
    return(
     <div>
        <label className="like-it">
        <input type="checkbox" />
        ❤
      </label>
     </div>
    )
}

export default Like;

