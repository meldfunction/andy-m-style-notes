#!/bin/bash

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "Node.js is not installed. Please install Node.js first."
    exit 1
fi

# Create new Next.js project
echo "Creating new Next.js project with Tailwind CSS..."
npx create-next-app@latest notes-system --typescript --tailwind --app --use-npm
cd notes-system

# Install required dependencies
echo "Installing dependencies..."
npm install @radix-ui/react-scroll-area

# Initialize shadcn/ui
echo "Initializing shadcn/ui..."
npx shadcn-ui@latest init -y

# Add required components
echo "Adding shadcn/ui components..."
npx shadcn-ui@latest add card
npx shadcn-ui@latest add scroll-area

# Create necessary directories
echo "Creating project structure..."
mkdir -p app/components
mkdir -p src/notes

# Download the NoteSystem component
echo "Creating NoteSystem component..."
COMPONENT_URL="YOUR_RAW_GITHUB_URL_FOR_NOTESYSTEM_COMPONENT"
curl -o app/components/NoteSystem.tsx $COMPONENT_URL

# Create example note
cat > src/notes/example.md << EOL
# Example Note
Welcome to your note system!

## Getting Started
- Hover over notes to preview
- Click to view full content
- Use markdown formatting

## Features
1. Markdown support
2. Hover previews
3. Clean interface
EOL

# Update page.tsx
cat > app/page.tsx << EOL
import NoteSystem from '@/components/NoteSystem';

export default function Home() {
  return (
    <main>
      <NoteSystem />
    </main>
  );
}
EOL

# Set proper permissions
chmod +x install.sh

echo "Installation complete! Run 'npm run dev' to start the development server."
