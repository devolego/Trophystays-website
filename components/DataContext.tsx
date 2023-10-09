import React from 'react';

export const DataContext = React.createContext(null);

export const DataProvider = ({ children }) => {
  const [data, setData] = React.useState(null);

  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
};

