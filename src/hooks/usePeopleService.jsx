import { useEffect, useState } from "react";
import { getPeopleService } from "../services/iss.service";

const usePeopleService = () => {

  const [people, setPeople] = useState({});

  const getPeople = async () => {

    const { number, people } = await getPeopleService();

    setPeople({ number, people });

  }

  useEffect(() => {

    getPeople();

  }, []);

  return { people };

}

export default usePeopleService