import Card from "./Card";
import "./ParentCard.css"

// We want the app to be a grid so it can be responsive.
// put display: grid in app.css, puts the app as a grid.

//Change the grid of the card container which is ParentCard

//Create a container around all of the cards, so this must be in the parent, and give it the display property of grid and set the rows, e.g. cards-container, so you can place it in columns and make it responsive - with media query of less than 768px etc.
//give the card a className so you can style it later. 

function ParentCard({ allData }) {
  console.log(allData[0]);
  return (
    <div className="cards-container">
        {allData.map((data) => (
          <Card
          
            key={data.id}
            image={data.image}
            name={data.title}
            description={data.description}
            category={data.category}
          />
        ))}
   
    </div>
  );
}

export default ParentCard;
