// src/pages/Teachers.tsx

import { useState } from 'react';

type Teacher = {
    id: number;
    name: string;
};

const dummyTeachers: Teacher[] = [
    { id: 1, name: 'Mr. Mwangi' },
    { id: 2, name: 'Ms. Achieng' },
    { id: 3, name: 'Mr. Otieno' },
    { id: 4, name: 'Mrs. Wanjiru' },
];

export default function TeachersPage() {
    const [teachers] = useState<Teacher[]>(dummyTeachers);

    return (
        <div className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Teachers</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {teachers.map((teacher) => (
                    <div
                        key={teacher.id}
                        className="bg-white shadow-md rounded-lg p-4 border hover:shadow-lg transition"
                    >
                        <h3 className="text-lg font-bold text-gray-800">{teacher.name}</h3>
                        <p className="text-sm text-gray-500">ID: {teacher.id}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
