// src/pages/Teachers.tsx

import { useState } from 'react';
import TeacherModal from '../components/TeacherModal';

type Teacher = {
    id: number;
    name: string;
};

export default function Teachers() {
    const [teachers, setTeachers] = useState<Teacher[]>([
        { id: 1, name: 'Mr. Mwangi' },
        { id: 2, name: 'Ms. Achieng' }
    ]);
    const [showModal, setShowModal] = useState(false);
    const [editingTeacher, setEditingTeacher] = useState<Teacher | null>(null);

    const handleAddClick = () => {
        setEditingTeacher(null);// not editing
        setShowModal(true);
    };

    const handleEditClick = (teacher: Teacher) => {
        setEditingTeacher(teacher)
        setShowModal(true);
    };

    const handleDeleteClick = (id: number) => {
        const confirmed = confirm('Are you sure you want to delete this teacher?');
        if (confirmed) {
            setTeachers(prev => prev.filter(t => t.id !== id));
        }
    };

    const handleSave = (name: string) => {
        if (editingTeacher) {
            //update existing teacher
            setTeachers(prev => prev.map(t => t.id === editingTeacher.id ? { ...t, name } : t));
        } else {
            //add new teacher
            const newTeacher: Teacher = {
                id: Date.now(),
                name
            };
            setTeachers(prev => [...prev, newTeacher]);
        }
        setShowModal(false)
    };

    return (
        <div className="p-6">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-semibold mb-4">Teachers</h2>
                <button
                    onClick={handleAddClick}
                    className='bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700'>
                    Add Teacher
                </button>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
                {teachers.map((teacher) => (
                    <div
                        key={teacher.id}
                        className=" p-4 bg-white rounded shadow"
                    >
                        <span className="font-medium text-gray-800">{teacher.name}</span>
                        <div className='space-x-2'>
                            <button onClick={() => handleEditClick(teacher)}
                            className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600">
                            Edit
                            </button>
                            <button onClick={() => handleDeleteClick(teacher.id)}
                                className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700">
                            Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            {showModal && (
                <TeacherModal onClose={() => setShowModal(false)} onSave={handleSave} initialName={editingTeacher?.name}
                />
            )}
        </div>
    );
}
