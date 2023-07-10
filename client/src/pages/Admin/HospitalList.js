import React, { useEffect, useState } from 'react'
import Layout from '../../components/shared/Layout/Layout'
import API from '../../services/api';
import moment from 'moment';

const HospitalList = () => {
    const [data, setData] = useState([]);
    //find hospital records
    const getHospitals = async () => {
        try {
            const { data } = await API.get("/admin/hospital-list");
            // console.log(data);
            if (data?.success) {
                setData(data?.hospitalData);
            }
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        getHospitals();
    }, []);

    // DELET DONAR
    const handelDelete = async (id) => {
        try {
            let answer = window.prompt("Are you Sure you want to Delete this Hospital", "Sure");
            if (!answer) return;
            const { data } = await API.delete(`/admin/delete-donar/${id}`);
            alert(data?.success);
            window.location.reload();
        } catch (error) {
            console.log(error);
        }
    }

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
                            <th scope="col">Website</th>
                            <th scope="col">Date</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data?.map((record) => (
                            <tr key={record._id}>
                                <td>{record.hospitalName}</td>
                                <td>{record.email}</td>
                                <td>{record.phone}</td>
                                <td>{record.address}</td>
                                <td>{record.website}</td>
                                <td> {
                                    moment(record.createdAt).format("DD/MM/YYYY hh:mm:ss A")
                                }
                                </td>
                                <td> <button className='btn btn-danger' onClick={() => handelDelete(record._id)}>DELETE</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </Layout>
    )
}

export default HospitalList
