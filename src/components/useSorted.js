/** A custom React hook that holds sort state */

import { useState } from "react";

// sort states user-friendly descriptions
const sortOptions = [
    "Not Sorted",
    "Sorted Ascending",
    "Sorted Descending"
];

export default function useSorted() {

    const [sortOrder, setSortOrder] = useState(0);

    // move to the next sort order or return to 0
    function updateSort(currentSort) {
        if (currentSort === 0) {
            setSortOrder(1);
        } else if (currentSort === 1) {
            setSortOrder(2);
        } else {
            setSortOrder(0);
        }
    }

    // get user-friendly sort order description
    function getSortDescription() {
        return sortOptions[sortOrder];
    }

    return { updateSort, sortOrder, getSortDescription};
}