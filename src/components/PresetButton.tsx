'use client';

import { useState } from 'react';

export type PresetButtonProps = {
  name: string;
  onDelete?: () => void;
  editPresetName?: (newName: string) => void;
  setPreset?: () => void;
  currentPreset: string;
};

export const PresetButton = ({
  name,
  onDelete,
  editPresetName,
  setPreset,
  currentPreset,
}: PresetButtonProps) => {
  const [isEditing, setIsEditing] = useState(name === '');
  const [editedName, setEditedName] = useState(name);

  const handleEditSubmit = () => {
    if (editPresetName && editedName.trim() !== '') {
      editPresetName(editedName);
    }
    setIsEditing(false);
  };

  const isActive = currentPreset === name;

  if (isEditing) {
    return (
      <div className="flex items-center gap-2">
        <button
          className="w-6 h-6 flex-shrink-0 text-xs bg-gray-400 rounded-full text-white hover:bg-gray-500 transition-all flex items-center justify-center shadow-sm hover:shadow-md"
          onClick={() => setIsEditing(false)}
          title="Cancel"
        >
          ×
        </button>
        <input
          type="text"
          value={editedName}
          onChange={(e) => setEditedName(e.target.value)}
          className="border rounded px-3 py-1.5 flex-1 min-w-0 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
          autoFocus
        />
        <button
          className="w-6 h-6 flex-shrink-0 text-xs bg-green-500 rounded-full text-white hover:bg-green-600 transition-all flex items-center justify-center shadow-sm hover:shadow-md"
          onClick={handleEditSubmit}
          title="Save"
        >
          ✓
        </button>
        {onDelete && (
          <button
            className="w-6 h-6 flex-shrink-0 text-xs bg-red-500 rounded-full text-white hover:bg-red-600 transition-all flex items-center justify-center shadow-sm hover:shadow-md"
            onClick={onDelete}
            title="Delete"
          >
            ×
          </button>
        )}
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2">
      <button
        className="w-6 h-6 flex-shrink-0 text-xs bg-green-400 rounded-full text-white hover:bg-green-500 transition-all flex items-center justify-center shadow-sm hover:shadow-md"
        onClick={() => setIsEditing(true)}
        title="Edit"
      >
        ✎
      </button>
      <button
        className={`px-4 py-1.5 w-full rounded-md transition-all text-sm font-medium shadow-sm hover:shadow focus:outline-none focus:ring-2 focus:ring-gray-300 ${
          isActive
            ? 'bg-blue-100 hover:bg-blue-200 text-blue-700 ring-2 ring-blue-400'
            : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
        }`}
        onClick={setPreset}
      >
        {name}
      </button>
    </div>
  );
};
