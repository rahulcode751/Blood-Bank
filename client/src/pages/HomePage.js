import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Spinner from '../components/shared/Spinner';
import Layout from '../components/shared/Layout/Layout';
import Modal from '../components/shared/modal/Modal';
import API from '../services/api';
import moment from 'moment'
import '../index.css'


const HomePage = () => {
    const { loading, error, user } = useSelector((state) => state.auth);
    const [data, setData] = useState([]);

    const navigate = useNavigate();

    /// get function
    const getBloodRecords = async () => {
        try {
            const { data } = await API.get('/inventory/get-inventory');
            if (data?.success) {
                setData(data?.inventory);
                // console.log(data);
            }
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getBloodRecords();
    }, [])
    return (
        <Layout>
            {user?.role === "admin" && navigate('/admin')}
            {error && <span>{alert(error)}</span>}
            {loading ? (<Spinner />) : (
                <div style={{ marginLeft: "10px", marginRight: "40px" }}>
                    <h4
                        className='ms-0'
                        data-bs-toggle="modal"
                        data-bs-target="#staticBackdrop"
                        style={{ cursor: "pointer", fontWeight: "bold" }}
                    >
                        <i className='fa-solid fa-plus text-success py-4'></i>
                        Add Inventory
                    </h4>
                    <table class="table table-info table-striped tableClass">
                        <thead>
                            <tr class="table-warning" style={{ border: "1px solid gray" }}>
                                <th scope="col">Blood Group</th>
                                <th scope="col">Inventory Type</th>
                                <th scope="col">Quantity</th>
                                <th scope="col">Donar Email</th>
                                <th scope="col">Time & Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data?.map((record) => (
                                <tr key={record._id}>
                                    <td>{record.bloodGroup}</td>
                                    <td>{record.inventoryType}</td>
                                    <td>{record.quantity} (ML)</td>
                                    <td>{record.email}</td>
                                    <td> {
                                        moment(record.createdAt).format("DD/MM/YYYY hh:mm:ss A")
                                    }
                                    </td>
                                </tr>
                            ))}

                        </tbody>
                    </table>

                    <Modal />
                </div>
            )}
        </Layout>
    )
}

export default HomePage;
