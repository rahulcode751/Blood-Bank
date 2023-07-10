import React, { useEffect, useState } from 'react'
import Header from '../../components/shared/Layout/Header'
import '../../index.css'
import API from '../../services/api';
import moment from 'moment';
const Analytics = () => {
    const [data, setData] = useState([]);
    const [inventoryData, setInventoryData] = useState([]);
    const colors = [
        "#a2d2ff",
        "#ffafcc",
        "#ffe5d9",
        "#f8ad9d",
        "#fefae0",
        "#fcd5ce",
        "#edf6f9",
        "#ede0d4",
    ];

    // GET BLOOD GROUP DATA
    const getBloodGroupData = async () => {
        try {
            const { data } = await API.get("/analytics/bloodGroups-data");
            if (data?.success) {
                setData(data?.bloodGroupData);
                console.log(data);
            }
        } catch (error) {
            console.log(error);
        }
    };
    //get function
    const getBloodRecords = async () => {
        try {
            const { data } = await API.get("/inventory/get-recent-inventory");
            if (data?.success) {
                setInventoryData(data?.inventory);
                console.log(data);
            }
        } catch (error) {
            console.log(error);
        }
    };


    /// lifecyclemethod
    useEffect(() => {
        getBloodGroupData();
    }, []);
    useEffect(() => {
        getBloodRecords();
    }, []);
    return (
        <div>
            <>
                <Header />
                <h1 style={{ textAlign: "center", fontWeight: "bolder", fontFamily: "inherit" }}>Analytics page</h1>
                <div className='d-flex flex-row flex-wrap' style={{ marginLeft: "135px", padding: "10px" }}>
                    {data?.map((record, i) => (
                        <div className="card m-2 p-3 card-main" key={i} style={{ width: '18rem', backgroundColor: `${colors[i]}` }}>
                            {/*  <img src='./images/blood.jpg' className="card-img-top" alt="..." /> */}
                            <div className="card-body ">
                                <h2 className="card-title bg-light text-dark text-center mb-3">{record.bloodGroup}</h2>
                                <p className="card-text">
                                    Total In:<b>{record.totalIn}</b>
                                </p>
                                <p className="card-text">
                                    Total Out:<b>{record.totalOut}</b>
                                </p>
                                <div className="card-footer text-light bg-dark text-center">
                                    Total Available : <b>{record.availabeBlood}</b> (ML)
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div style={{ textAlign: "center", fontWeight: "bolder" }}>
                    <h1 className="my-3" style={{ textAlign: "center", fontWeight: "bolder", fontFamily: "inherit" }}>Recent Blood Transactions</h1>
                    <table class="table table-info table-striped tableClass table-class">
                        <thead>
                            <tr class="table-warning" style={{ border: "1px solid gray" }}>
                                <th scope="col">Blood Group</th>
                                <th scope="col">Inventory Type</th>
                                <th scope="col">Quantity</th>
                                <th scope="col">Donar Email</th>
                                <th scope="col">TIme & Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {inventoryData?.map((record) => (
                                <tr key={record._id}>
                                    <td>{record.bloodGroup}</td>
                                    <td>{record.inventoryType}</td>
                                    <td>{record.quantity} (ML)</td>
                                    <td>{record.email}</td>
                                    <td>{moment(record.createdAt).format("DD/MM/YYYY hh:mm A")}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </>

        </div >
    )
}


export default Analytics;
