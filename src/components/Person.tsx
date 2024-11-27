'use client';

import { useState } from 'react';

export type PersonProps = {
  name: string;
  onEdit: (name: string) => void;
  onDelete: () => void;
  url: string;
  onUrlChange: (url: string) => void;
};

export const Person = ({ name, onEdit, onDelete, url, onUrlChange }: PersonProps) => {
  const [isEditing, setIsEditing] = useState(name === '');
  const [editedName, setEditedName] = useState(name);

  const handleSubmit = () => {
    if (editedName.trim() !== '') {
      onEdit(editedName);
      setIsEditing(false);
    }
  };

  const handleCancel = () => {
    setEditedName(name);
    setIsEditing(false);
  };

  if (isEditing) {
    return (
      <div className="flex items-center gap-3 p-2 w-full">
        <button
          className="w-6 h-6 text-xs bg-gray-400 rounded-full text-white hover:bg-gray-500 transition-all flex items-center justify-center shadow-sm hover:shadow-md"
          onClick={handleCancel}
          title="Cancel"
        >
          ×
        </button>
        <input
          type="text"
          value={editedName}
          onChange={(e) => setEditedName(e.target.value)}
          className="w-24 border rounded px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
          placeholder="Enter name"
        />
        <input
          type="text"
          value={url}
          onChange={(e) => onUrlChange(e.target.value)}
          className="flex-1 min-w-0 flex-shrink-0 border rounded px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
          placeholder="Enter URL"
        />
        <button
          className="w-6 h-6 text-xs bg-green-500 rounded-full text-white hover:bg-green-600 transition-all flex items-center justify-center shadow-sm hover:shadow-md"
          onClick={handleSubmit}
          title="Save"
        >
          ✓
        </button>
        <button
          className="w-6 h-6 text-xs bg-red-500 rounded-full text-white hover:bg-red-600 transition-all flex items-center justify-center shadow-sm hover:shadow-md"
          onClick={onDelete}
          title="Delete"
        >
          ×
        </button>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-3 p-2 w-full">
      <button
        className="w-6 h-6 flex-shrink-0 text-xs bg-green-400 rounded-full text-white hover:bg-green-500 transition-all flex items-center justify-center shadow-sm hover:shadow-md"
        onClick={() => setIsEditing(true)}
        title="Edit"
      >
        ✎
      </button>
      <div className="w-24 flex-shrink-0 px-3 py-1.5 text-sm text-gray-700">{name}</div>
      <input
        type="text"
        value={url}
        onChange={(e) => onUrlChange(e.target.value)}
        className="flex-1 min-w-0 border rounded px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
        placeholder="Enter URL"
      />
    </div>
  );
};
