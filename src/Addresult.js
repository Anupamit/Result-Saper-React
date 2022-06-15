import React, { useState, useEffect } from 'react'
import './Addresult.css'
import db from './fire';
import { collection, addDoc} from "firebase/firestore"; 

function Addresult() {
    const [fullname,setFullname]=useState('')
    const [science,setScience]=useState('')
    const [maths,setMaths]=useState('')
    const [hindi,setHindi]=useState('')
    const [sstd,setSstd]=useState('')
    const [maxmarks,setMaxmarks]=useState('200')
    const [totalmarks,setTottalmarks]=useState('')
    const [percentage,setPercentage]=useState('')
    const [userdetail,setUserdetail]=useState([])
    const [diss,setDiss]=useState(true)

    const viewComplaint=()=>{
        window.location.href = '/showresult'
        console.log('you click the show result page');
    }

    useEffect(()=>{
        setDiss(true)
        setTimeout(()=>{
            getTotalMarks()
            getPercentage()
            setDiss(false)
        }, 1000)
    }, [science, maths, hindi, sstd])
    
    const getTotalMarks = ()=>{
        let sc = parseInt(science) ? parseInt(science) :0
        let ma = parseInt(maths) ? parseInt(maths) :0
        let hi = parseInt(hindi) ? parseInt(hindi):0
        let ss = parseInt(sstd) ? parseInt(sstd) :0
        let tot = sc + ma + hi + ss 
        setTottalmarks(tot + '')
    }
    const getPercentage = ()=>{
        let tMark= parseInt(totalmarks) ? parseInt(totalmarks) :0
        let mMark= parseInt(maxmarks) ? parseInt(maxmarks) :0
        let result= (tMark/mMark)*100
        setPercentage(result + '')
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
            && (maxmarks.length > 0 && maxmarks.length < 4)
            && (totalmarks.length > 0 && totalmarks.length < 4)
            && (percentage.length > 0 && percentage.length < 4) 
            && (science.length > 0 && science.length < 4) 
            && (maths.length > 0 && maths.length < 4) 
            && (hindi.length > 0 && hindi.length < 4) 
            && (sstd.length > 0 && sstd.length < 4)
            ) {
            const print={fullname, maxmarks,totalmarks,percentage,science,maths,hindi,sstd}
            setUserdetail([...userdetail,print])
            console.log(userdetail);
            reset()
            
        try {
            const ref = collection(db, "result")
            const docRef = await addDoc(ref, print);
            console.log("Document written with ID: ", docRef.id);
            alert('Form Submitted')
        } catch (event) {
            console.error("Error adding document: ", event);
            // refund
        }
        }
    }
    const reset =()=>{
        setFullname('')
        setScience('')
        setMaths('')
        setHindi('')
        setSstd('')
        setMaxmarks('')
        setTottalmarks('')
        setPercentage('')
    }
    return (
        <div>
            <div className='navbar'>
                <header className='header1'>
                    <h1>The Presidents School</h1>
                    <button className='buttonnav' onClick={viewComplaint}>Show Result</button>
                </header>
            </div>
            <div className='container'>
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
                <input type='number'placeholder='Total Mark' value={totalmarks}  readOnly/>
                <label><b>Percentage</b></label>
                <input type='number' placeholder='Percentage'value={percentage} readOnly />
                <button className='button1' disabled={diss} onClick={submit}>Submit</button>
            </div>
        </div>
    )
}

export default Addresult