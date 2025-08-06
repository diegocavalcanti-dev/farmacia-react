/* eslint-disable @typescript-eslint/no-unsafe-function-type */
import axios from "axios";

const api = axios.create({
  baseURL: "https://farmacianest.onrender.com/"
});

    //GetAll
export const buscar = async (url: string, setDados: Function) => {
    const resposta = await api.get(url)
    setDados(resposta.data)
}
    
    //Post
export const cadastrar = async (url: string, dados: object, setDados: Function) => {
    const resposta = await api.post(url, dados)
    setDados(resposta.data)
}

    //Put
export const atualizar = async (url: string, dados: object, setDados: Function) => {
    const resposta = await api.put(url, dados)
    setDados(resposta.data)
}

    //Delete
export const deletar = async (url: string) => {
    await api.delete(url)
}