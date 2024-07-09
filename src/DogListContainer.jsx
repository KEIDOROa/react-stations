import { App } from "./App"
import { useState } from 'react'
import { useEffect } from 'react';
import BreedsSelect from './BreedsSelect'
export const DogListContainer = () => {
  const[breeds,setBreeds]=useState([]);
  const[url,seturl]=useState([]);
  const [img, setimg] = useState('hound');
  useEffect(() =>{
    fetch('https://dog.ceo/api/breeds/list/all')
      .then(response => response.json())
      .then(data => {
        const breedList = Object.keys(data.message); // 犬種リス
        setBreeds(breedList);
      })
      .catch(error => {
        console.error('Error fetching the breeds:', error);
      });
  },[])//初回レタリング時のみ
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
  
  return (
    <div>
      <h2>Dog Breeds</h2>
      <BreedsSelect breeds={breeds} handleSelectChange={handleSelectChange} />
      
      <button onClick={updateimg}>表示</button>
      {url.map((urls,index)=>(
        <img key={index} src={urls}></img>
      ))
      }
    </div>
  )
}

export default DogListContainer
