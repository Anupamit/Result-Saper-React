import React, {useState, useEffect} from 'react'
import db from './fire';
import { collection, getDocs} from "firebase/firestore";
import Dbcard from './Dbcard';
import './Showresult.css'

function Showresult() {
    const [tablecont,setTablecont]=useState([])

    const goBack=()=>{
        window.location.href = '/'
        console.log('you click the home page');
    }
    const fetchData = async ()=>{
        console.log('heeeeee');
        let complaintsData = []
        const querySnapshot = await getDocs(collection(db, "result"));
        querySnapshot.forEach((doc) => {
        // console.log(doc.id, " => ", doc.data());
        let data = doc.data()
        data.id = doc.id
        complaintsData.push(data)
        })
        setTablecont(complaintsData)
    }
    useEffect(()=>{
        fetchData()
    }, [])
    return (
        <div>
            <div className='navbar'>
                <header className='header1'>
                    <h1>The Presidents School</h1>
                    <button className='buttonnav' onClick={goBack}>Go Back</button>
                </header>
            </div>
            <div>
                <h1 className='subheader'> See Firebase Database</h1>
            </div>
            <div>
                {<Dbcard tabledb={tablecont} custDelete={setTablecont} fetchData1={fetchData}/> }
            </div>
        </div>
    )
}

export default Showresult