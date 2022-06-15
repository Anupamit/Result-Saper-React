import React from 'react'
import { doc, deleteDoc } from "firebase/firestore";
import db from './fire';
import './Dbcard.css'

function Dbcard(props) {
    const deleteUsr=async(event, i, id)=>{
        await deleteDoc(doc(db, "result", id));
        props.fetchData1()
    }
    const editUser=async(event, i, detailData)=>{
        window.location.href = `editresult?id=${detailData.id}&name=${detailData.name}`
    }
    
    return (
        <div>
            {
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Delete</th>
                            <th>Edit </th>
                            <th>Name </th>
                            <th>Max Marks </th>
                            <th>Total Marks </th>
                            <th>Percentage</th>
                            <th>Science </th>
                            <th>Maths  </th>
                            <th>Hindi  </th>
                            <th>S.std</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.tabledb.map((detail, i)=>{
                            return(
                                <tr key={i}>
                                    <td><button className='btn1' onClick={(event)=>deleteUsr(event, i, detail.id)}>X</button></td>
                                    <td><button className='btn1' onClick={(event)=>editUser(event, i, detail)}>Edit</button></td>
                                    <td>{detail.fullname}</td>
                                    <td>{detail.maxmarks}</td>
                                    <td>{detail.totalmarks}</td>
                                    <td>{detail.percentage}</td>
                                    <td>{detail.science}</td>
                                    <td>{detail.maths}</td>
                                    <td>{detail.hindi}</td>
                                    <td>{detail.sstd}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            }
        </div>
    )
}

export default Dbcard