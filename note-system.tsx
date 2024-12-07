import React, { useState } from 'react';
import { Card } from "@/components/ui/card";

// Sample data for demonstration
const sampleNotes = [
  {
    id: 'note-1',
    title: 'Getting Started',
    content: 'Welcome to the note system. This is a sample note to demonstrate the functionality. Click around to explore how it works.'
  },
  {
    id: 'note-2',
    title: 'How to Use',
    content: 'Hover over any note title to preview its contents. Click a note to view it in the main panel. The system maintains a clean, minimal interface inspired by Andy Matuschak\'s notes.'
  },
  {
    id: 'note-3',
    title: 'Features',
    content: (
      <div>
        <h2 className="text-xl font-semibold mb-4">Key Features</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>Hover previews of note content</li>
          <li>Clean, minimal interface</li>
          <li>Side-by-side layout</li>
          <li>Supports both text and React components as content</li>
        </ul>
      </div>
    )
  }
];

const NoteLink = ({ note, onSelect, isSelected }) => {
  const [showPreview, setShowPreview] = useState(false);

  return (
    <div className="relative">
      <a
        href="#"
        className={`
          block px-4 py-2 rounded-lg
          text-blue-600 hover:bg-gray-50
          ${isSelected ? 'bg-blue-50' : ''}
        `}
        onMouseEnter={() => setShowPreview(true)}
        onMouseLeave={() => setShowPreview(false)}
        onClick={(e) => {
          e.preventDefault();
          onSelect(note.id);
        }}
      >
        <span className="text-[15px]">{note.title}</span>
      </a>
      
      {showPreview && (
        <div className="absolute left-full top-0 ml-2 w-[32rem] bg-white rounded-lg shadow-md z-50">
          <div className="p-6">
            {typeof note.content === 'string' ? (
              <div className="prose prose-sm">{note.content}</div>
            ) : (
              note.content
            )}
          </div>
        </div>
      )}
    </div>
  );
};

const NoteSystem = ({ notes = sampleNotes }) => {
  const [selectedNote, setSelectedNote] = useState(null);
  
  // Guard against empty notes array
  if (!notes || notes.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 p-8">
        <Card className="max-w-2xl mx-auto">
          <div className="p-8 text-center text-gray-500">
            No notes available. Please add some notes to get started.
          </div>
        </Card>
      </div>
    );
  }
  
  const selectedContent = selectedNote 
    ? notes.find(n => n.id === selectedNote)
    : null;

  return (
    <div className="flex gap-6 min-h-screen bg-gray-50 p-8">
      <Card className="w-72 shrink-0">
        <div className="p-6 space-y-1">
          {notes.map(note => (
            <NoteLink
              key={note.id}
              note={note}
              onSelect={setSelectedNote}
              isSelected={selectedNote === note.id}
            />
          ))}
        </div>
      </Card>

      <Card className="flex-1">
        <div className="p-8">
          {selectedContent ? (
            <div className="animate-in fade-in slide-in-from-right duration-300">
              {typeof selectedContent.content === 'string' ? (
                <div className="prose">{selectedContent.content}</div>
              ) : (
                selectedContent.content
              )}
            </div>
          ) : (
            <div className="text-gray-400 text-center">
              Select a note to view its content
            </div>
          )}
        </div>
      </Card>
    </div>
  );
};

export default NoteSystem;
