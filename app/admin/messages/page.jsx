'use client';

import { useState, useEffect } from 'react';

const AdminPage = () => {
  const [auth, setAuth] = useState(false);
  const [form, setForm] = useState({ username: '', password: '' });
  const [messages, setMessages] = useState([]);
  const [error, setError] = useState('');

  const USERNAME = '1';
  const PASSWORD = '1';

  const handleLogin = (e) => {
    e.preventDefault();
    if (form.username === USERNAME && form.password === PASSWORD) {
      setAuth(true);
      setError('');
    } else {
      setError('Invalid credentials');
    }
  };

  useEffect(() => {
    if (auth) {
      fetch('/api/admin/messages')
        .then((res) => res.json())
        .then((data) => setMessages(data))
        .catch((err) => console.error(err));
    }
  }, [auth]);

  const handleDelete = async (id) => {
    if (!confirm('Are you sure you want to delete this message?')) return;

    try {
      const res = await fetch(`/api/admin/messages/${id}`, {
        method: 'DELETE',
      });

      const data = await res.json();
      if (data.success) {
        setMessages((prev) => prev.filter((msg) => msg.id !== id));
        alert('Message deleted');
      } else {
        alert('Delete failed: ' + data.error);
      }
    } catch (err) {
      console.error('Delete error:', err);
      alert('Something went wrong');
    }
  };

  if (!auth) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <form onSubmit={handleLogin} className="bg-gray-900 p-8 rounded-md w-full max-w-sm space-y-4">
          <h2 className="text-2xl font-bold">Admin Login</h2>
          <input
            type="text"
            placeholder="Username"
            value={form.username}
            onChange={(e) => setForm({ ...form, username: e.target.value })}
            className="w-full p-2 bg-gray-800 rounded border border-gray-600"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            className="w-full p-2 bg-gray-800 rounded border border-gray-600"
            required
          />
          {error && <p className="text-red-400">{error}</p>}
          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-400 text-black font-bold py-2 rounded"
          >
            Login
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-3xl font-bold mb-6">Welcome Admin</h1>

      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-700 text-sm">
          <thead className="bg-gray-800">
            <tr>
              <th className="p-3 border border-gray-700">Name</th>
              <th className="p-3 border border-gray-700">Email</th>
              <th className="p-3 border border-gray-700">Phone</th>
              <th className="p-3 border border-gray-700">Message</th>
              <th className="p-3 border border-gray-700">Actions</th>
            </tr>
          </thead>
          <tbody>
            {messages.map((msg, i) => (
              <tr key={i} className="border-t border-gray-800">
                <td className="p-2 border border-gray-700">{msg.first_name} {msg.last_name}</td>
                <td className="p-2 border border-gray-700">{msg.email}</td>
                <td className="p-2 border border-gray-700">{msg.phone}</td>
                <td className="p-2 border border-gray-700">{msg.message}</td>
                
                <td className="p-2 border border-gray-700">
                  <button
                    onClick={() => handleDelete(msg.id )}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                  
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
    </div>
  );
};

export default AdminPage;
