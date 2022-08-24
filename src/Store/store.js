import { createContext, useContext, useEffect, useState } from "react";
// 2:46
const AppContext = createContext({
    items: [],
    createItem: (item) => { },
    getItem: (id) => { },
    updateItem: (item) => { },
});

export default function Store({ children }) {
    return <AppContext.Provider></AppContext.Provider>
}