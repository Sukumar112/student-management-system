import axios from "axios";

// ✅ Use the live Render backend URL
const REST_API_URL = "https://student-management-system-x5co.onrender.com/api/departments";

export const listDepartments = () => axios.get(REST_API_URL);

export const createDepartment = (department) => axios.post(REST_API_URL, department);

export const getDepartmentById = (id) => axios.get(`${REST_API_URL}/${id}`);

export const updateDeparment = (id, department) => axios.put(`${REST_API_URL}/${id}`, department);

export const deleteDepartment = (id) => axios.delete(`${REST_API_URL}/${id}`);
