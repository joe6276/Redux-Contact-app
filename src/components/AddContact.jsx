import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';


const AddContact = () => {

    const contact = useSelector((state) => state)
    const dispatch= useDispatch()
    const history=useHistory()
    console.log(contact);
    const[name,setName]=useState("");
    const[email,setEmail]=useState("");
    const[number,setNumber]=useState("");

    const checkEmail=contact.find(contact=> contact.email===email && contact);
    const checkNumber=contact.find(contact=> contact.number===number && contact);
    
  
   

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(!name || !email || !number){
            return toast.warning('Please Fill in all Fields..')
        }
        
    if(checkEmail){
        return toast.error("Email already Exists!!!")
    }
    if(checkNumber){
        return toast.error("Number already Exists!!!")
    }
    const data={
        id:contact[contact.length-1].id ,
        name,
        email,
        number
    }

    dispatch({type:"ADD_CONTACT" , payload:data})
    toast.success("Contact Added Successfully!!")
    history.push("/")
    };
   


    return (
        <div>
            <div className="container">
            <div className="row">
                <h1 className=" display-3 text-center">
                        Add to Contact</h1>

                <div className="col-md-6  shadow mx-auto p-5">

             <form onSubmit={handleSubmit}>
                 <div className="form-group m-3">
                    <input type="text" placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)} className="form-control" />
                 </div>

                 <div className="form-group  m-3">
                    <input type="email" placeholder="Email"  value={email} onChange={(e)=>setEmail(e.target.value)}  className="form-control" />
                 </div>

                 <div className="form-group  m-3">
                    <input type="number" placeholder="Phone Number" value={number} onChange={(e)=>setNumber(e.target.value)} className="form-control" />
                 </div>

                 <div className="form-group  m-3 p-4">
                    <input type="submit"  placeholder="Add Contact"  className="btn btn-block btn-dark"/>
                 </div>
             </form>
               
                </div>
            
            </div>
        </div>
        </div>
    )
}

export default AddContact
