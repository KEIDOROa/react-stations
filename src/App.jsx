// DO NOT DELETE

import './App.css'
import { useState } from 'react'
import Header from './Header';
import Description from './Description';

/**
 * @type {() => JSX.Element}
 */
export const App = () => {
  const[dogUrl,setDogUrl]=useState('https://images.dog.ceo/breeds/spaniel-brittany/n02101388_6057.jpg');
  function updateurl(){
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(data => {
      setDogUrl(data.message);
    })
    .catch(error => {
      console.error('リクエストエラー:', error);
    });
  }

  return (
    <div>
      <Header />
      <Description dogUrl={dogUrl} updateUrl={updateurl} />
    </div>
  )
}