import { useState, useEffect, useRef } from "react";

export const useFetch = (url) => {
  const isMounted = useRef(true);

  // Se usa este efecto para monitorear la referencia al componente en si, asi, cuando el componente se
  // desmonte, podemos tener un valor con el cual aplicar cierta logica.
  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  const [state, setState] = useState({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    setState({
      data: null,
      loading: true,
      error: null,
    });

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        // Si el setState se llama cuando el componente esta desmontado la app puede crashear, dado
        // que esto puede causar fugas de memoria entre otros errores.
        if (isMounted.current) {
          setState({ loading: false, error: null, data });
        }
      });
  }, [url]);

  return state;
};
