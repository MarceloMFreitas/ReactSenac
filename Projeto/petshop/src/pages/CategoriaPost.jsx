import { useParams } from "react-router-dom";
import ListaPost from "../components/ListaPost";

const CategoriaPosts = () =>{
    // captura o id que vem da rota pai 
    const { id } = useParams();
    return(
        
        <ListaPost url={`/posts?categoria=${id}`} />
    )
}
export default CategoriaPosts