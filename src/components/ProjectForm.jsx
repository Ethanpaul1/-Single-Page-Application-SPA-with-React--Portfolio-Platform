import { useState } from 'react';

const emptyForm = {
  title: '',
  description: '',
};

export function ProjectForm({ onAddProject }) {
  const [formData, setFormData] = useState(emptyForm);

  function updateField(event) {
    const { name, value } = event.target;
    setFormData((currentData) => ({ ...currentData, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    onAddProject(formData);
    setFormData(emptyForm);
  }

  const isSubmitDisabled = !formData.title.trim() || !formData.description.trim();

  return (
    <form className="project-form" onSubmit={handleSubmit}>
      <label>
        Title
        <input name="title" value={formData.title} onChange={updateField} />
      </label>

      <label>
        Description
        <textarea name="description" value={formData.description} onChange={updateField} rows="4" />
      </label>

      <button className="button" type="submit" disabled={isSubmitDisabled}>
        Add
      </button>
    </form>
  );
}
