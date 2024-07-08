
import { useState } from "react"
export const BreedsSelect = ({breeds}) => {
  const[img,setimg]=useState([]);
  const[url,seturl]=useState([]);
  const updateimg = ()=>{
    if(img){
      fetch(`https://dog.ceo/api/breed/${img}/images/random/3`)
      .then((response) => response.json())
      .then((data) => {
        seturl(data.message);
      })
      .catch((error) => {
        console.error("リクエストエラー:", error);
      });
  }}
      
  const handleSelectChange=(event)=>{
    setimg(event.target.value)
  }
  
  return(
  <>
      <select value={setimg} onChange={handleSelectChange}>
        {breeds.map((breed, index) => (
          <option key={index}>{breed}</option>
        ))}
      </select>
        <button onClick={updateimg}><label>表示</label></button>
      {url.map((urls,index)=>(
        <img key={index} src={urls}></img>
      ))
      }
  </>)
}

export default BreedsSelect
