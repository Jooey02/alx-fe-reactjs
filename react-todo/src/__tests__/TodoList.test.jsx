// src/__tests__/TodoList.test.jsx
import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import TodoList from '../components/TodoList';

describe('TodoList', () => {
  it('renders TodoList component', () => {
    render(<TodoList />);
    expect(screen.getByText('Todo List')).toBeDefined();
    expect(screen.getByText('Learn React')).toBeDefined();
    expect(screen.getByText('Build a Todo app')).toBeDefined();
  });

  it('adds a new todo', () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText('Add a new todo');
    const addButton = screen.getByText('Add Todo');

    fireEvent.change(input, { target: { value: 'New Todo' } });
    fireEvent.click(addButton);

    expect(screen.getByText('New Todo')).toBeDefined();
  });

  it('toggles a todo', () => {
    render(<TodoList />);
    const todo = screen.getByText('Learn React');

    fireEvent.click(todo);

    expect(todo.style.textDecoration).toBe('line-through');

    fireEvent.click(todo);

    expect(todo.style.textDecoration).toBe('none');
  });

  it('deletes a todo', () => {
    render(<TodoList />);
    const deleteButton = screen.getAllByText('Delete')[0];

    fireEvent.click(deleteButton);

    expect(screen.queryByText('Learn React')).toBeNull();
  });
});