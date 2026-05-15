#!/bin/bash

# DigiSolutions - Cleanup Script
# This script removes unnecessary files and organizes the project

echo "🧹 Starting cleanup..."

# Create a scripts directory for Python utilities
echo "📁 Creating scripts directory..."
mkdir -p scripts

# Move Python scripts to scripts directory
echo "📦 Moving Python scripts..."
mv *.py scripts/ 2>/dev/null || echo "No Python files to move"

# Remove .DS_Store files
echo "🗑️  Removing .DS_Store files..."
find . -name ".DS_Store" -type f -delete

# Remove node_modules/.cache if exists
echo "🗑️  Cleaning cache..."
rm -rf node_modules/.cache 2>/dev/null

# Remove .next cache
echo "🗑️  Cleaning Next.js cache..."
rm -rf .next 2>/dev/null

# Create a docs directory for documentation
echo "📁 Creating docs directory..."
mkdir -p docs

# Move documentation files to docs directory
echo "📚 Moving documentation..."
mv CSS-*.md docs/ 2>/dev/null || echo "Documentation already in place"

# Create .gitignore if it doesn't exist or update it
echo "📝 Updating .gitignore..."
cat >> .gitignore << 'EOF'

# System files
.DS_Store
*.log

# Python
__pycache__/
*.py[cod]
*$py.class
*.so

# Backup files
*-backup.*
*.bak

# Editor directories
.vscode/
.idea/

# Environment
.env.local
.env.development.local
.env.test.local
.env.production.local
EOF

echo "✅ Cleanup complete!"
echo ""
echo "📊 Project structure:"
tree -L 2 -I 'node_modules|.next|out' || ls -la
