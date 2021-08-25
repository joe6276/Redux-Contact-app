import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link,useHistory,useParams } from 'react-router-dom'
import { toast } from 'react-toastify'

const EditContact = () => {
    const {id}=useParams()
    const contact = useSelector((state) => state)
    const dispatch= useDispatch()
    const history=useHistory()

    const[name,setName]=useState("");
    const[email,setEmail]=useState("");
    const[number,setNumber]=useState("");


    const currentuser=contact.find(contact=> contact.id===parseInt(id) && contact);

    useEffect(() => {
        setNumber(currentuser.number)
        setName(currentuser.name)
        setEmail(currentuser.email)
       
    }, [currentuser])
    const checkEmail=contact.find(contact=> contact.id !==parseInt(id) &&contact.email===email);
    const checkNumber=contact.find(contact=> contact.id !==parseInt(id) &&contact.number===number);
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
        id:parseInt(id),
        name,
        email,
        number
    }

    dispatch({type:"UPDATE_CONTACT" , payload:data})
    toast.success("Contact Updated Successfully!!")
    history.push("/")
    };
    return (
        <div>
            {currentuser? (
            <>
            <div className="container">
            <div className="row">
                <h1 className=" display-3 text-center">
                        Edit Contact </h1>

                <div className="col-md-6  shadow mx-auto p-5">

             <form onSubmit={handleSubmit}>
                 <div className="form-group m-3">
                    <input type="text" placeholder="Name"  value={name} onChange={(e)=>setName(e.target.value)}className="form-control" />
                 </div>

                 <div className="form-group  m-3">
                    <input type="email" placeholder="Email"value={email} onChange={(e)=>setEmail(e.target.value)} className="form-control" />
                 </div>

                 <div className="form-group  m-3">
                    <input type="number" placeholder="Phone Number"value={number} onChange={(e)=>setNumber(e.target.value)} className="form-control" />
                 </div>

                 <div className="form-group  m-3 p-4">
                    <input type="submit" value="Update Student"  className="btn btn-dark"/>

                    <Link to="/"  className="btn btn-danger mr-3" style={{marginLeft:'15px'}} >Cancel</Link>
                 </div>
                 
                 
                 
             </form>
               
                </div>
            
            </div>
        </div>

            </>
            
            ):(
                <h1 className=" display-3 text-center">
                        Try again !!! </h1>  
            )}
           
            
        </div>
    )
}

export default EditContact
