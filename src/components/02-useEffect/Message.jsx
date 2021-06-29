import React, { useEffect, useState } from "react";

export const Message = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const { x, y } = coords;

  // Si no usamos la funcion de cleanup (lo que retorna el useEffect), podemos incurrir
  // en metodos, listeners o peticiones que se creen cada vez que el componente sea montado.
  // Dichos bloques de codigo repetidos estarian cumpliendo la misma funcion, por eso hay que
  // limpiarlos si ya no se van a utilizar cuando el componente se desmonte.
  useEffect(() => {
    console.log("Componente montado!");
    const mouseMove = (e) => {
      const coords = { x: e.x, y: e.y };
      setCoords(coords);
    };
    window.addEventListener("mousemove", mouseMove);

    return () => {
      console.log("Componente desmontado!");
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  return (
    <div>
      <h3>Eres genial!</h3>
      <p>
        X: {x} Y: {y}
      </p>
    </div>
  );
};
