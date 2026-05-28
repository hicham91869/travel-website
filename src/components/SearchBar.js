export default function SearchBar({ value, onChange }) {
  return (
    <div className="mb-4">

      <input
        className="form-control shadow-sm"
        placeholder="Search destinations..."
        value={value}
        onChange={onChange}
      />

    </div>
  );
}