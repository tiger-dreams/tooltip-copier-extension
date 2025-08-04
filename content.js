let currentTooltipText = null;

// Clean up text by removing excessive whitespace and empty lines
function cleanText(text) {
    if (!text) return null;
    
    return text
        .split('\n')                    // Split by line breaks
        .map(line => line.trim())       // Trim each line
        .filter(line => line.length > 0) // Remove empty lines
        .join(' ')                      // Join with single spaces
        .replace(/\s+/g, ' ')          // Replace multiple spaces with single space
        .trim();                       // Final trim
}

// Simple function to get text from element
function getElementText(element) {
    if (!element) return null;
    
    // Check tooltip attributes
    let text = element.title || 
               element.getAttribute('data-tooltip') || 
               element.getAttribute('aria-label');
    
    // If no tooltip, get text content (but limit it)
    if (!text && element.textContent) {
        text = element.textContent.trim();
        if (text.length > 100) {
            text = text.substring(0, 100) + '...';
        }
    }
    
    return cleanText(text);
}

// Check for visible tooltips (simplified)
function findTooltip() {
    const selectors = [
        '.bb-tooltip',
        '.tooltip', 
        '[class*="tooltip"]',
        '[role="tooltip"]'
    ];
    
    for (const selector of selectors) {
        const elements = document.querySelectorAll(selector);
        for (const el of elements) {
            const style = getComputedStyle(el);
            if (style.display !== 'none' && style.visibility !== 'hidden' && parseFloat(style.opacity) > 0) {
                const text = el.textContent || el.innerText;
                return cleanText(text);
            }
        }
    }
    return null;
}

// Mouse events
document.addEventListener('mouseover', function(event) {
    // Get text from hovered element
    currentTooltipText = getElementText(event.target);
    
    // Also check for dynamic tooltips
    setTimeout(() => {
        const tooltipText = findTooltip();
        if (tooltipText) {
            currentTooltipText = tooltipText;
        }
    }, 100);
});

// Keyboard events
document.addEventListener('keydown', function(event) {
    if (!currentTooltipText) {
        return;
    }
    
    // Ctrl+C or Cmd+C
    if ((event.ctrlKey || event.metaKey) && (event.key === 'c' || event.code === 'KeyC')) {
        event.preventDefault();
        copyToClipboard(currentTooltipText, 'Ctrl+C');
    }
    // 'c' key or 'ㅊ' (Korean keyboard)
    else if ((event.key === 'c' || event.key === 'ㅊ' || event.code === 'KeyC') && !event.ctrlKey && !event.metaKey) {
        copyToClipboard(currentTooltipText, 'C/ㅊ key');
    }
});

function copyToClipboard(text, method) {
    navigator.clipboard.writeText(text).then(() => {
        showNotification(`Copied (${method}): ${text.substring(0, 30)}${text.length > 30 ? '...' : ''}`);
    }).catch(err => {
        showNotification('Copy failed!', true);
    });
}

function showNotification(message, isError = false) {
    // Remove existing notification
    const existing = document.querySelector('.copy-notification');
    if (existing) existing.remove();
    
    const notification = document.createElement('div');
    notification.className = 'copy-notification';
    notification.textContent = message;
    
    // Simple styling
    Object.assign(notification.style, {
        position: 'fixed',
        top: '20px',
        right: '20px',
        padding: '10px 15px',
        backgroundColor: isError ? '#f44336' : '#4caf50',
        color: 'white',
        borderRadius: '4px',
        zIndex: '999999',
        fontSize: '14px',
        fontFamily: 'Arial, sans-serif'
    });
    
    document.body.appendChild(notification);
    
    // Remove after 2 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.remove();
        }
    }, 2000);
}