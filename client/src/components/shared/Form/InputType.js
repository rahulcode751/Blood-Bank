import React from "react";

const InputType = ({
    labelText,
    labelFor,
    inputType,
    value,
    onChange,
    name,
    placeholder
}) => {
    return (
        <>
            <div className="mb-1">
                <label htmlFor={labelFor} className="form-label" style={{ fontWeight: "bold" }}>
                    {labelText}
                </label>
                <input
                    type={inputType}
                    className="form-control"
                    style={{ backgroundColor: "aliceblue", border: "1px solid grey", }}
                    placeholder={placeholder}
                    name={name}
                    value={value}
                    onChange={onChange}

                />
            </div>
        </>
    );
};

export default InputType;