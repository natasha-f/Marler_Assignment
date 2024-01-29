import { useState } from "react";

import data from "./data.json";

import Table from './components/Table';
import SearchInput from './components/SearchInput';
import useSorted from './components/useSorted.js';


export default function App() {
    // default the products list to the contents of the data.json file
    const [products, setProducts] = useState(data);

    // use the useSorted hook to maintain the sort order state
    const { updateSort, sortOrder, getSortDescription } = useSorted();

    // sort products by quantity depending on the sort order
    function handleSort(currentSort) {
        updateSort(currentSort);
        if (sortOrder === 1) {
            setProducts(products.sort((a, b) => b.quantity - a.quantity));
        } else if (sortOrder === 2) {
            setProducts(products.sort((a, b) => a.id - b.id));
        } else {
            setProducts(products.sort((a, b) => a.quantity - b.quantity));
        }
    }

    // filter products based on description
    function handleInput(searchValue) {
        if (!searchValue) {
            setProducts(data);
        } else {
            setProducts(products.filter((product) => product.description.toLowerCase().includes(searchValue.toLowerCase())));
        }
    }

    return (
        <>
            <h3>Products</h3>
            <hr/>
            <div>
                <button onClick={() => handleSort(sortOrder)}>Sort by Quantity</button>
                <span className="sort-status">STATUS: { getSortDescription() }</span>
            </div>
            <hr />
            < SearchInput handleInput={handleInput} />
            <hr />
            <Table products={products} />
        </>
    );  
}