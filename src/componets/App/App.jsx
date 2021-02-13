import React, { useState, createContext } from "react";
import { Form } from "../Form";
import { List } from "../List";
import { localStorageKey } from "../../constants";

const initialData = JSON.parse(localStorage.getItem(localStorageKey) ?? "[]");

export const DataContext = createContext({
  data: initialData,
  update: () => {},
});

export const App = () => {
  const [data, setData] = useState(initialData);

  const update = (formValues) => {
    setData((prevState) => {
      const state = [{ date: Date.now(), ...formValues }, ...prevState];
      localStorage.setItem(localStorageKey, JSON.stringify(state));
      return state;
    });
  };

  return (
    <div>
      <p>App!</p>
      <DataContext.Provider value={{ data, update }}>
        <Form />
        <List />
      </DataContext.Provider>
    </div>
  );
};
