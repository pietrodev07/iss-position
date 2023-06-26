import { useEffect, useState } from "react";
import { getPositionService } from "../services/iss.service";

const usePositionService = () => {

  const [position, setPosition] = useState([0, 0]);
  const [map, setMap] = useState(null);
  const [timestamp, setTimestamp] = useState(0);

  const getPositon = async () => {

    const { latitude, longitude, timestamp } = await getPositionService();

    if (map) {
      map.target.flyTo([latitude, longitude]);
    }

    setPosition([latitude, longitude]);
    setTimestamp(timestamp);

  }

  useEffect(() => {

    const interval = setInterval(() => {

      getPositon();

    }, 4000);

    return () => clearInterval(interval);

  }, [map, position]);

  return { position, setMap, timestamp };

}

export default usePositionService