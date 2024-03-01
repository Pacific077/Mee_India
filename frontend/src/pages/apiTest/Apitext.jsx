import axios from 'axios'
import React from 'react'

const Apitext = () => {
    const testLocation = async()=>{
const resp =await axios.get("http://api.openweathermap.org/geo/1.0/direct?q=mumbai,IN&limit=5&appid=ffcdd1abf435afb68672874babf1d07a")
console.log(resp)
    }
  return (
    <div>
        <button onClick={testLocation}>submit</button>
    </div>
  )
}

export default Apitext
// ffcdd1abf435afb68672874babf1d07a