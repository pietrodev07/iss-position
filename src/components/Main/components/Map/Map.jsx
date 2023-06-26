import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import './Map.css';

const Map = ({ position, setMap }) => {

  return (

    <div className="map">

      <MapContainer center={position} zoom={3} scrollWheelZoom={false} whenReady={setMap} >
        <TileLayer
          attribution='Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
          url="http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
          Iss is here
          </Popup>
        </Marker>
      </MapContainer>

    </div>

  )

}

export default Map