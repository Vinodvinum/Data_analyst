/* ========================================
   GLOBAL JAVASCRIPT - Data Analyst Hub
   Used across all HTML pages
   ======================================== */

// ========== INITIALIZATION ==========
document.addEventListener('DOMContentLoaded', function () {
  initializePageFeatures();
  setupTableOfContents();
  setupSearch();
  setupTheme();
});

// ========== PAGE FEATURES INITIALIZATION ==========
function initializePageFeatures() {
  // Add smooth scroll behavior
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // Add copy-to-clipboard for code blocks
  setupCodeCopy();

  // Add expand/collapse for answer blocks
  setupAnswerToggle();

  // Log page load for analytics
  logPageView();
}

// ========== CODE COPY FUNCTIONALITY ==========
function setupCodeCopy() {
  document.querySelectorAll('pre').forEach(preBlock => {
    // Create copy button
    const copyBtn = document.createElement('button');
    copyBtn.textContent = '📋 Copy';
    copyBtn.className = 'btn-copy';
    copyBtn.style.cssText = `
      position: absolute;
      top: 8px;
      right: 8px;
      padding: 4px 8px;
      background: var(--g2);
      color: #fff;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-size: 0.8em;
      opacity: 0;
      transition: opacity 0.2s;
    `;

    // Make pre block relatively positioned
    preBlock.style.position = 'relative';
    preBlock.appendChild(copyBtn);

    // Show/hide button on hover
    preBlock.addEventListener('mouseenter', () => {
      copyBtn.style.opacity = '1';
    });

    preBlock.addEventListener('mouseleave', () => {
      copyBtn.style.opacity = '0';
    });

    // Copy functionality
    copyBtn.addEventListener('click', async () => {
      const codeText = preBlock.textContent;
      try {
        await navigator.clipboard.writeText(codeText);
        const originalText = copyBtn.textContent;
        copyBtn.textContent = '✓ Copied!';
        setTimeout(() => {
          copyBtn.textContent = originalText;
        }, 2000);
      } catch (err) {
        console.error('Failed to copy:', err);
      }
    });
  });
}

// ========== ANSWER TOGGLE FUNCTIONALITY ==========
function setupAnswerToggle() {
  document.querySelectorAll('.answer, .explanation').forEach(block => {
    block.style.cursor = 'pointer';
    block.title = 'Click to toggle details';
    let isExpanded = true;

    block.addEventListener('click', function (e) {
      if (e.target === this) {
        isExpanded = !isExpanded;
        this.style.maxHeight = isExpanded ? 'none' : '50px';
        this.style.overflow = isExpanded ? 'visible' : 'hidden';
        this.style.opacity = isExpanded ? '1' : '0.7';
      }
    });
  });
}

// ========== TABLE OF CONTENTS ==========
function setupTableOfContents() {
  const h2s = document.querySelectorAll('h2');
  if (h2s.length < 3) return; // Only add TOC if there are 3+ sections

  const toc = document.createElement('div');
  toc.className = 'table-of-contents';
  toc.style.cssText = `
    background: #f0f6ff;
    border: 1px solid var(--line);
    border-radius: 8px;
    padding: 16px;
    margin-bottom: 20px;
    position: sticky;
    top: 80px;
    z-index: 50;
  `;

  const tocTitle = document.createElement('h4');
  tocTitle.textContent = '📑 Quick Navigation';
  tocTitle.style.marginTop = '0';
  toc.appendChild(tocTitle);

  const tocList = document.createElement('ul');
  tocList.style.cssText = `
    list-style: none;
    padding: 0;
    margin: 0;
  `;

  h2s.forEach((h2, index) => {
    if (!h2.id) {
      h2.id = 'section-' + index;
    }

    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = '#' + h2.id;
    a.textContent = h2.textContent;
    a.style.cssText = `
      display: block;
      padding: 6px 0;
      color: var(--g2);
      text-decoration: none;
    `;

    a.addEventListener('mouseenter', () => {
      a.style.textDecoration = 'underline';
    });

    a.addEventListener('mouseleave', () => {
      a.style.textDecoration = 'none';
    });

    li.appendChild(a);
    tocList.appendChild(li);
  });

  toc.appendChild(tocList);

  // Insert after hero section
  const heroSection = document.querySelector('.hero');
  if (heroSection) {
    heroSection.parentNode.insertBefore(toc, heroSection.nextSibling);
  }
}

// ========== SEARCH FUNCTIONALITY ==========
function setupSearch() {
  // Create search box
  const searchContainer = document.createElement('div');
  searchContainer.style.cssText = `
    position: fixed;
    top: 60px;
    right: 20px;
    z-index: 200;
  `;

  const searchInput = document.createElement('input');
  searchInput.type = 'text';
  searchInput.placeholder = '🔍 Find on page...';
  searchInput.className = 'search-input';
  searchInput.style.cssText = `
    padding: 8px 12px;
    border: 1px solid var(--line);
    border-radius: 8px;
    font-size: 0.9em;
    width: 200px;
    background: #fff;
    color: var(--ink);
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  `;

  const highlightResults = function (searchTerm) {
    // Remove previous highlights
    document.querySelectorAll('.search-highlight').forEach(el => {
      el.style.backgroundColor = 'transparent';
    });

    if (!searchTerm) return;

    const regex = new RegExp(searchTerm, 'gi');
    const walker = document.createTreeWalker(
      document.body,
      NodeFilter.SHOW_TEXT,
      null,
      false
    );

    const nodesToReplace = [];
    let node;

    while (node = walker.nextNode()) {
      if (regex.test(node.textContent)) {
        nodesToReplace.push(node);
      }
    }

    nodesToReplace.forEach(node => {
      const html = node.textContent.replace(regex, match => {
        return '<span class="search-highlight" style="background-color: yellow; padding: 2px; border-radius: 2px;">' + match + '</span>';
      });

      const span = document.createElement('span');
      span.innerHTML = html;
      node.parentNode.replaceChild(span, node);
    });

    // Reset regex
    regex.lastIndex = 0;
  };

  searchInput.addEventListener('input', (e) => {
    highlightResults(e.target.value);
  });

  searchContainer.appendChild(searchInput);
  document.body.appendChild(searchContainer);

  // Close search on mobile
  if (window.innerWidth < 768) {
    searchContainer.style.display = 'none';
  }
}

// ========== THEME TOGGLE ==========
function setupTheme() {
  const THEMES = ['light', 'dark', 'ocean', 'forest', 'sunset', 'purple'];
  const savedTheme = localStorage.getItem('data-theme') || 'light';
  applyTheme(savedTheme);

  // Create theme toggle button (main palette button)
  const themeToggle = document.createElement('button');
  themeToggle.className = 'theme-toggle';
  themeToggle.textContent = '🎨';
  themeToggle.setAttribute('aria-label', 'Open theme selector');
  themeToggle.setAttribute('title', 'Click to select theme');

  // Create theme selector panel
  const themeSelector = document.createElement('div');
  themeSelector.className = 'theme-selector';

  const selectorTitle = document.createElement('h4');
  selectorTitle.textContent = 'Select Theme';
  selectorTitle.style.margin = '0 0 16px 0';
  themeSelector.appendChild(selectorTitle);

  const themeGrid = document.createElement('div');
  themeGrid.className = 'theme-grid';

  THEMES.forEach(theme => {
    const themeBtn = document.createElement('button');
    themeBtn.className = 'theme-btn';
    themeBtn.textContent = theme.charAt(0).toUpperCase() + theme.slice(1);
    themeBtn.setAttribute('data-theme', theme);
    themeBtn.setAttribute('aria-pressed', theme === savedTheme);

    if (theme === savedTheme) {
      themeBtn.classList.add('active');
    }

    themeBtn.addEventListener('click', () => {
      localStorage.setItem('data-theme', theme);
      applyTheme(theme);

      // Update active state
      document.querySelectorAll('.theme-btn').forEach(btn => {
        btn.classList.remove('active');
        btn.setAttribute('aria-pressed', false);
      });
      themeBtn.classList.add('active');
      themeBtn.setAttribute('aria-pressed', true);
    });

    themeGrid.appendChild(themeBtn);
  });

  themeSelector.appendChild(themeGrid);

  // Toggle panel visibility
  themeToggle.addEventListener('click', () => {
    themeSelector.classList.toggle('active');
    const isActive = themeSelector.classList.contains('active');
    themeToggle.setAttribute('aria-expanded', isActive);
  });

  // Close panel when clicking outside
  document.addEventListener('click', (e) => {
    if (!themeToggle.contains(e.target) && !themeSelector.contains(e.target)) {
      themeSelector.classList.remove('active');
      themeToggle.setAttribute('aria-expanded', false);
    }
  });

  document.body.appendChild(themeToggle);
  document.body.appendChild(themeSelector);
}

// ========== APPLY THEME ==========
function applyTheme(theme) {
  // Set data-theme attribute on html element for CSS to react
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('data-theme', theme);

  // Optional: Add animation class on theme change
  document.documentElement.style.transition = 'background-color 0.3s ease, color 0.3s ease';
}

// ========== ANALYTICS & LOGGING ==========
function logPageView() {
  const pageTitle = document.title;
  const timestamp = new Date().toISOString();
  console.log(`📊 Page loaded: ${pageTitle} at ${timestamp}`);

  // You could send this to an analytics service
  // Example: sendToAnalytics({ event: 'page_view', title: pageTitle })
}

// ========== UTILITY FUNCTIONS ==========
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function openInNewTab(url) {
  window.open(url, '_blank');
}

function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(() => {
    console.log('Copied to clipboard:', text);
  });
}

function getUrlParameter(paramName) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(paramName);
}

// ========== PERFORMANCE MONITORING ==========
window.addEventListener('load', () => {
  if (window.performance && window.performance.timing) {
    const perfData = window.performance.timing;
    const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
    console.log(`⏱️ Page loaded in ${pageLoadTime}ms`);
  }
});

// ========== ERROR HANDLING ==========
window.addEventListener('error', (event) => {
  console.error('Error occurred:', event.error);
});

// ========== RESPONSIVE BEHAVIOR ==========
window.addEventListener('resize', () => {
  const searchContainer = document.querySelector('input[placeholder*="Find"]')?.parentElement;
  if (searchContainer) {
    if (window.innerWidth < 768) {
      searchContainer.style.display = 'none';
    } else {
      searchContainer.style.display = 'block';
    }
  }
});