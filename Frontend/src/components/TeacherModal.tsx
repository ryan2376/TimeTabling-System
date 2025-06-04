// components/TeacherModal.tsx
import { useState, useEffect } from 'react';

interface Props {
    onClose: () => void;
    onSave: (name: string) => void;
    initialName?: string;
}

export default function TeacherModal({ onClose, onSave, initialName = '' }: Props) {
    const [name, setName] = useState(initialName);

    useEffect(() => {
      setName(initialName); //reset input when opening for edit
    }, [initialName])
    

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (name.trim()) {
            onSave(name.trim());
            setName('');
        }
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-xl w-full max-w-md shadow-lg">
                <h2 className="text-xl font-semibold mb-4 text-gray-800">{initialName ? 'Edit Teacher' : 'Add New Teacher'}</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="text"
                        className="w-full p-2 border border-gray-300 rounded text-gray-800"
                        placeholder="Enter teacher's name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <div className="flex justify-end space-x-3">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                        >
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
