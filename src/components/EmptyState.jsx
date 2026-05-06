export function EmptyState({ searchTerm }) {
  return (
    <div className="empty-state">
      <p className="eyebrow">No matches</p>
      <h3>No projects found for "{searchTerm}".</h3>
      <p>Try a different search term or add a new project that fits this brief.</p>
    </div>
  );
}
