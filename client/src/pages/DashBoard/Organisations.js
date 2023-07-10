import React, { useEffect, useState } from 'react'
import Layout from '../../components/shared/Layout/Layout'
import moment from 'moment';
import API from '../../services/api';
import { useSelector } from 'react-redux';
import "../../index.css"
const Organisations = () => {
    // get current use
    const { user } = useSelector(state => state.auth);

    const [data, setData] = useState([]);
    // find Organisations records
    const getOrg = async () => {
        try {
            if (user?.role === "donar") {
                const { data } = await API.get("/inventory/get-organisations");
                console.log(data);
                if (data?.success) {
                    setData(data?.organisations);
                }
            }
            if (user?.role === "hospital") {
                const { data } = await API.get(
                    "/inventory/get-orgnaisation-for-hospital"
                );
                console.log(data);
                if (data?.success) {
                    setData(data?.organisations);
                }
            }
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        getOrg();
    }, [user]);

    return (
        <Layout >
            <h4
                className='ms-0'
                style={{ fontWeight: "bold", paddingLeft: "9px" }}
            >
                <i className='fa-sharp fa-solid fa-building-ngo text-success py-4'></i>
                Organisations
            </h4>
            <div style={{ marginLeft: "10px", marginRight: "40px" }}>
                <table class="table table-info table-striped tableClass">
                    <thead>
                        <tr class="table-warning" style={{ border: "1px solid gray" }}>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Website</th>
                            <th scope="col">Address</th>
                            <th scope="col">Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data?.map((record) => (
                            <tr key={record._id}>
                                <td>{record.organisationName}</td>
                                <td>{record.email}</td>
                                <td>{record.phone}</td>
                                <td>{record.website}</td>
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
        </Layout >
    )
}

export default Organisations;
