import './PositionBox.css'

const PositionBox = ({ position }) => {

  return (

    <div className="position-box">

      <p>Current position: {position[0]}, {position[1]}</p>

    </div>

  )

}

export default PositionBox