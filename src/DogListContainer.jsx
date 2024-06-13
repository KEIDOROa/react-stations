// @ts-check
import { App } from "./App"
import { useState } from 'react'
import { useEffect } from 'react';
export const DogListContainer = () => {
  const[breeds,setBreeds]=useState('https://images.dog.ceo/breeds/spaniel-brittany/n02101388_6057.jpg');
  useEffect(() => {
    console.log("再レンダリングされるたび実行");
  });
  return <></>
}

export default DogListContainer
