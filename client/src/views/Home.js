import React, { useEffect,useState } from "react";
import {Link} from 'react-router-dom';
import axios from "axios";
import AllCoins from '../components/AllCoins';

const Home = () => {
    const [coins, setCoins] = useState([]);

    useEffect(()=>{
        axios.get('http://localhost:8000/api/coins')
            .then((res)=>{
                setCoins(res.data);
            })
            .catch((err)=>{
                console.log(err);
            })
    },[]);
    const allCoinsSorted = [...coins].sort((a,b)=>a.gradingService<b.gradingService?-1:1);

    return (
        <div style={{marginLeft:'25%'}} className="container d-flex justify-content-center align-content-center w-75">
            <Link to={'/create'}>Add a coin to collection</Link>
            <AllCoins coins={allCoinsSorted} setCoins={setCoins/}>
        </div>
    )
}