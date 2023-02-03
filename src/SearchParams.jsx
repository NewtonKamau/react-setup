import { useState } from "react";

function SearchParams () {
    const [location,setLocation] = useState("")
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
          <button>Submit</button>
          </form>
    </div>
  )
}

export default SearchParams