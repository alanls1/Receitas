import React, { createContext, useState } from "react";

interface MyContextType {
  handleValueInput: (e: string) => void;
}

const defaultValue: MyContextType = {
  handleValueInput: () => {},
};

export const MyContext = createContext<MyContextType>(defaultValue);

export const MyProvider = ({ children }: any) => {
  const value: string[] = [];

  const handleValueInput = (e: string) => {
    const valueInput = e;
    value.push(valueInput);
  };

  return (
    <MyContext.Provider value={{ handleValueInput }}>
      {children}
    </MyContext.Provider>
  );
};
