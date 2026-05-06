export function SearchBar({ value, onChange, resultCount }) {
  return (
    <label className="search-box">
      <span className="sr-only">Search projects</span>
      <input
        type="search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Search Projects"
      />
      <span className="result-count" aria-label={`${resultCount} matching projects`}>
        {resultCount}
      </span>
    </label>
  );
}
