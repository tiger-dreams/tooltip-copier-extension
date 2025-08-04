# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Chrome extension called "Tooltip Copier" that allows users to copy text from tooltips and hovered elements using keyboard shortcuts. The extension works on all websites and supports both static tooltip attributes and dynamically generated tooltips from chart libraries.

## Architecture

The extension follows Chrome Extension Manifest V3 architecture:

- **manifest.json**: Extension configuration with permissions for clipboard access and content script injection
- **content.js**: Main functionality injected into all web pages
- **tooltipcopy_48.png**: Extension icon

## Core Functionality

The extension operates through three main components:

1. **Text Extraction Pipeline**: 
   - `getElementText()` extracts text from hovered elements via tooltip attributes (title, data-tooltip, aria-label) or text content
   - `findTooltip()` locates visible dynamic tooltips using CSS selectors for popular chart libraries (.bb-tooltip, .tooltip, etc.)
   - `cleanText()` normalizes extracted text by removing excessive whitespace and empty lines

2. **Event System**:
   - Mouseover events capture tooltip text from both static attributes and dynamic elements
   - Uses 100ms delay for dynamic tooltip detection to allow chart libraries to render
   - Keyboard events handle copy operations with support for both English ('c') and Korean ('ㅊ') keyboards

3. **Copy Operations**:
   - Supports both Ctrl/Cmd+C and standalone C/ㅊ key shortcuts
   - Uses modern Clipboard API with fallback error handling
   - Shows visual notifications for copy success/failure

## Key Features

- **Multi-language Keyboard Support**: Handles both English 'c' and Korean 'ㅊ' characters using event.key and event.code detection
- **Chart Library Compatibility**: Specifically targets tooltip selectors from Billboard.js, D3, Highcharts, and other popular charting libraries
- **Text Normalization**: Automatically cleans up multi-line tooltip text with excessive whitespace common in dynamically generated content
- **Cross-platform Shortcuts**: Supports both Ctrl+C (Windows/Linux) and Cmd+C (Mac)

## Development Notes

When modifying the extension:

- The `clipboardWrite` permission is required for copy functionality
- Content script runs on `<all_urls>` to work across all websites
- Text length is limited to 100 characters for hovered element content to prevent copying entire page content
- Dynamic tooltip detection uses computed styles to verify visibility (display, visibility, opacity)
- Version updates should follow semantic versioning in manifest.json

## Extension Installation

Load the extension in Chrome:
1. Go to chrome://extensions/
2. Enable "Developer mode"
3. Click "Load unpacked" and select this directory
4. The extension will be active on all web pages

## Testing

Test the extension on pages with:
- Elements with `title` attributes
- Chart libraries like Billboard.js (https://naver.github.io/billboard.js/)
- Dynamic tooltips and popovers
- Both English and Korean keyboard layouts