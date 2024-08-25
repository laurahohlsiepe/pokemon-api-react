"use client"

import React from "react";
import { useState } from "react";

const Pokemon = () => {
  const [num, setnum] = useState();
  return (
    <>
    <h1>You chose {num} value</h1>
     <select 
     name="" 
     id=""
     value={num}
     onChange={(event) => {
      setnum(event.target.value)
     }}>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
     </select>
    </>
  )
}

export default Pokemon