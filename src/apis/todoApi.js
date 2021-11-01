import api from "./base";

const baseUrl = "/todos"

const getAll = () => (api.get(baseUrl))

const deleteById = id => {
    const url = baseUrl + "/" + id
    console.log(url);
    return api.delete(url)
}

export default {
    getAll, deleteById
}
  