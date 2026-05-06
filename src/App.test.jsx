import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import App from './App.jsx';

describe('Portfolio platform', () => {
  it('renders the starter project library', () => {
    render(<App />);

    expect(screen.getByRole('heading', { name: /personal project showcase app/i })).toBeInTheDocument();
    expect(screen.getByText(/project 1/i)).toBeInTheDocument();
  });

  it('filters projects with the search field', async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.type(screen.getByRole('searchbox', { name: /search projects/i }), 'project 2');

    expect(screen.getByText(/project 2/i)).toBeInTheDocument();
    expect(screen.queryByText(/project 1/i)).not.toBeInTheDocument();
  });

  it('adds a new project from the form', async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.type(screen.getByLabelText(/title/i), 'Signal House Website');
    await user.type(screen.getByLabelText(/description/i), 'A fast portfolio site for a design collective.');
    await user.click(screen.getByRole('button', { name: /add/i }));

    expect(screen.getByRole('heading', { name: /signal house website/i })).toBeInTheDocument();
    expect(screen.getByText(/fast portfolio site/i)).toBeInTheDocument();
  });
});
