import React, { useState } from "react"
import { useSelector } from "react-redux/es/hooks/useSelector";
import InputType from "../Form/InputType";
import API from "../../../services/api";

const Modal = () => {
    const [inventoryType, setInventoryType] = useState("in");
    const [bloodGroup, setBloodGroup] = useState("");
    const [quantity, setQuantity] = useState(0);
    const [email, setEmail] = useState("");
    const { user } = useSelector((state) => state.auth);

    // Handle Modal data
    const handleModalSubmit = async () => {
        try {
            if (!bloodGroup || !quantity) {
                return alert("Please Provide All Fields");
            }
            const { data } = await API.post("/inventory/create-inventory", {
                email,
                organisation: user?._id,
                inventoryType,
                bloodGroup,
                quantity,
            })
            if (data?.success) {
                alert("New Record Created Successfully!")
                window.location.reload();
            }
        } catch (error) {
            alert(error.response.data.message);
            console.log(error);
            window.location.reload();
        }
    }
    var Email = "Hospital Email";
    if (inventoryType === 'in') {
        Email = "Donar Email"
    }
    return (
        <>
            {/* Modal */}
            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true" >
                <div className="modal-dialog" >
                    <div className="modal-content" style={{ backgroundColor: "rgb(153,186,221)", border: "2px solid black" }}>
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel" >Manage Blood Record</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className="modal-body">
                            <div className='d-flex' >

                                <p style={{ fontWeight: "bold" }}> Blood Type: &nbsp;</p>

                                <div className='form-check ms-3'>
                                    <input type='radio'
                                        name='inRadio'
                                        defaultChecked
                                        value={'in'}
                                        onChange={(e) => setInventoryType(e.target.value)}
                                        className='form-check-input' />
                                </div>
                                <label htmlFor="in" className="form-check-label">IN</label>

                                <div className='form-check ms-3'>
                                    <input type='radio'
                                        name='inRadio'
                                        value={'out'}
                                        onChange={(e) => setInventoryType(e.target.value)}
                                        className='form-check-input' />
                                </div>
                                <label htmlFor="out" className="form-check-label" >OUT</label>

                            </div>
                            <select class="form-select" style={{ border: "1px solid grey" }} aria-label="Default select example" onChange={(e) => { setBloodGroup(e.target.value) }}>
                                <option defaultValue={"Open this select menu"}>
                                    Open this select menu
                                </option>
                                <option value={"O+"}>O+</option>
                                <option value={"O-"}>O-</option>
                                <option value={"AB+"}>AB+</option>
                                <option value={"AB-"}>AB-</option>
                                <option value={"A+"}>A+</option>
                                <option value={"A-"}>A-</option>
                                <option value={"B+"}>B+</option>
                                <option value={"B-"}>B-</option>
                            </select>
                            <InputType
                                labelText={Email}
                                labelFor={"donarEmail"}
                                inputType={"email"}
                                placeholder={"user@example.com"}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <InputType
                                labelText={"Quanitity (ML)"}
                                labelFor={"quantity"}
                                inputType={"Number"}
                                value={quantity}
                                placeholder={"Enter Quantity"}
                                onChange={(e) => setQuantity(e.target.value)}
                            />
                        </div>


                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" onClick={handleModalSubmit}>Submit</button>
                        </div>



                    </div>
                </div>
            </div>
        </>
    )
}

export default Modal
