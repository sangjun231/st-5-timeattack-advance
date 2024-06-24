import axios from "axios";

export const todoApi = axios.create({
  baseURL: "http://localhost:4000",
});

export const updateTodo = async (id, currentLiked) => {
  try {
    const response = await todoApi.patch(`/todos/${id}`, {
      liked: !currentLiked,
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
