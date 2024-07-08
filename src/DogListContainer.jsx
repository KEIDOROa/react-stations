import { App } from "./App"
import { useState } from 'react'
import { useEffect } from 'react';
import BreedsSelect from './BreedsSelect'
export const DogListContainer = () => {
  const[breeds,setBreeds]=useState([]);
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
  return (
    <div>
      <h2>Dog Breeds</h2>
      <BreedsSelect breeds={breeds} />
    </div>
  )
}

export default DogListContainer
