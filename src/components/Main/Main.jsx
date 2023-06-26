import usePositionService from '../../hooks/usePositionService';
import TimestampBox from './components/TimestampBox/TimestampBox';
import PositionBox from './components/PositionBox/PositionBox';
import Sidebar from './components/Sidebar/Sidebar';
import Map from './components/Map/Map';
import './Main.css'


const Main = () => {

  const { position, setMap, timestamp } = usePositionService();

  return (

    <>

      <PositionBox position={position} />

      <Map position={position} setMap={setMap} />

      <TimestampBox timestamp={timestamp} />

      <Sidebar />

    </>

  )

}

export default Main