import { getService } from "./http.service";
import { ISS_POSITION_URL } from "./url";

const getPositionService = async () => {

  const result = await getService(ISS_POSITION_URL);

  const { latitude, longitude } = result.iss_position;

  const { timestamp } = result;

  return { latitude, longitude, timestamp };

}

export { getPositionService };