import { getService } from "./http.service";
import { ISS_POSITION_URL, PEOPLE_SPACE_URL } from "./url";

const getPositionService = async () => {

  const result = await getService(ISS_POSITION_URL);

  const { latitude, longitude } = result.iss_position;

  const { timestamp } = result;

  return { latitude, longitude, timestamp };

}

const getPeopleService = async () => {

  const result = await getService(PEOPLE_SPACE_URL);

  const { number, people } = result;

  return { number, people };

}

export { getPositionService, getPeopleService };