
import { useState } from "react"
export const BreedsSelect = ({breeds,handleSelectChange}) => {
  const[img,setimg]=useState([]);
  
  return(
  <>
      <select value={setimg} onChange={handleSelectChange}>
        {breeds.map((breed, index) => (
          <option key={index}>{breed}</option>
        ))}
      </select>
  </>)
}

export default BreedsSelect
