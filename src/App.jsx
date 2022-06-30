import { Card, Input} from "antd"
// =>import "app.css"
import axios from "axios"
import { useEffect, useState } from "react"
function App() {
const[contry, setContry]= useState([])
const [contrymatch, setContrymatch]=useState([])
useEffect(()=>{
const load= async()=>{

  const res= await axios.get("http://localhost:8080/country");
  setContry(res.data)
}
load();
},[])
console.log(contry)
const searchCountry=(text)=>{
let matches=contry.filter((countri)=>{
const regex=new RegExp(`${text}`,"gi");
return countri.country.match(regex) 
})
setContrymatch(matches);
 }

  return (
    <div className="App">
     <h1 style={{textAlign:"center"}}>Search Bar</h1>
<Input style={{width: "400px",height:"100px"}}  placeholder="enter country" onChange={(e)=>searchCountry(e.target.value)}/>
{contrymatch && contrymatch.map((item,index)=>(

 <div key={index}>

  <Card style={{width:"50%"}} title={`country:${item.country}`}>
    </Card>

 </div>

))}

    </div>
  )
}

export default App
