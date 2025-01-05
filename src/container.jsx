import { useState } from "react"
import SearchForm from "./searchform"
import Display from "./display"
import UpdateForm from "./updateForm"
function Container(){

  const [data,setData]=useState([])
  const initialData=data[0]

  const addData=(inComingData)=>{
    console.log(inComingData)
    setData([...data,...inComingData])
  }

  const updatedData=(inComingData)=>{
    const result= data.map((ele)=>{
      return inComingData.id===ele.id ? {...ele,...inComingData} : {...ele}
    })
    setData(result)
  }

  return(
    <div>
      <h1>Update User Profile</h1>
      <SearchForm addData={addData} />
      <Display data={data}/>
      {data.length > 0 && <UpdateForm initialData={initialData} updatedData={updatedData}/>}
      
    </div>
  )
}

export default Container