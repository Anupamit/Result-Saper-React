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
    const maxmarks=()=>{
        if (props.tabledb) {
            const sumWithMaxmarks = props.tabledb.reduce((previousValue, currentValue) =>(previousValue + parseInt(currentValue.maxmarks)),0);
            return sumWithMaxmarks
        }
    }
    const totaltable=()=>{
        if (props.tabledb) {
            const sumWithTotalmarks = props.tabledb.reduce((previousValue, currentValue) =>(previousValue + parseInt(currentValue.totalmarks)),0);
            return sumWithTotalmarks
        }
    }
    const percentage=()=>{
        if (props.tabledb) {
            const sumWithTotalmarks = props.tabledb.reduce((previousValue, currentValue) =>(previousValue + parseInt(currentValue.percentage)),0);
            return sumWithTotalmarks
        }
    }
    const science=()=>{
        if (props.tabledb) {
            const sumWithSciencemarks = props.tabledb.reduce((previousValue, currentValue) =>(previousValue + parseInt(currentValue.science)),0);
            return sumWithSciencemarks
        }
    }
    const maths=()=>{
        if (props.tabledb) {
            const sumWithMathsmarks = props.tabledb.reduce((previousValue, currentValue) =>(previousValue + parseInt(currentValue.maths)),0);
            return sumWithMathsmarks
        }
    }
    const hindi=()=>{
        if (props.tabledb) {
            const sumWithHIndimarks = props.tabledb.reduce((previousValue, currentValue) =>(previousValue + parseInt(currentValue.hindi)),0);
            return sumWithHIndimarks
        }
    }
    const sstd=()=>{
        if (props.tabledb) {
            const sumWithSstdmarks = props.tabledb.reduce((previousValue, currentValue) =>(previousValue + parseInt(currentValue.sstd)),0);
            return sumWithSstdmarks
        }
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
                    <tfoot>
                            <tr>
                                <th className='footer' colSpan="3">Total:</th>
                                <td className='footer2'>{maxmarks()}</td>
                                <td className='footer2'>{totaltable()}</td>
                                <td className='footer2'>{percentage()}</td>
                                <td className='footer2'>{science()}</td>
                                <td className='footer2'>{maths()}</td>
                                <td className='footer2'>{hindi()}</td>
                                <td className='footer2'>{sstd()}</td>
                            </tr>
                    </tfoot>
                </table>
            }
        </div>
    )
}

export default Dbcard