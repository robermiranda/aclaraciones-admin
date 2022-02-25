import {Link} from 'react-router-dom';


export default function NotFound () {
    return (
        <>
            <div>Página NO Encontrada.</div>
            <Link to="/admin">Regresar.</Link>
        </>
    )
}