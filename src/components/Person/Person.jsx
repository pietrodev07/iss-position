import "./Person.css"

const Person = ({ name, craft }) => {

  return (

    <div className="item">

      <span>{name}</span>

      <span className="item-craft">{craft}</span>

    </div>

  )

}

export default Person