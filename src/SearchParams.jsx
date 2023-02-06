import { useState ,useEffect} from "react";
import Pet from "./Pet";
const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];
const breeds = [];
function SearchParams () {
    const [location, setLocation] = useState("");
    const [animal, setAnimal] = useState("");
    const [pets, setPets] = useState([]);
    const [breed, setBreed] = useState("");

    useEffect(() => {
        requestPets();
       
    },[]); // eslint-disable-line react-hooks/exhaustive-deps

   const  requestPets = async() => {
        const res = await fetch(`http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`)
        const json = await res.json();
        setPets(json.pets)
    }
  return (
      <div className="search-params">
          <form onSubmit={ (e) => {
              e.preventDefault();
              requestPets();
          } }>
              <label htmlFor="location">Location</label>
              <input
                  id="location"
                  type="text"
                  onChange={(e)=> setLocation(e.target.value)}
                  value={ location }
                  placeholder=" location"
              />
              <label htmlFor="breed">breed</label>
              <select
                name="breed"
                  id="breed"
                  disabled={breeds.length === 0}
                  value={ breed }
                  onChange={ (e) => { setBreed(e.target.value); } }
              >
                  <option />
                  {breeds.map((breed) => (
                      <option key={breed}> {breed} </option>
                  ))}
              </select>
              <label htmlFor="animal">Animal</label>
              <select
                name="animal"
                  id="animal"
                  value={ animal }
                  onChange={ (e) => { setAnimal(e.target.value); setBreed("") } }
              >
                  <option />
                  {ANIMALS.map((animal) => (
                      <option key={animal}> {animal} </option>
                  ))}
              </select>
          <button>Submit</button>
          </form>
          { pets.map(pet => (
              
              <Pet
                  name={ pet.name }
                  animal={ pet.animal }
                  breed={ pet.breed }
                  key={ pet.id } />
          ))}
    </div>
  )
}

export default SearchParams