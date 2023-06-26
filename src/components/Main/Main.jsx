import usePositionService from '../../hooks/usePositionService';
import PositionBox from './components/PositionBox/PositionBox';
import Map from './components/Map/Map';
import './Main.css'

const Main = () => {

  const { position, setMap } = usePositionService();

  return (

    <>

      <PositionBox position={position} />

      <Map position={position} setMap={setMap} />

    </>

  )

}

export default Main