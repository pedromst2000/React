import React, { useContext } from 'react'
import ProductsContext from '../context/ProductsProvider'

export default function useProductsProvider() {

    return useContext(ProductsContext);
}
