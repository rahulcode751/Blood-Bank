import React, { useEffect, useState } from 'react'
import Layout from '../../components/shared/Layout/Layout'
import moment from 'moment'
import { useSelector } from 'react-redux';
import API from '../../services/api';
import "../../index.css"
const Consumer = () => {
    const { user } = useSelector((state) => state.auth);
    const [data, setData] = useState([]);
    //find donar records
    const getDonars = async () => {
        try {
            const { data } = await API.post("/inventory/get-inventory-hospital", {
                filters: {
                    inventoryType: "out",
                    hospital: user?._id,
                },
            });
            if (data?.success) {
                setData(data?.inventory);
                console.log(data);
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
                <i class="fa-solid fa fa-users text-success py-4"></i>
                Consumer Page
            </h4>
            <div style={{ marginLeft: "10px", marginRight: "40px" }}>
                <table class="table table-info table-striped tableClass">
                    <thead>
                        <tr class="table-warning" style={{ border: "1px solid gray" }}>
                            <th scope="col">Blood Group</th>
                            <th scope="col">Inventory TYpe</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Email</th>
                            <th scope="col">Webiste</th>
                            <th scope="col">Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data?.map((record) => (
                            <tr key={record._id}>
                                <td>{record.bloodGroup}</td>
                                <td>{record.inventoryType}</td>
                                <td>{record.quantity}</td>
                                <td>{record.email}</td>
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

export default Consumer
