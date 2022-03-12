import React, {useContext} from "react";
import {ContextoCategorias} from "../context/ContextoCategorias";
import ListadoItems from "./ListadoItems";

// Documentar
const VistaCategoria = () => {
    const { categoriaSeleccionada } = useContext(ContextoCategorias);
    if (!categoriaSeleccionada) return null;

    return (
        <div id="vistaCategoria">
            <h3 className="titulo">Categoria: {categoriaSeleccionada.name}</h3>
            <ListadoItems categoria={categoriaSeleccionada} />
        </div>
    )
};

export default VistaCategoria;
