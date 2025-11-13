import { Button, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../../../api";

const FormCategoria = () => {
        const navigate = useNavigate();
        const { id } = useParams(); // captura o id para editar
    const [nomeCategoria, setNomeCategoria] = useState('');


    // Efeito para buscar dados se estiver em modo de edição
    useEffect(() => {
        if (id) {
            api.get(`categorias/${id}/`)
                .then(resposta => setNomeCategoria(resposta.data.nome));
        }
    }, [id]); // Re-executa se o ID mudar

    const CadCategoria = (evento) => {
        evento.preventDefault();
        // Lógica atualizxada PUT POST

        if(id){
            // modo edição
            
        api.put(`/categorias/${id}`, {
            id: nomeCategoria,
            nome: nomeCategoria,
            subcategorias: []
        })
            .then(() => {
                alert("Atualizado com Sucesso!");
                navigate('/admin'); // ATUALIZAÇÃO: Navega para /admin
            });
        }else{
            // Lógica para POST na API
        api.post(`/categorias`, {
            id: nomeCategoria, // (JSON-Server usa 'id', mas o ideal seria a API gerar o ID)
            nome: nomeCategoria,
            subcategorias: []
        })
            .then(() => {
                alert("Cadastro realizado com Sucesso!");
                navigate('/admin'); // ATUALIZAÇÃO: Navega para /admin
            });
        }
        
    }
    return ( 
        <main className="container flex flex--centro">
            <article className="cartao post">
                <h2 className="titulo-pagina">
                    {/* Título dinâmico */}
                    { id ? "Editar categoria" : "Cadastro de categoria"}
                </h2>
                <br />
                <form onSubmit={CadCategoria} >
                    <TextField
                        label="Categoria"
                        value={nomeCategoria}
                        variant="filled"
                        fullWidth
                        required
                        onChange={evento=> setNomeCategoria(evento.target.value)} // se naõ colar não cadastra
                    />
                    <br />
                    <Button
                        type="submit"
                        variant="contained"
                        sx={{ marginTop: 1 }}
                        fullWidth
                    >
                        { id ? "Salvar" : "Cadastrar"}
                    </Button>
                </form>
            </article>
        </main>
     );
}
 
export default FormCategoria;