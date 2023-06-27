import "./Person.css"

const Person = ({ name, agency }) => {

  return (

    <div className="item">

      <span>{name}</span>

      <span className="item-agency">{agency}</span>

    </div>

  )

}

export default Person