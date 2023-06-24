import React from 'react'

function Creation() {
  return (
    <div>
      <label>Recipe title</label>
      <input type='text'></input>
      <br></br>
      <br></br>
        <br></br>
      <label>Description</label>
      <input type='text'></input>
      <br></br>
      <br></br>
        <br></br>
      <label>Ingredients</label>
      <input type='text'></input>
      <br></br>
      <br></br>
        <br></br>
      <label>Instrucation</label>
      <input type='text'></input>
        <br></br>
        <br></br>
        <button type='sumit' onClick={alert("submit")}> Submit </button>
    </div>
  )
}

export default Creation
