import './PositionBox.css'

const PositionBox = ({ position }) => {

  return (

    <div className="position-box">

      <div className="latitude">

        <h4>Latitude: </h4>

        <span>{position[0]}</span>

      </div>

      <div className="longitude">

        <h4>Longitude: </h4>

        <span>{position[1]}</span>

      </div>

    </div>

  )

}

export default PositionBox