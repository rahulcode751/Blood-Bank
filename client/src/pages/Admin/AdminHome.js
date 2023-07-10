import React from 'react'
import Layout from '../../components/shared/Layout/Layout'
import { useSelector } from 'react-redux';

const AdminHome = () => {
    const { user } = useSelector((state) => state.auth);
    return (
        <Layout>
            <div className='container'>
                <div className='d-felx flex-column mt-4'>
                    <h1>
                        Welcome Admin <i className="text-success">{user?.name}</i>
                    </h1>
                    <h3>Manage Blood Bank App </h3>
                    <hr />
                    <p>
                        The blood bank  website project developed by Rahul Bairagi is built on the MERN stack, which stands for MongoDB, Express.js, React, and Node.js. This technology stack is widely used for building robust and scalable web applications.
                        <hr />
                        A blood bank website is an online platform that serves as a centralized resource for connecting blood donors with recipients in need. It is designed to facilitate the process of blood donation, streamline communication, and ensure efficient management of the blood supply. The website acts as a bridge between donors and healthcare institutions, providing valuable information, online registration, scheduling, and other essential features.
                        <hr />
                    </p>

                </div>
            </div>
        </Layout>
    )
}

export default AdminHome
