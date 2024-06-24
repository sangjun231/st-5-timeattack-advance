import axios from "axios";

export const todoApi = axios.create({
  baseURL: "http://localhost:4000",
});

export const fetchData = async () => {
  try {
    const response = await todoApi.get("/todos");
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const addData = async (newData) => {
  try {
    const response = await todoApi.post("/todos", newData);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getTodo = async (id) => {
  try {
    const response = await todoApi.get(`/todos/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
