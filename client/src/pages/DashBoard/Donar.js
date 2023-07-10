import React, { useEffect, useState } from 'react'
import Layout from '../../components/shared/Layout/Layout'
import API from '../../services/api';
import moment from 'moment';
import '../../index.css'
const Donar = () => {
    const [data, setData] = useState([]);
    //find donar records
    const getDonars = async () => {
        try {
            const { data } = await API.get("/inventory/get-donars");
            //   console.log(data);
            if (data?.success) {
                setData(data?.donars);
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getDonars();
    }, []);
    return (
        <Layout>
            <h4
                className='ms-0'
                style={{ fontWeight: "bold", paddingLeft: "9px" }}
            >
                <i class="fa-solid fa-hand-holding-medical text-success py-4"></i>
                Donars
            </h4>
            <div style={{ marginLeft: "10px", marginRight: "40px" }}>
                <table class="table table-info table-striped tableClass">
                    <thead>
                        <tr class="table-warning" style={{ border: "1px solid gray" }}>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Address</th>
                            <th scope="col">Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data?.map((record) => (
                            <tr key={record._id}>
                                <td>{record.name || record.organisationName + " (ORG)"}</td>
                                <td>{record.email}</td>
                                <td>{record.phone}</td>
                                <td>{record.address}</td>
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

export default Donar
