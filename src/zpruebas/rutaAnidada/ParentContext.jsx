import React, {createContext, useState} from 'react'

export const UserContext = createContext();


export function HistoriaClinicaContext({children}) {
  const [cliente, setCliente] = useState(4);

  return (
    <UserContext.Provider
      value={{
        cliente, 
        setCliente
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

