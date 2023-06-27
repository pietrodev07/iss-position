import usePeopleService from '../../../../hooks/usePeopleService';
import Person from "../../../Person/Person";
import './Sidebar.css'

const Sidebar = () => {

  const { people } = usePeopleService();

  return (

    <aside className="sidebar">

      <h4>There are {people.number} people in the space e they are:</h4>

      <div className="people-container">

        {people.people && people.people.map((person, index) => {

          const { name, agency } = person;

          return <Person key={index} name={name} agency={agency} />

        })}

      </div>

    </aside>

  )

}

export default Sidebar