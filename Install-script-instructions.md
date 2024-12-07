Here's a detailed guide for using the installation scripts:

# Note System Installation Guide

## Prerequisites
- Node.js v16.8 or later installed on your system
  - To check if Node.js is installed, open a terminal/command prompt and run: `node --version`
  - If not installed, download and install from [Node.js official website](https://nodejs.org/)
- Git installed (if you're cloning from repository)
- Text editor (VS Code recommended)

## Installation Steps

### Windows Users

1. Create a new directory for your project:
```powershell
mkdir my-notes-app
cd my-notes-app
```

2. Download the installation script:
   - Option A: If using Git, clone the repository:
     ```powershell
     git clone <repository-url>
     ```
   - Option B: Download `install.ps1` directly and save it to your project directory

3. Open PowerShell as Administrator:
   - Right-click on the Windows Start button
   - Select "Windows PowerShell (Admin)" or "Terminal (Admin)"
   - Navigate to your project directory:
     ```powershell
     cd path\to\my-notes-app
     ```

4. Run the installation script:
```powershell
Set-ExecutionPolicy RemoteSigned -Scope Process
.\install.ps1
```

5. Wait for the installation to complete. You should see progress messages as the script runs.

### Linux/Mac Users

1. Create a new directory for your project:
```bash
mkdir my-notes-app
cd my-notes-app
```

2. Download the installation script:
   - Option A: If using Git, clone the repository:
     ```bash
     git clone <repository-url>
     ```
   - Option B: Download `install.sh` directly and save it to your project directory

3. Make the script executable:
```bash
chmod +x install.sh
```

4. Run the installation script:
```bash
./install.sh
```

5. Wait for the installation to complete. You should see progress messages as the script runs.

## Post-Installation Steps

1. Navigate to the newly created project directory:
```bash
cd notes-system
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to:
```
http://localhost:3000
```

## Adding Your Own Notes

1. Navigate to the notes directory:
```
src/notes/
```

2. Create new markdown files with the `.md` extension
3. Follow the markdown format:
```markdown
# Note Title
Your content here...

## Subtitle
More content...
```

## Troubleshooting

### Common Issues

1. "Node.js is not installed" error:
   - Download and install Node.js from [nodejs.org](https://nodejs.org/)
   - Restart your terminal/PowerShell after installation

2. Permission errors (Windows):
   - Make sure you're running PowerShell as Administrator
   - Try running:
     ```powershell
     Set-ExecutionPolicy RemoteSigned -Scope Process
     ```

3. Permission errors (Linux/Mac):
   - Make sure the script is executable:
     ```bash
     chmod +x install.sh
     ```
   - Try running with sudo if needed:
     ```bash
     sudo ./install.sh
     ```

4. "Port 3000 is already in use" error:
   - Either close the application using port 3000
   - Or modify the port in package.json:
     ```json
     "scripts": {
       "dev": "next dev -p 3001"
     }
     ```

### Still Having Issues?

1. Check the logs in the terminal for specific error messages
2. Make sure all prerequisites are installed correctly
3. Try removing the `node_modules` folder and running `npm install` again
4. Open an issue on the GitHub repository with:
   - Your operating system version
   - Node.js version (`node --version`)
   - Full error message
   - Steps to reproduce the issue

## Customization

The notes system can be customized by:

1. Modifying the styling in `NoteSystem.tsx`
2. Adjusting the layout and components
3. Adding new features to the markdown parser
4. Customizing the preview behavior

For detailed customization instructions, refer to the project's documentation.

## Updates and Maintenance

1. To update dependencies:
```bash
npm update
```

2. To check for outdated packages:
```bash
npm outdated
```

3. To run security audit:
```bash
npm audit
```

## Need Help?

- Check the [GitHub Issues](link-to-issues) page
- Review the [Documentation](link-to-docs)
- Create a new issue if you encounter problems

Remember to replace `<repository-url>`, `link-to-issues`, and `link-to-docs` with actual URLs when you host this on GitHub.

Would you like me to add more details to any section or create additional documentation?