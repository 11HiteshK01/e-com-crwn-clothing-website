import { createContext, useState, useEffect } from 'react';
import { getCategoriesAndDocuments } from '../utils/firebase/firebase-utils.js';


export const CategoriesContext = createContext({
    categoryMap: {},
})

export const CategoriesProvider = ({ children }) => {
    const [categoryMap, setcategoryMap] = useState({});

    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoryMap = await getCategoriesAndDocuments();
            setcategoryMap(categoryMap);
        };

        getCategoriesMap();
    }, []);

    const value = { categoryMap };
    return (
        <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
    )
}
