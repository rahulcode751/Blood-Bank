import React, { useEffect, useState } from 'react'
import Layout from '../../components/shared/Layout/Layout'
import moment from 'moment'
import API from '../../services/api';
import "../../index.css"
const Hospitals = () => {
    const [data, setData] = useState([]);
    // find hospitals records
    const getHospitals = async () => {
        try {
            const { data } = await API.get('/inventory/get-hospitals');
            // console.log(data);
            // setData(data);
            if (data?.success) {
                setData(data?.hospitals);
            }
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getHospitals();
    }, []);

    return (
        <Layout>
            <h4
                className='ms-0'

                style={{ fontWeight: "bold", paddingLeft: "9px" }}
            >
                <i className='fa-solid fa-hospital text-success py-4'></i>
                Hospitals
            </h4>
            <div style={{ marginLeft: "10px", marginRight: "40px" }}>
                <table class="table table-info table-striped tableClass">
                    <thead>
                        <tr class="table-warning" style={{ border: "1px solid gray" }}>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Address</th>
                            <th scope="col">website</th>
                            <th scope="col">Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data?.map((record) => (
                            <tr key={record._id}>
                                <td>{record.hospitalName || record.organisationName + " (ORG)"}</td>
                                <td>{record.email}</td>
                                <td>{record.phone}</td>
                                <td>{record.address}</td>
                                <td>{record.website}</td>
                                <td> {
                                    moment(record.createdAt).format("DD/MM/YYYY hh:mm:ss A")
                                }
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </Layout>
    )
}

export default Hospitals;
