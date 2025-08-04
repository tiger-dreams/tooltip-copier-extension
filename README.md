# Tooltip Copier Chrome Extension

A lightweight Chrome extension that allows you to instantly copy tooltip text and chart data using simple keyboard shortcuts.

![Chrome Extension](https://img.shields.io/badge/Chrome-Extension-green)
![Version](https://img.shields.io/badge/version-1.0.2-blue)
![Manifest](https://img.shields.io/badge/manifest-v3-orange)

## ✨ Features

- **Universal Compatibility**: Works on all websites and web applications
- **Chart Library Support**: Optimized for Billboard.js, D3, Highcharts, and other popular charting libraries
- **Smart Text Cleaning**: Automatically removes excessive whitespace and formats multi-line content
- **Multiple Shortcuts**: Use `Ctrl+C` (`Cmd+C` on Mac) or simply press `C` for quick copying
- **Multi-Language Support**: Supports both English and Korean keyboards (`C`/`ㅊ` keys)
- **Visual Feedback**: Shows confirmation notifications when text is copied

## 🚀 Installation

### From Chrome Web Store
*(Coming soon)*

### Manual Installation (Developer Mode)
1. Clone this repository or download the ZIP file
2. Open Chrome and go to `chrome://extensions/`
3. Enable "Developer mode" in the top right corner
4. Click "Load unpacked" and select the extension folder
5. The extension is now installed and ready to use!

## 📖 How to Use

1. **Hover** over any element with a tooltip or text content
2. **Press** `C` key or `Ctrl+C` (`Cmd+C` on Mac)  
3. **Done!** The text is instantly copied to your clipboard

### Supported Tooltip Types
- HTML `title` attributes
- `data-tooltip` attributes  
- `aria-label` attributes
- Dynamic chart tooltips (Billboard.js, D3, Highcharts, etc.)
- General text content from hovered elements

## 🛠️ Technical Details

- **Manifest Version**: 3
- **Permissions**: `clipboardWrite`, `activeTab`
- **Content Script**: Injected into all pages (`<all_urls>`)
- **Text Processing**: Automatic cleanup of whitespace and line breaks
- **Tooltip Detection**: Uses CSS selectors and computed styles for dynamic content

## 📁 Project Structure

```
my-tooltip-extension/
├── manifest.json          # Extension configuration
├── content.js            # Main functionality 
├── tooltipcopy_48.png    # Extension icon
├── CLAUDE.md            # Development guidance
└── README.md            # This file
```

## 🔧 Development

The extension uses a simple architecture:

1. **Text Extraction**: Captures text from tooltip attributes and visible content
2. **Event Handling**: Listens for mouse hover and keyboard events
3. **Clipboard Operations**: Uses modern Clipboard API for copying text
4. **Visual Feedback**: Shows success/error notifications

### Key Functions
- `getElementText()`: Extracts text from hovered elements
- `findTooltip()`: Locates visible dynamic tooltips
- `cleanText()`: Normalizes and cleans extracted text
- `copyToClipboard()`: Handles clipboard operations

## 🌍 Browser Support

- Chrome (Manifest V3)
- Edge (Chromium-based)
- Other Chromium-based browsers

## 📄 Privacy

This extension:
- ✅ Does not collect any personal data
- ✅ Does not transmit data to external servers  
- ✅ Only requires clipboard access for copying functionality
- ✅ Processes all data locally in your browser

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Inspired by the need to easily copy data from interactive charts
- Built with modern Chrome Extension APIs
- Optimized for popular charting libraries