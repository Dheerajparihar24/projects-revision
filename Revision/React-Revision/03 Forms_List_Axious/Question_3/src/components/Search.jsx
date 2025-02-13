export const Search = ({ searchTerm, handleSearch }) => {
  return (
    <div
      style={{
        border: "1px solid black",
        padding: "10px",
        display: "flex",
        justifyContent: "center",
        gap: "10px",
      }}
    >
      <input type="search" value={searchTerm} onChange={handleSearch} />
      <button>Search</button>
    </div>
  );
};
