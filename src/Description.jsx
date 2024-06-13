// @ts-check
// @ts-ignore
import React from "react"
import DogImage from "./DogImage"

// @ts-ignore
export const Description = ({dogUrl,updateUrl }) => {
  return (
    <div className='dogs'>
    <p>犬の画像をランダムに表示するサイトです</p>
    <div className='test'>
      <DogImage imageUrl={dogUrl}/>
      <button onClick={updateUrl }>update</button>
    </div>
    </div>
    )
}

export default Description