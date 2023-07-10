import React, { useState } from 'react'
import { Link } from "react-router-dom";
import InputType from './InputType';
import { handleLogin, handleRegister } from '../../../services/authService';

const Form = ({ formType, submitBtn, formTitle }) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("donar");
    const [name, setName] = useState("");
    const [organisationName, setOrganisationName] = useState("");
    const [hospitalName, setHospitalName] = useState("");
    const [website, setWebsite] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");

    return (
        <div>
            <form
                onSubmit={(e) => {
                    if (formType === 'login') {
                        return handleLogin(
                            e,
                            email,
                            password,
                            role
                        )
                    }
                    if (formType === 'register') {
                        return handleRegister(
                            e,
                            name,
                            role,
                            email,
                            password,
                            organisationName,
                            hospitalName,
                            address,
                            phone,
                            website
                        )
                    }
                }}
            >
                <h1 className='text-center' >{formTitle}</h1>
                <hr />
                <div className="d-flex mb-3">
                    <div className="form-check">
                        <input
                            // class="form-check-input"
                            // type="checkbox"
                            // role="switch"

                            // id="flexSwitchCheckDefault"

                            type="radio"
                            className="form-check-input"
                            name="role"
                            id="donarRadio"
                            value={"donar"}
                            onChange={(e) => setRole(e.target.value)}
                            defaultChecked
                        />
                        <label htmlFor="donarRadio" className="form-check-label"
                        >
                            Donar
                        </label>

                    </div>
                    <div className="form-check ms-2">
                        <input
                            type="radio"
                            className="form-check-input"
                            name="role"
                            id="adminRadio"
                            value={"admin"}
                            onChange={(e) => setRole(e.target.value)}
                        />
                        <label htmlFor="adminRadio" className="form-check-label">
                            Admin
                        </label>
                    </div>
                    <div className="form-check ms-2">
                        <input
                            type="radio"
                            className="form-check-input"
                            name="role"
                            id="hospitalRadio"
                            value={"hospital"}
                            onChange={(e) => setRole(e.target.value)}
                        />
                        <label htmlFor="hospitalRadio" className="form-check-label">
                            Hospital
                        </label>
                    </div>
                    <div className="form-check ms-2">
                        <input
                            type="radio"
                            className="form-check-input"
                            name="role"
                            id="organisationRadio"
                            value={"organisation"}
                            onChange={(e) => setRole(e.target.value)}
                        />
                        <label htmlFor="organisationRadio" className="form-check-label">
                            Organisation
                        </label>
                    </div>
                </div>
                {/* switch statement */}
                {
                    (() => {
                        //eslint-disable-next-line
                        switch (true) {
                            case formType === "login": {
                                return (
                                    <>
                                        <InputType
                                            labelText={"Email"}
                                            labelFor={"forEmail"}
                                            inputType={"email"}
                                            name={"email"}
                                            placeholder={"user@example.com"}
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                        <InputType
                                            labelText={"Password"}
                                            labelFor={"forPassword"}
                                            inputType={"password"}
                                            name={"password"}
                                            placeholder={"********"}
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                    </>
                                );
                            }
                            case formType === "register": {
                                return (
                                    <>
                                        {(role === "admin" || role === "donar") && (
                                            <InputType
                                                labelText={"Name"}
                                                labelFor={"forName"}
                                                inputType={"text"}
                                                name={"name"}
                                                placeholder={`${role} name`}
                                                value={name}
                                                onChange={(e) => setName(e.target.value)}
                                            />
                                        )}
                                        {role === "organisation" && (
                                            <InputType
                                                labelText={"Organisation Name"}
                                                labelFor={"fororganisationName"}
                                                inputType={"text"}
                                                name={"organisationName"}
                                                placeholder={"Organisation Name"}
                                                value={organisationName}
                                                onChange={(e) => setOrganisationName(e.target.value)}
                                            />
                                        )}
                                        {role === "hospital" && (
                                            <InputType
                                                labelText={"Hospital Name"}
                                                labelFor={"forHospitalName"}
                                                inputType={"text"}
                                                name={"hospitalName"}
                                                placeholder={"Hospital Name"}
                                                value={hospitalName}
                                                onChange={(e) => setHospitalName(e.target.value)}
                                            />
                                        )}

                                        <InputType
                                            labelText={"Email"}
                                            labelFor={"forEmail"}
                                            inputType={"email"}
                                            name={"email"}
                                            placeholder={"Email"}
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                        <InputType
                                            labelText={"Password"}
                                            labelFor={"forPassword"}
                                            inputType={"password"}
                                            name={"password"}
                                            placeholder={"*********"}
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                        <InputType
                                            labelText={"website"}
                                            labelFor={"forWebsite"}
                                            inputType={"text"}
                                            name={"website"}
                                            placeholder={"www.website.com (optional)"}
                                            value={website}
                                            onChange={(e) => setWebsite(e.target.value)}
                                        />
                                        <InputType
                                            labelText={"Address"}
                                            labelFor={"forAddress"}
                                            inputType={"text"}
                                            name={"address"}
                                            placeholder={"Address"}
                                            value={address}
                                            onChange={(e) => setAddress(e.target.value)}
                                        />
                                        <InputType
                                            labelText={"Phone"}
                                            labelFor={"forPhone"}
                                            inputType={"text"}
                                            name={"phone"}
                                            placeholder={"+91 **********"}
                                            value={phone}
                                            onChange={(e) => setPhone(e.target.value)}
                                        />
                                    </>
                                );
                            }
                        }
                    })()
                }
                <div className="d-flex flex-row justify-content-between">
                    {formType === "login" ? (
                        <p>
                            Not registerd yet ? Register
                            <Link to="/register"> Here !</Link>
                        </p>
                    ) : (
                        <p>
                            Already registered please
                            <Link to="/login"> Login !</Link>
                        </p>
                    )}
                    <button className="btn btn-primary button-29" role="button" type="submit">
                        {submitBtn}
                    </button>
                </div>
            </form >
        </div >
    )
}

export default Form
