'use client';
import { useState, useEffect } from 'react';

export default function ProjectsAdmin() {
    const auth = true;

    const [projects, setProjects] = useState([]);
    const [newProject, setNewProject] = useState({ title: '', description: '', images: [] });
    const [editProject, setEditProject] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [search, setSearch] = useState('');
    const [sortBy, setSortBy] = useState('created_at');
    const [sortOrder, setSortOrder] = useState('desc');

    const fetchProjects = async () => {
        setLoading(true);
        setError('');
        try {
            const res = await fetch('/api/admin/projects');
            const data = await res.json();
            setProjects(Array.isArray(data) ? data : []);
        } catch {
            setError('Failed to fetch projects.');
        }
        setLoading(false);
    };

    useEffect(() => {
        if (auth) fetchProjects();
    }, [auth]);

    const handleImageUpload = (e) => {
        const files = Array.from(e.target.files);
        const imageUrls = files.map(file => URL.createObjectURL(file));
        setNewProject((prev) => ({ ...prev, images: imageUrls }));
    };

    const handleProjectAdd = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        try {
            const res = await fetch('/api/admin/projects', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ...newProject, image_url: newProject.images.join(',') })
            });
            if (!res.ok) {
                const errorData = await res.json().catch(() => ({}));
                setError(errorData.message || 'Failed to add project');
            } else {
                await res.json();
                setNewProject({ title: '', description: '', images: [] });
                fetchProjects();
            }
        } catch {
            setError('Failed to add project');
        }
        setLoading(false);
    };

    const handleProjectDelete = async (id) => {
        if (!confirm('Are you sure you want to delete this project?')) return;
        setLoading(true);
        setError('');
        try {
            const res = await fetch(`/api/admin/projects/${id}`, { method: 'DELETE' });
            const data = await res.json();
            if (data.success) setProjects((prev) => prev.filter((p) => p.id !== id));
            else setError('Failed to delete project');
        } catch {
            setError('Failed to delete project');
        }
        setLoading(false);
    };

    const handleProjectEdit = (project) => setEditProject(project);
    const handleEditChange = (e) => setEditProject((prev) => ({ ...prev, [e.target.name]: e.target.value }));

    const handleEditSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        try {
            const res = await fetch(`/api/admin/projects/${editProject.id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(editProject),
            });
            const data = await res.json();
            if (data.success) {
                setEditProject(null);
                fetchProjects();
            } else setError('Failed to update project');
        } catch {
            setError('Failed to update project');
        }
        setLoading(false);
    };

    const filteredProjects = projects
        .filter((proj) =>
            proj.title.toLowerCase().includes(search.toLowerCase()) ||
            proj.description.toLowerCase().includes(search.toLowerCase())
        )
        .sort((a, b) => {
            if (sortBy === 'title') {
                return sortOrder === 'asc' ? a.title.localeCompare(b.title) : b.title.localeCompare(a.title);
            }
            if (sortBy === 'created_at' && a.created_at && b.created_at) {
                return sortOrder === 'asc' ? new Date(a.created_at) - new Date(b.created_at) : new Date(b.created_at) - new Date(a.created_at);
            }
            return 0;
        });

    return (
        <section className="mt-16 px-4 max-w-7xl mx-auto">
            <h2 className="text-3xl font-extrabold mb-8 text-center text-blue-400 tracking-tight drop-shadow-lg">Projects Admin</h2>

            <div className="flex flex-col md:flex-row gap-4 mb-8 items-center justify-between">
                <input
                    type="text"
                    placeholder="Search projects..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="p-3 rounded-lg text-white bg-gray-800 flex-1 border border-gray-700 focus:ring-2 focus:ring-blue-400 transition"
                />
                <div className="flex gap-3 items-center">
                    <label className="text-gray-300 font-medium">Sort by:</label>
                    <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                        className="p-2 rounded-lg bg-gray-800 text-white border border-gray-700"
                    >
                        <option value="created_at">Date</option>
                        <option value="title">Title</option>
                    </select>
                    <button
                        type="button"
                        className="p-2 rounded-lg bg-gray-800 text-white border border-gray-700 hover:bg-blue-500 transition"
                        onClick={() => setSortOrder((o) => (o === 'asc' ? 'desc' : 'asc'))}
                        title="Toggle sort order"
                    >
                        {sortOrder === 'asc' ? '↑' : '↓'}
                    </button>
                </div>
            </div>

            {error && <div className="mb-4 text-red-500 font-semibold text-center">{error}</div>}
            {loading && <div className="mb-4 text-blue-400 text-center">Loading...</div>}

            <form onSubmit={handleProjectAdd} className="mb-10 flex flex-col gap-4 max-w-2xl mx-auto bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-6 rounded-2xl shadow-2xl border border-gray-700">
                <h3 className="font-bold text-xl mb-2 text-blue-300">Add New Project</h3>
                <input
                    type="text"
                    placeholder="Project Title"
                    value={newProject.title}
                    onChange={(e) => setNewProject({ ...newProject, title: e.target.value })}
                    className="p-3 rounded-lg text-white bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-blue-400"
                    required
                />
                <textarea
                    placeholder="Description"
                    value={newProject.description}
                    onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
                    className="p-3 rounded-lg text-white bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-blue-400"
                    rows="3"
                />
                <input
                    type="file"
                    multiple
                    onChange={handleImageUpload}
                    className="p-2 bg-gray-800 text-white rounded-lg border border-gray-700"
                />
                <div className="flex flex-wrap gap-3">
                    {newProject.images.map((src, i) => (
                        <img key={i} src={src} alt="preview" className="w-24 h-24 object-cover rounded-lg border-2 border-blue-400 shadow" />
                    ))}
                </div>
                <button
                    type="submit"
                    className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white px-6 py-2 rounded-lg font-semibold shadow-lg transition disabled:opacity-50"
                    disabled={loading}
                >
                    Add Project
                </button>
            </form>

            {editProject && (
                <form
                    onSubmit={handleEditSubmit}
                    className="mb-10 flex flex-col gap-4 max-w-2xl mx-auto bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-6 rounded-2xl shadow-2xl border border-gray-700"
                >
                    <h3 className="font-bold text-xl mb-2 text-green-300">Edit Project</h3>
                    <input
                        type="text"
                        name="title"
                        placeholder="Project Title"
                        value={editProject.title}
                        onChange={handleEditChange}
                        className="p-3 rounded-lg text-white bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-green-400"
                        required
                    />
                    <textarea
                        name="description"
                        placeholder="Description"
                        value={editProject.description}
                        onChange={handleEditChange}
                        className="p-3 rounded-lg text-white bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-green-400"
                        rows="3"
                    />
                    <div className="flex gap-3">
                        <button
                            type="submit"
                            className="bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 text-white px-6 py-2 rounded-lg font-semibold shadow-lg transition disabled:opacity-50"
                            disabled={loading}
                        >
                            Save
                        </button>
                        <button
                            type="button"
                            className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-2 rounded-lg font-semibold shadow transition"
                            onClick={() => setEditProject(null)}
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            )}

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.length === 0 && (
                    <div className="text-gray-400 col-span-2 text-center py-8">No projects found.</div>
                )}
                {filteredProjects.map((proj) => (
                    <div
                        key={proj.id}
                        className="border border-gray-700 p-5 rounded-2xl bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 shadow-xl hover:shadow-2xl transition group relative overflow-hidden"
                    >
                        <div className="relative">
                            {proj.image_url && proj.image_url.split(',').map((url, i) => (
                                <img
                                    key={i}
                                    src={url}
                                    className="w-full h-48 object-cover rounded-xl mb-3 border-2 border-blue-400 group-hover:scale-105 transition"
                                    alt={proj.title}
                                />
                            ))}
                            <div className="absolute top-2 right-2 flex gap-2 opacity-0 group-hover:opacity-100 transition">
                                <button
                                    onClick={() => handleProjectEdit(proj)}
                                    className="bg-yellow-400 text-black px-3 py-1 rounded-lg font-semibold shadow hover:bg-yellow-300 transition"
                                    disabled={loading}
                                >
                                    Edit
                                </button>
                                <button
                                    onClick={() => handleProjectDelete(proj.id)}
                                    className="bg-red-500 text-white px-3 py-1 rounded-lg font-semibold shadow hover:bg-red-400 transition"
                                    disabled={loading}
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                        <h3 className="mt-2 font-bold text-lg text-blue-300">{proj.title}</h3>
                        <p className="text-gray-300 mb-2">{proj.description}</p>
                        {proj.created_at && (
                            <div className="text-xs text-gray-400 mt-1">
                                Created: {new Date(proj.created_at).toLocaleDateString()}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}