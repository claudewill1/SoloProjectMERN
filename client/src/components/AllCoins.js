import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";

const AllCoins = (props) => {
    const {coins,setCoins} = props;
    const navigate = useNavigate();
    const handleDelete = (delId) => {
        axios.delete(`http://localhost:8000:/api/authors/${delId}`)
            .then((res)=>{
                const filteredCoins = coins.filter((coin)=>{
                    return coin._id != delId;
                })

                setCoins(filteredCoins);
            })
            .catch((err)=>{
                console.log(err)
            })
    }

    return (
        <div>
            <h3>Here are the coins currently in the database for the Collection</h3>
            <table style={{width:"60%"}} className="table table-dark table-striped">
                <thead>
                    <th>Type</th>
                    <th>Denomination</th>
                    <th>Value</th>
                    <th>Actions</th>
                </thead>
                {coins.map((coin,i)=>{
                    return (
                        <tbody key={i}>
                            <td>{coin.type}</td>
                            <td>{coin.denomination}</td>
                            <td>{coin.value}</td>
                            <td>
                                <button className="btn btn-primary" onClick={(e)=>navigate(`/${coin._id}/edit`)}>Edit</button>
                                <button className="btn btn-success" onClick={(e)=>navigate(`/${coin._id}`)}>View</button>
                                <button className="btn btn-danger text-light" onClick={(e)=>handleDelete(coin._id)}>Delete</button>
                            </td>

                        </tbody>
                    )
                })

                }
            </table>
        </div>
    )
}

export default AllCoins;