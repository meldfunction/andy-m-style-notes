# Andy-Style Notes System

A React-based note viewing system inspired by Andy Matuschak's notes, featuring hover previews and markdown support. This system creates an elegant side-by-side note interface with hover previews and smooth transitions.

![Note System Preview](/api/placeholder/800/400)

## Features

- 📝 Andy Matuschak-style note interface
- 🔍 Hover previews that show full note content
- 📱 Responsive design
- ⌨️ Keyboard accessible
- 🎨 Clean, minimal interface
- 📜 Markdown support
- ⚡ Fast preview rendering

## Quick Start

Choose your operating system and follow the installation script instructions:

- [Windows Installation Guide](Install-script-instructions.md#windows-users)
- [Linux/Mac Installation Guide](Install-script-instructions.md#linuxmac-users)

For complete installation instructions and troubleshooting, see our [Full Installation Guide](Full-Instructions.md).

## Importing Notes

Already have notes in Obsidian, Notion, or another tool? Check out our [Importing Notes Guide](Importing-notes.md) for detailed instructions on bringing your existing notes into the system.

## Usage

```bash
# Start the development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start
```

Visit `http://localhost:3000` in your browser.

## Project Structure

```
notes-system/
├── app/
│   ├── components/
│   │   └── NoteSystem.tsx
│   └── page.tsx
├── src/
│   └── notes/
│       └── example.md
├── install.ps1
└── install.sh
```

## Customization

The system can be customized by:

1. Adding your own markdown files to `src/notes/`
2. Modifying styles in `NoteSystem.tsx`
3. Adjusting the layout and components
4. Extending markdown support

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Acknowledgments

- Inspired by [Andy Matuschak's Notes](https://notes.andymatuschak.org/)
- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- UI components from [shadcn/ui](https://ui.shadcn.com/)

## Support

- Check our [Troubleshooting Guide](Full-Instructions.md#troubleshooting)
- Open an issue
- Contact the maintainers

## TODO

- [ ] Add search functionality
- [ ] Implement graph view
- [ ] Add tag support
- [ ] Enable note linking
