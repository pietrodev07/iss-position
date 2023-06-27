import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet"
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import icon from 'leaflet/dist/images/marker-icon.png';
import "leaflet/dist/leaflet.css"
import './Map.css';

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow
});

L.Marker.prototype.options.icon = DefaultIcon;

const Map = ({ position, setMap }) => {

  return (

    <div className="map">

      <MapContainer center={position} zoom={3} scrollWheelZoom={false} whenReady={setMap} >
        <TileLayer
          attribution='Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
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