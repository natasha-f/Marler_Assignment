/** Search input component */
export default function SearchInput({ handleInput }) {
    return (
        <div>
            <label htmlFor="search">Search Description: </label>
            <input id="search" type="text" onInput={(e) => handleInput(e.target.value)} />
        </div>
    );
}
