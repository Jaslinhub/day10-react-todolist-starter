import axios from "axios";

const instance = axios.create({
    baseURL: 'https://68c78c8d5d8d9f514732228d.mockapi.io/api/',
});

export const getTodos = async () => {
    return await instance.get('/todos');
}

export const addTodo = async (todo) => {
    return await instance.post('/todos', todo);
}