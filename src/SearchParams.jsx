import { useState } from "react";
const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];
const breeds = [];
function SearchParams () {
    const [location, setLocation] = useState("")
    const [animal, setAnimal] = useState("");
    const [breed, setBreed] = useState("");
  return (
      <div className="search-params">
          <form action="">
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
    </div>
  )
}

export default SearchParams