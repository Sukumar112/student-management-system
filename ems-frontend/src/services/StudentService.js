import axios from "axios";

// ✅ Use the live Render backend URL
const REST_API_URL = "https://student-management-system-x5co.onrender.com/api/students";

export const listStudents = () => axios.get(REST_API_URL);

export const createStudent = (student) => axios.post(REST_API_URL, student);

export const deleteStudent = (id) => axios.delete(`${REST_API_URL}/${id}`);

export const getStudentById = (id) => axios.get(`${REST_API_URL}/${id}`);

export const updateStudent = (id, student) => axios.put(`${REST_API_URL}/${id}`, student);
