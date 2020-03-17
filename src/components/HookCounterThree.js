import React ,{useState} from 'react'

function HookCounterThree(){
    const [name,setName]=useState({firstname:'',lastname:''})
    return (
        <form>
            <input type="text"
             value={name.firstname}
             onChange={e=>setName({firstname:e.target.value})}
            />
             <input type="text"
             value={name.lastname}
             onChange={e=>setName({lastname:e.target.value})}
            />
            <h2>your first name is-{name.firstname} </h2>
            <h2>your lastname is -{name.lastName}</h2>

 

        </form>  
    )
} 
export default HookCounterThree