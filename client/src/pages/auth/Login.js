import React from 'react'
import Form from '../../components/shared/Form/Form';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import Spinner from '../../components/shared/Spinner';
// import { toast } from 'react-toastify';
import "../../index.css";
const Login = () => {
    const { loading, error } = useSelector(state => state.auth) // global state ko target krke usme se cheezo ko destructor krenge
    return (
        <>
            {error && <span>{alert(error)}</span>}
            {loading ? (
                <Spinner />
            ) : (
                <div className='row g-0' style={{ backgroundColor: "rgba(128, 128, 255, .5)" }}>
                    <div className='col-md-8 form-banner  bg-illustration'>
                        <img src="./assets/images/banner1.jpg" alt='loginImage' style={{ border: "2px solid black" }} />
                    </div >
                    <div className='col-md-4 form-container' >
                        <Form
                            formTitle={"Login Page"}
                            submitBtn={"Login"}
                            formType={"login"}
                        />
                    </div>
                </div >
            )}
        </>
    );
}

export default Login;