# Chrome Web Store Submission Information

## Extension Details

### Basic Information
- **Name**: Tooltip Copier
- **Version**: 1.0.2
- **Category**: Productivity
- **Language**: English (with Korean keyboard support)

### Short Description (132 characters max)
```
Hover to copy tooltip text instantly with a simple 'C' key press. Works on all websites and chart libraries.
```

### Detailed Description
```
Tooltip Copier is a lightweight Chrome extension that makes it effortless to copy text from tooltips, charts, and hovered elements across any website.

🎯 KEY FEATURES:
• Simple one-key operation: Just press 'C' or 'ㅊ' (Korean) to copy
• Universal compatibility: Works on all websites and web applications
• Chart library optimized: Perfect for Billboard.js, D3, Highcharts, and more
• Smart text cleaning: Automatically formats and cleans multi-line content
• No interference: Doesn't conflict with regular Ctrl+C copy operations
• Multi-language support: English and Korean keyboard layouts
• Visual feedback: Instant notifications confirm successful copying

🔧 HOW IT WORKS:
1. Hover over any element with tooltip text
2. Press the 'C' key (or 'ㅊ' on Korean keyboard)
3. Text is instantly copied to your clipboard!

📊 PERFECT FOR:
• Data analysts working with interactive charts
• Web developers testing tooltip content
• Researchers copying information from data visualizations
• Anyone who needs quick access to tooltip text

🔒 PRIVACY FOCUSED:
• No data collection or transmission
• All processing happens locally in your browser
• Only requires clipboard access for copying functionality
• Open source and transparent

Works seamlessly with popular charting libraries and supports various tooltip types including HTML title attributes, data-tooltip attributes, aria-label attributes, and dynamic chart tooltips.

Transform your browsing experience with effortless tooltip copying!
```

### Keywords/Tags
- tooltip
- copy
- clipboard
- chart
- data
- productivity
- hover
- text
- visualization
- billboard
- d3
- highcharts

## Technical Information

### Permissions Required
- `clipboardWrite`: Required to copy text to the system clipboard
- `activeTab`: Required to inject content script into web pages

### Permissions Justification
```
clipboardWrite: This permission is essential for the core functionality of the extension - copying tooltip text to the user's clipboard. The extension uses the modern Clipboard API (navigator.clipboard.writeText) to safely write text content only.

activeTab: This permission allows the extension to inject its content script into the currently active tab, enabling it to detect hover events and extract tooltip text from web pages. No data is transmitted or stored.
```

## Visual Assets

### Screenshots Needed
1. **Screenshot 1**: Extension in action on a chart website (Billboard.js demo)
   - Show tooltip appearing on hover
   - Show notification confirming copy operation
   - Caption: "Hover over chart elements and press 'C' to copy tooltip data"

2. **Screenshot 2**: Extension working on a regular website with title attributes
   - Show element with title tooltip
   - Show copy notification
   - Caption: "Works with standard HTML tooltips on any website"

3. **Screenshot 3**: Extension settings/installation
   - Show Chrome extensions page with the extension loaded
   - Caption: "Simple installation - no configuration needed"

4. **Screenshot 4**: Multi-language support demonstration
   - Show Korean keyboard layout
   - Show 'ㅊ' key functionality
   - Caption: "Supports both English and Korean keyboards"

### Icon Requirements
- **48x48px**: tooltipcopy_48.png (already exists)
- **128x128px**: Need to create from existing 48px version
- Store icon should be clean, professional, and represent clipboard/copy functionality

## Store Listing Optimization

### Primary Keywords
- tooltip copier
- clipboard extension
- chart data copy
- hover copy text

### Target Audience
- Data analysts and researchers
- Web developers and designers
- Business intelligence professionals
- Students and academics working with data visualizations

### Competitive Advantages
1. **No Conflicts**: Unlike other extensions, doesn't interfere with regular copy operations
2. **Chart Optimized**: Specifically designed for data visualization libraries
3. **Multi-language**: Supports Korean keyboards out of the box
4. **Zero Configuration**: Works immediately after installation
5. **Privacy Focused**: No data collection or external connections

## Review Preparation

### Testing Checklist
- [ ] Test on popular chart libraries (Billboard.js, D3, Highcharts)
- [ ] Test on various websites with different tooltip implementations
- [ ] Verify Korean keyboard functionality
- [ ] Confirm no interference with regular Ctrl+C operations
- [ ] Test clipboard functionality across different browsers
- [ ] Verify visual notifications work correctly
- [ ] Test on mobile/tablet Chrome (if applicable)

### Potential Review Issues & Solutions
1. **Broad Permissions**: 
   - Solution: Clear justification in description and permissions section
   
2. **Content Script Injection**: 
   - Solution: Explain necessity for hover detection and tooltip extraction
   
3. **Clipboard Access**: 
   - Solution: Core functionality requires clipboard write access

### Privacy Policy (if required)
```
This extension does not collect, store, or transmit any personal data. All tooltip text processing occurs locally within your browser. The extension only accesses the clipboard to copy text when you press the designated key. No user data is sent to external servers or third parties.
```

## Post-Launch

### Update Strategy
- Monitor user feedback for additional tooltip selectors
- Add support for more charting libraries as requested
- Improve text cleaning algorithms based on user needs
- Consider adding customizable keyboard shortcuts

### Promotion Channels
- Developer communities (Reddit: r/webdev, r/datascience)
- Chart library documentation/communities
- Productivity tool directories
- Open source community platforms

## Version History for Store
```
Version 1.0.2:
- Improved keyboard shortcut handling to prevent conflicts with regular copy operations
- Enhanced text cleaning for multi-line tooltip content
- Added Korean keyboard support
- Optimized for popular chart libraries

Initial Release (1.0.0):
- Basic tooltip copying functionality
- Support for HTML title, data-tooltip, and aria-label attributes
- Dynamic tooltip detection for chart libraries
- Visual feedback notifications
```