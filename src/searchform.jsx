 import { useState } from "react";
 import axios from "axios";
 import PropTypes from 'prop-types' 

 const SearchForm=(props)=>{
   console.log(props)
   const{addData} = props
    const [email,setEmail]=useState("")
    const [errors,setErrors]=useState({})
    const newErrors={}

    const handleChange=(e)=>{
        setEmail(e.target.value)
    }

    const runValidations=()=>{
      if(email.length===0){
         newErrors.search="email should be filled"
      }else{
         return null
      }
    }

     const handleSubmit=(e)=>{
      e.preventDefault()
      console.log(email)
      const validationResult = runValidations()
     
      
      if(validationResult){
         setErrors(newErrors)
      }else{
         console.log("its reached here")
         axios.get(`https://jsonplaceholder.typicode.com/users?email=${email}`)
            .then((res)=>{addData(res.data)
               setEmail("")
               setErrors({})
            })
            .catch((e)=>{console.log(e.message)
               newErrors.apimessage=e.message
            })
            
      }
 
     }

    return(
       <form onSubmit={handleSubmit}>

            <input type="text" placeholder="enter your email"  onChange={handleChange}  name={email} value={email}/><br/>
            {
               errors.search && <div><p>{errors.search}</p><br/></div>
            }
            {
               errors.apimessage && <b>{errors.apimessage}</b>
            }
            <input type="submit"/>
            
       </form>
    )
 }


 SearchForm.propTypes = {
   addData: PropTypes.func.isRequired
}

//  updatedData: PropTypes.func.isRequired
 export default SearchForm