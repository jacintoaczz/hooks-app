import React from "react";

// La manera en que funciona React es, cada vez que cambia el estado, se revisan los cambios
// y los componentes vuelven a renderizarse, o al menos las partes que cambiaron.
// En este caso, como la prop 'value' viene del state, cada vez que cambie este componente se va
// a volver a llamar (o renderizar).
// Ahora, cuando el state 'show', cambia, tambien vuelve a renderizar el componente Small, sin importar
// si el state no esta relacionado con el directamente.
// Si tuviesemos una peticion a una API en este componente, esta
// se repetiria cada vez, pero, podemos notar que no es necesario que lo haga.
// Para evitar que esto pase, podemos usar el metodo memo().
// Lo que hace el metodo memo() es evitar que el componente se renderice nuevamente si sus props
// no han cambiado.

export const Small = React.memo(({ value }) => {
  console.log("Me volvi a llamar :c ");
  return <small>{value}</small>;
});
