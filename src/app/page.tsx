'use client';
import { useEffect, useState } from 'react';

export default function Home() {
  const [habits, setHabits] = useState([]);
  const [newHabit, setNewHabit] = useState('');

  const fetchHabits = () => {
    fetch('/api/habits')
      .then((res) => res.json())
      .then((data) => setHabits(data));
  };

  useEffect(() => {
    fetchHabits();
  }, []);

  const addHabit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newHabit.trim()) return;

    await fetch('/api/habits', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: newHabit }),
    });

    setNewHabit('');
    fetchHabits();
  };

  return (
    <main className="p-8 max-w-md mx-auto mt-10 border rounded shadow bg-white">
      <h1 className="text-2xl font-bold mb-4 text-gray-800">Mis Hábitos</h1>
      <form onSubmit={addHabit} className="flex gap-2 mb-6">
        <input
          className="border p-2 flex-1 rounded text-black"
          value={newHabit}
          onChange={(e) => setNewHabit(e.target.value)}
          placeholder="Ej. Beber agua, Leer..."
        />
        <button className="bg-blue-600 text-white px-4 py-2 rounded font-medium">Añadir</button>
      </form>
      <ul className="divide-y">
        {habits.map((h: any) => (
          <li key={h.id} className="py-3 text-gray-700 font-medium">✓ {h.name}</li>
         ))}
      </ul>
    </main>
  );
}
