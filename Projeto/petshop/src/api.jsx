import axios from 'axios';

// 1 - exportar a instancia da base
 export const api = axios.create({
    baseURL: 'http://localhost:5000'
 })

 // 2 - função de busca gerérica assíncrona
 // recebe a url(ex. /post ou /categorias) e um callback opcional para o recurso

 export const busca = async(url, setDado) => {
    // busca feita na instância da API
    const resposta = await api.get(url)


    // depois de construir atualizar o estado com os dados recebidos
    setDado(resposta.data)
 }
