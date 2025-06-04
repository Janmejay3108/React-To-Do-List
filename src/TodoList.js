import React, { useState, useEffect } from 'react';
import './TodoList.css';

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');
  const [filter, setFilter] = useState('all');
  const [sort, setSort] = useState('default');

  // Load tasks from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem('tasks');
    if (stored) setTasks(JSON.parse(stored));
  }, []);

  // Save tasks to localStorage on change
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleAdd = (e) => {
    e.preventDefault();
    const trimmed = input.trim();
    if (!trimmed) return;
    setTasks([
      ...tasks,
      { id: Date.now(), text: trimmed, completed: false },
    ]);
    setInput('');
  };

  const handleRemove = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleToggle = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleFilter = (e) => setFilter(e.target.value);
  const handleSort = (e) => setSort(e.target.value);

  let displayedTasks = [...tasks];
  if (filter === 'active') displayedTasks = displayedTasks.filter((t) => !t.completed);
  if (filter === 'completed') displayedTasks = displayedTasks.filter((t) => t.completed);
  if (sort === 'az') displayedTasks.sort((a, b) => a.text.localeCompare(b.text));
  if (sort === 'za') displayedTasks.sort((a, b) => b.text.localeCompare(a.text));
  if (sort === 'completed') displayedTasks.sort((a, b) => b.completed - a.completed);

  return (
    <div className="todo-container">
      <h2>To-Do List</h2>
      <form onSubmit={handleAdd} className="todo-form">
        <span className="input-icon">
          <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M12 20v-8m0 0V4m0 8H4m8 0h8"/></svg>
        </span>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a new task..."
          maxLength={100}
          style={{ paddingLeft: '2.2rem' }}
        />
        <button type="submit" disabled={!input.trim()}>
          <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M12 5v14m7-7H5"/></svg>
          Add
        </button>
      </form>
      <div className="todo-controls">
        <select value={filter} onChange={handleFilter}>
          <option value="all">All</option>
          <option value="active">Active</option>
          <option value="completed">Completed</option>
        </select>
        <select value={sort} onChange={handleSort}>
          <option value="default">Default</option>
          <option value="az">A-Z</option>
          <option value="za">Z-A</option>
          <option value="completed">Completed First</option>
        </select>
      </div>
      <ul className="todo-list">
        {displayedTasks.length === 0 && (
          <li className="empty">
            <span className="empty-icon">
              <svg width="48" height="48" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M9 12h6M12 9v6"/></svg>
            </span>
            <span>No tasks yet. Add your first one!</span>
          </li>
        )}
        {displayedTasks.map((task) => (
          <li key={task.id} className={task.completed ? 'completed' : ''}>
            <span
              className={`todo-checkbox${task.completed ? ' checked' : ''}`}
              onClick={() => handleToggle(task.id)}
              title="Toggle complete"
            >
              <span className="checkmark">
                {task.completed && (
                  <svg width="16" height="16" viewBox="0 0 14 14">
                    <circle cx="7" cy="7" r="7" fill="#3B82F6" opacity="0.18" />
                    <polyline
                      points="4,7.5 6.2,10 10,4.5"
                      fill="none"
                      stroke="#10B981"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </span>
            </span>
            <span
              className="todo-text"
              onClick={() => handleToggle(task.id)}
              title="Toggle complete"
            >
              {task.text}
            </span>
            <button onClick={() => handleRemove(task.id)} title="Remove">
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M18 6L6 18M6 6l12 12"/></svg>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList; 