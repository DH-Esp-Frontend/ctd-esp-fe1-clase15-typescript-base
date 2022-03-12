import React, { useReducer } from "react";

// Debemos tipar nuestro estado inicial.
const initialState = {
    categoriaSeleccionada: null,
    seleccionarCategoria: (categoria) => {}
};

const reducer = (state, action) => {
    // Implementar el reducer
};

export const ContextoCategorias = React.createContext();

const ProviderCategorias = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    // Debemos tipar la siguiente funcion que carga las categorias
    const seleccionarCategoria = (categoria) => {
        dispatch({
            type: 'SELECCIONAR_CATEGORIA',
            payload: {
                categoria
            },
        });
    };

    return (
        <ContextoCategorias.Provider
            value={{
                categoriaSeleccionada: state.categoriaSeleccionada,
                seleccionarCategoria,
            }}
        >
            {children}
        </ContextoCategorias.Provider>
    );
};

export default ProviderCategorias;