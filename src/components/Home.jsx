import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import{Link} from 'react-router-dom'
import { toast } from 'react-toastify'
import'./css/Home.css'

const Home = () => {
    const contacts=useSelector(state=>state)
    const dispatch= useDispatch()
    const deleteContact=(id)=>{
        dispatch({type:"DELETE_CONTACT",payload:id})
        toast.success("user Successfully Deleted")
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12 my-5 text-left push-left">
                <Link to="/add" className="btn btn-outline-dark">
                    Add to Contact
                </Link>
                <div className="col-md-12 mx-auto">

                   <table className="table table-hover">
                       <thead className="bg-dark text-white text-center"></thead>
                       <tr>
                           <th scope='col'>#</th>
                           <th scope='col'>Name</th>
                           <th scope='col'>Email</th>
                           <th scope='col'>Number</th>
                           <th scope='col'>Actions</th>
                       </tr>
                       <tbody>
                          { contacts.map(
                               (contact,id)=> (
                                    <tr>
                                        <td>{id +1} </td>
                                        <td>{contact.name}</td>
                                        <td>{contact.email}</td>
                                        <td>{contact.number}</td>
                                        <td>
                                        <Link to={`/edit/${contact.id}`} className="btn btn-small btn-primary mr2">Edit</Link>
                                        <button type="button" onClick={()=>deleteContact(contact.id)} className="btn btn-small btn-danger" style={{marginLeft:'15px'}}>Delete</button>
                                        </td>
                                    </tr>
                               )
                           )
                        }
                       </tbody>
                   </table>
                </div>
                </div>
            </div>
            
        </div>
    )
}

export default Home
