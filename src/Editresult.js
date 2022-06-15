import React, { useState, useEffect} from 'react'
import { doc, getDoc, updateDoc } from "firebase/firestore";
import db from './fire';

function Editresult() {
    const [fullname,setFullname]=useState('')
    const [science,setScience]=useState('')
    const [maths,setMaths]=useState('')
    const [hindi,setHindi]=useState('')
    const [sstd,setSstd]=useState('')
    const [maxmarks,setMaxmarks]=useState('')
    const [totalmarks,setTottalmarks]=useState('')
    const [percentage,setPercentage]=useState('')
    const [username,setUsername]=useState('')
    const [id,setId]=useState('')

    const showResult=()=>{
        window.location.href = '/showresult'
        console.log('you click the show result page');
    }
    const fName = (event) =>{
        console.log(event.target.value);
        let fullname=event.target.value
        let length =fullname.length
        if (length <= 15) {
            setFullname(fullname)
        }else if (length >15) {
            alert("Name length is Not more than 15 digits")
        }
    }
    const sciEnce = (event) =>{
        console.log(event.target.value);
        let mob=event.target.value
        let sci=mob+''
        let length=sci.length
        if (length <= 3) {
            setScience(sci)
        }else if (length >= 4) {
            alert('Science feild of 3 Digits')
        }
    }
    const matHs = (event) =>{
        console.log(event.target.value);
        let mob=event.target.value
        let mat=mob+''
        let length=mat.length
        if (length <= 3) {
            setMaths(mat)
        }else if (length >= 4) {
            alert('Maths feild of 3 Digits')
        }
    }
    const hinDi = (event) =>{
        console.log(event.target.value);
        let mob=event.target.value
        let hind=mob+''
        let length=hind.length
        if (length <= 3) {
            setHindi(hind)
        }else if (length >= 4) {
            alert('Hindi feild of 3 digits')
        }
    }
    const sStd = (event) =>{
        console.log(event.target.value);
        let mob=event.target.value
        let ssd=mob+''
        let length=ssd.length
        if (length <= 3) {
            setSstd(ssd)
        }else if (length >= 4) {
            alert('Sstd Number feild of 3 Digits')
        }  
    }
    const maxMark = (event) =>{
        console.log(event.target.value);
        let mob=event.target.value
        let mobstr=mob+''
        let length=mobstr.length
        if (length <= 3) {
            setMaxmarks(mobstr)
        }else if (length >= 4) {
            alert('Total mark  be of 3 Digits')
        }    
    }
    const totalMarks = (event) =>{
        console.log(event.target.value);
        let mob=event.target.value
        let mobstr=mob+''
        let length=mobstr.length
        if (length <= 3) {
            setTottalmarks(mobstr)
        }else if (length >= 4) {
            alert('Total mark  be of 3 Digits')
        }    
    }
    const perCentage = (event) =>{
        console.log(event.target.value);
        let mob=event.target.value
        let percent=mob+''
        let length=percent.length
        if (length <= 3) {
            setPercentage(percent)
        }else if (length >= 4) {
            alert('Percentage feild of 3 Digits')
        }//total
    }
    const submit= async ()=>{
        if (fullname === '') {
            alert('Name feild is empty')
        }else if (science === '') {
            alert('Science is not filled completely')
        }else if (maths === '') {
            alert('maths is not filled completely')
        }else if (hindi === '') {
            alert('hindi is not filled completely')
        }else if (sstd === '') {
            alert('Sstd is not filled completely')
        }else if (maxmarks === '') {
            alert('Max mark is not filled completely')
        }else if (totalmarks === '') {
            alert('Total mark is not filled completely')
        }else if (percentage === '') {
            alert('percentage is not filled completely')
        }
        if ((fullname.length > 0 && fullname.length < 16) 
            && (science.length > 0 && science.length < 4) 
            && (maths.length > 0 && maths.length < 4) 
            && (hindi.length > 0 && hindi.length < 4) 
            && (sstd.length > 0 && sstd.length < 4)
            && (maxmarks.length > 0 && maxmarks.length < 4)
            && (totalmarks.length > 0 && totalmarks.length < 4)
            && (percentage.length > 0 && percentage.length < 4) 
            ) {
            // reset()
        }
        let data = {fullname,science,maths,hindi,sstd,maxmarks,totalmarks,percentage}
        const complaintref = doc(db, 'result', id);
        await updateDoc(complaintref, data);
        alert('data updated')
        window.location.href = '/showresult'
    }
    const fetchData = async (id)=>{
        // fetch for input id
        const docRef = doc(db, "result", id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
            let data = docSnap.data()
            setFullname(data.fullname)
            setScience(data.science)
            setMaths(data.maths)
            setHindi(data.hindi)
            setSstd(data.sstd)
            setMaxmarks(data.maxmarks)
            setTottalmarks(data.totalmarks)
            setPercentage(data.percentage)
            // TODO set all other data fields
        } else {
            console.log("No such document!");
        }
    }

    useEffect(()=>{
        // read id from url
        const params = new URL(window.location.href).searchParams;
        const id = params.get('id');
        const name = params.get('maths');
        setUsername(name)
        setId(id)
        fetchData(id)
    }, [])
    return (
        <div>
            <div className='navbar'>
                <header className='header1'>
                    <h1>The Presidents School</h1>
                    <button className='buttonnav2' onClick={showResult}>View Result</button>
                </header>
            </div>
            <div className='container'>
                <header className='header'>
                    <h1>Edit Result Data of {username}</h1>
                </header>
                <label><b>Name</b></label>
                <input type='text' placeholder='Name' value={fullname} onChange={fName} />
                <label><b>Science</b></label>
                <input type='number'placeholder='Science' value={science} onChange={sciEnce} />
                <label><b>Maths</b></label>
                <input type='number'placeholder='Maths' value={maths} onChange={matHs}/>
                <label><b>Hindi</b></label>
                <input type='number'placeholder='Hindi' value={hindi} onChange={hinDi} />
                <label><b>S.Std</b></label>
                <input type='number' placeholder='S.Std' value={sstd} onChange={sStd} />
                <label><b>Max Mark</b></label>
                <input type='number'placeholder='Max Mark' value={maxmarks} onChange={maxMark} />
                <label><b>Total Mark</b></label>
                <input type='number'placeholder='Total Mark' value={totalmarks} onChange={totalMarks} />
                <label><b>Percentage</b></label>
                <input type='number' placeholder='Percentage'value={percentage} onChange={perCentage} />
                <button className='button1' onClick={submit}>Submit</button>
            </div>
        </div>
    )
}

export default Editresult