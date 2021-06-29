import React, { useState, useCallback, useEffect } from "react";
import { ShowIncrement } from "./ShowIncrement";

export const CallbackHook = () => {
  const [setCounter] = useState(10);
  // const increment = () => {
  //   setCounter(count + 1);
  // };

  // Los argumentos emitidos en cualquier lugar donde se use la funcion enviada con el hook
  // se reciben en la funcion original sin ningun codigo extra
  const increment = useCallback(
    (numero) => {
      setCounter((c) => c + numero);
    },
    [setCounter]
  );

  // Otro caso donde se aplica el useCallback es, por ejemplo, si tenemos un efecto cuya dependencia
  // sea una funcion que a su vez dependa de otros parametros.
  // Es util dado que, si la funcion se vuelve a generar, el efecto tambien.
  useEffect(() => {
    console.log("La funcion en las dependencias cambio!");
  }, [increment]);

  return (
    <main className="container">
      <h1>useCallback Hook</h1>
      <hr className="divider" />

      <ShowIncrement increment={increment} />
    </main>
  );
};
