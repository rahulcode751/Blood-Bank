import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../../services/api";
// import { toast } from "react-toastify";

/// LOGIN ACTION
export const userLogin = createAsyncThunk('auth/login',
    async ({ email, password, role }, { rejectWithValue }) => {
        try {
            const { data } = await API.post('/auth/login', { email, password, role })
            // store token
            if (data.success) {
                localStorage.setItem('token', data.token);
                // toast.success(data.message);
                alert(data.message);
                if (role === "donar" || role === "hospital") {
                    window.location.replace("/organisation");
                } else if (role === "admin") {
                    window.location.replace("/admin");
                }
                else {
                    window.location.replace("/");
                }
            }
            return data;
        } catch (error) {
            console.log(error);
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message);
            } else {
                return rejectWithValue(error.message);
            }
        }
    }
)

/// REGISTER ACTION
export const userRegister = createAsyncThunk(
    'auth/register',
    async ({ name,
        role,
        email,
        password,
        organisationName,
        hospitalName,
        address,
        phone,
        website }, { rejectWithValue }) => {
        try {
            const { data } = await API.post('/auth/register', {
                name,
                role,
                email,
                password,
                organisationName,
                hospitalName,
                address,
                phone,
                website
            })
            if (data.success) {
                alert("User Registerd Successfully");
                window.location.replace("/login");
                // toast.success(data.message);
                // window.location.replace("/login");
            }
        } catch (error) {
            console.log(error);
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message);
            } else {
                return rejectWithValue(error.message);
            }
        }
    }
)

/// CURRENT USER
export const getCurrentUser = createAsyncThunk(
    'auth/getCurrentUser',
    async ({ rejectWithValue }) => {
        try {
            const res = await API.get('/auth/current-user');
            if (res?.data) {
                return res?.data;
            }
        } catch (error) {
            console.log(error);
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message);
            } else {
                return rejectWithValue(error.message);
            }
        }
    }
)

