import usePositionService from '../../hooks/usePositionService';
import PositionBox from './components/PositionBox/PositionBox';
import './Main.css'

const Main = () => {

  const { position } = usePositionService();

  return (

    <>

      <PositionBox position={position} />

    </>

  )

}

export default Main