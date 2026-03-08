import { describe, it, expect, beforeEach } from 'vitest';
import { JSDOM } from 'jsdom';

/**
 * Comprehensive HTML Elements Test Suite
 * Advanced test cases covering various HTML elements and patterns
 * Tests focus on: forms, interactive elements, semantic structure, and edge cases
 */

describe('HTML Elements - Comprehensive Test Suite', () => {
  let dom;
  let document;

  // Test HTML with various element types
  const comprehensiveHTML = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta name="description" content="Comprehensive HTML Elements Test">
      <meta name="theme-color" content="#3b82f6">
      <title>HTML Elements Test Page</title>
      <link rel="canonical" href="https://example.com/test">
      <style>
        * { box-sizing: border-box; }
        body { font-family: sans-serif; margin: 0; padding: 0; }
        .sr-only { position: absolute; width: 1px; height: 1px; overflow: hidden; }
        form { max-width: 500px; margin: 2rem auto; }
        fieldset { border: 1px solid #ccc; padding: 1rem; margin: 1rem 0; }
        input, textarea, select { width: 100%; padding: 0.5rem; margin: 0.5rem 0; }
        button { background: #3b82f6; color: white; padding: 0.75rem 1.5rem; border: none; }
        table { width: 100%; border-collapse: collapse; margin: 1rem 0; }
        th, td { border: 1px solid #ddd; padding: 0.75rem; text-align: left; }
      </style>
    </head>
    <body>
      <a href="#main-content" class="sr-only">Skip to main content</a>

      <header role="banner">
        <h1>HTML Elements Test Suite</h1>
        <p>Comprehensive testing of HTML elements</p>
      </header>

      <nav role="navigation" aria-label="Main navigation">
        <ul>
          <li><a href="#forms" data-section="forms">Forms</a></li>
          <li><a href="#tables" data-section="tables">Tables</a></li>
          <li><a href="#lists" data-section="lists">Lists</a></li>
          <li><a href="#media" data-section="media">Media</a></li>
        </ul>
      </nav>

      <main id="main-content" role="main">
        <!-- Forms Section -->
        <section id="forms" aria-labelledby="forms-heading">
          <h2 id="forms-heading">Form Elements</h2>
          <form name="contact-form" id="contact-form" method="post" action="/submit">
            <fieldset>
              <legend>Personal Information</legend>
              <label for="fullname">Full Name:</label>
              <input type="text" id="fullname" name="fullname" required placeholder="John Doe">

              <label for="email">Email:</label>
              <input type="email" id="email" name="email" required placeholder="john@example.com">

              <label for="phone">Phone:</label>
              <input type="tel" id="phone" name="phone" placeholder="+1 (555) 123-4567">

              <label for="country">Country:</label>
              <select id="country" name="country">
                <option value="">Select a country</option>
                <option value="us">United States</option>
                <option value="ca">Canada</option>
                <option value="uk">United Kingdom</option>
              </select>
            </fieldset>

            <fieldset>
              <legend>Preferences</legend>
              <div>
                <input type="checkbox" id="newsletter" name="newsletter" value="yes">
                <label for="newsletter">Subscribe to newsletter</label>
              </div>
              <div>
                <input type="radio" id="contact-email" name="contact-method" value="email" checked>
                <label for="contact-email">Contact via email</label>
              </div>
              <div>
                <input type="radio" id="contact-phone" name="contact-method" value="phone">
                <label for="contact-phone">Contact via phone</label>
              </div>
            </fieldset>

            <fieldset>
              <legend>Message</legend>
              <label for="message">Your Message:</label>
              <textarea id="message" name="message" rows="5" placeholder="Enter your message here..."></textarea>
            </fieldset>

            <button type="submit" id="submit-btn" aria-label="Submit contact form">Submit</button>
            <button type="reset" id="reset-btn" aria-label="Reset form fields">Reset</button>
          </form>
        </section>

        <!-- Tables Section -->
        <section id="tables" aria-labelledby="tables-heading">
          <h2 id="tables-heading">Table Elements</h2>
          <table role="table" aria-label="Skills and proficiency levels">
            <thead>
              <tr>
                <th scope="col">Skill</th>
                <th scope="col">Proficiency</th>
                <th scope="col">Years</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>JavaScript</td>
                <td>Expert</td>
                <td>8+</td>
              </tr>
              <tr>
                <td>React</td>
                <td>Advanced</td>
                <td>5+</td>
              </tr>
              <tr>
                <td>TypeScript</td>
                <td>Advanced</td>
                <td>4+</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td colspan="3">Updated: 2024</td>
              </tr>
            </tfoot>
          </table>
        </section>

        <!-- Lists Section -->
        <section id="lists" aria-labelledby="lists-heading">
          <h2 id="lists-heading">List Elements</h2>

          <h3>Unordered List</h3>
          <ul>
            <li>HTML Semantics</li>
            <li>CSS Styling
              <ul>
                <li>Flexbox</li>
                <li>Grid</li>
              </ul>
            </li>
            <li>JavaScript Programming</li>
          </ul>

          <h3>Ordered List</h3>
          <ol>
            <li>Plan the project</li>
            <li>Design the layout</li>
            <li>Develop the features</li>
            <li>Test thoroughly</li>
            <li>Deploy and monitor</li>
          </ol>

          <h3>Description List</h3>
          <dl>
            <dt>HTML</dt>
            <dd>HyperText Markup Language - provides structure</dd>
            <dt>CSS</dt>
            <dd>Cascading Style Sheets - provides styling</dd>
            <dt>JavaScript</dt>
            <dd>Programming language for interactivity</dd>
          </dl>
        </section>

        <!-- Media Section -->
        <section id="media" aria-labelledby="media-heading">
          <h2 id="media-heading">Media Elements</h2>

          <article>
            <h3>Article Element</h3>
            <p>This is a self-contained article with its own heading and content.</p>
            <time datetime="2024-03-08">March 8, 2024</time>
            <address>
              <a href="mailto:author@example.com">Contact author</a>
            </address>
          </article>

          <blockquote cite="https://example.com/quote">
            <p>This is a blockquote that cites another source.</p>
            <footer>— Author Name</footer>
          </blockquote>

          <details>
            <summary>Click to expand details</summary>
            <p>This content is hidden by default and can be expanded by clicking the summary.</p>
          </details>

          <figure>
            <figcaption>Figure caption: A sample code snippet</figcaption>
            <pre><code>function hello() {
  console.log('Hello World');
}</code></pre>
          </figure>

          <mark>This text is highlighted.</mark>
          <strong>This is strong text.</strong>
          <em>This is emphasized text.</em>
          <small>This is small text.</small>
          <del>This text is deleted.</del>
          <ins>This text is inserted.</ins>
          <code>This is inline code.</code>
          <kbd>Ctrl + C</kbd>
          <var>variable_name</var>
        </section>
      </main>

      <aside role="complementary" aria-label="Sidebar">
        <h2>Related Resources</h2>
        <ul>
          <li><a href="#">HTML Living Standard</a></li>
          <li><a href="#">CSS Specifications</a></li>
          <li><a href="#">JavaScript Documentation</a></li>
        </ul>
      </aside>

      <footer role="contentinfo">
        <p>&copy; 2024 HTML Elements Test. All rights reserved.</p>
        <nav aria-label="Footer navigation">
          <ul>
            <li><a href="#">Privacy</a></li>
            <li><a href="#">Terms</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
      </footer>
    </body>
    </html>
  `;

  beforeEach(() => {
    dom = new JSDOM(comprehensiveHTML);
    document = dom.window.document;
  });

  // ========================
  // 1. BASIC STRUCTURE TESTS
  // ========================
  describe('Basic HTML Structure', () => {
    it('should have valid DOCTYPE', () => {
      expect(document.doctype).toBeTruthy();
      expect(document.doctype.name).toBe('html');
    });

    it('should have html with lang attribute', () => {
      expect(document.documentElement.lang).toBe('en');
    });

    it('should have head with essential meta tags', () => {
      expect(document.head).toBeTruthy();
      expect(document.querySelector('meta[charset]')).toBeTruthy();
      expect(document.querySelector('meta[name="viewport"]')).toBeTruthy();
    });

    it('should have proper title', () => {
      expect(document.title).toBe('HTML Elements Test Page');
    });

    it('should have canonical link', () => {
      const canonical = document.querySelector('link[rel="canonical"]');
      expect(canonical).toBeTruthy();
      expect(canonical.href).toContain('example.com');
    });

    it('should have theme-color meta tag', () => {
      const themeColor = document.querySelector('meta[name="theme-color"]');
      expect(themeColor).toBeTruthy();
      expect(themeColor.getAttribute('content')).toBe('#3b82f6');
    });
  });

  // ========================
  // 2. SEMANTIC STRUCTURE TESTS
  // ========================
  describe('Semantic HTML Structure', () => {
    it('should have semantic header with role="banner"', () => {
      const header = document.querySelector('header[role="banner"]');
      expect(header).toBeTruthy();
    });

    it('should have semantic nav with role="navigation"', () => {
      const nav = document.querySelector('nav[role="navigation"]');
      expect(nav).toBeTruthy();
      expect(nav.getAttribute('aria-label')).toBe('Main navigation');
    });

    it('should have semantic main with role="main"', () => {
      const main = document.querySelector('main[role="main"]');
      expect(main).toBeTruthy();
      expect(main.id).toBe('main-content');
    });

    it('should have semantic aside with role="complementary"', () => {
      const aside = document.querySelector('aside[role="complementary"]');
      expect(aside).toBeTruthy();
      expect(aside.getAttribute('aria-label')).toBe('Sidebar');
    });

    it('should have semantic footer with role="contentinfo"', () => {
      const footer = document.querySelector('footer[role="contentinfo"]');
      expect(footer).toBeTruthy();
    });

    it('should have article element', () => {
      const article = document.querySelector('article');
      expect(article).toBeTruthy();
    });

    it('should have section elements with proper ids', () => {
      expect(document.querySelector('#forms')).toBeTruthy();
      expect(document.querySelector('#tables')).toBeTruthy();
      expect(document.querySelector('#lists')).toBeTruthy();
      expect(document.querySelector('#media')).toBeTruthy();
    });
  });

  // ========================
  // 3. NAVIGATION TESTS
  // ========================
  describe('Navigation Elements', () => {
    it('should have skip to main content link', () => {
      const skipLink = document.querySelector('a.sr-only[href="#main-content"]');
      expect(skipLink).toBeTruthy();
    });

    it('main navigation should have list of links', () => {
      const navList = document.querySelector('nav ul');
      expect(navList).toBeTruthy();
    });

    it('navigation items should have data-section attributes', () => {
      const navItems = document.querySelectorAll('nav a[data-section]');
      expect(navItems.length).toBeGreaterThan(0);
    });

    it('navigation should have at least 4 links', () => {
      const navLinks = document.querySelectorAll('nav a');
      expect(navLinks.length).toBeGreaterThanOrEqual(4);
    });

    it('footer should have navigation', () => {
      const footerNav = document.querySelector('footer nav[aria-label="Footer navigation"]');
      expect(footerNav).toBeTruthy();
    });
  });

  // ========================
  // 4. FORM ELEMENTS TESTS
  // ========================
  describe('Form Elements', () => {
    it('should have form with proper attributes', () => {
      const form = document.querySelector('form');
      expect(form).toBeTruthy();
      expect(form.name).toBe('contact-form');
      expect(form.id).toBe('contact-form');
      expect(form.method).toBe('post');
      expect(form.action).toBe('/submit');
    });

    it('should have fieldsets for organizing form groups', () => {
      const fieldsets = document.querySelectorAll('fieldset');
      expect(fieldsets.length).toBeGreaterThanOrEqual(2);
    });

    it('each fieldset should have legend', () => {
      const fieldsets = document.querySelectorAll('fieldset');
      fieldsets.forEach(fieldset => {
        expect(fieldset.querySelector('legend')).toBeTruthy();
      });
    });

    it('should have text input field', () => {
      const textInput = document.querySelector('input[type="text"]');
      expect(textInput).toBeTruthy();
      expect(textInput.id).toBe('fullname');
      expect(textInput.hasAttribute('required')).toBe(true);
    });

    it('should have email input field', () => {
      const emailInput = document.querySelector('input[type="email"]');
      expect(emailInput).toBeTruthy();
      expect(emailInput.id).toBe('email');
      expect(emailInput.hasAttribute('required')).toBe(true);
    });

    it('should have tel input field', () => {
      const telInput = document.querySelector('input[type="tel"]');
      expect(telInput).toBeTruthy();
      expect(telInput.id).toBe('phone');
    });

    it('should have select/dropdown field', () => {
      const select = document.querySelector('select');
      expect(select).toBeTruthy();
      expect(select.id).toBe('country');
    });

    it('select should have multiple options', () => {
      const options = document.querySelectorAll('select option');
      expect(options.length).toBeGreaterThan(3);
    });

    it('should have checkbox input', () => {
      const checkbox = document.querySelector('input[type="checkbox"]');
      expect(checkbox).toBeTruthy();
      expect(checkbox.id).toBe('newsletter');
    });

    it('should have radio input fields', () => {
      const radios = document.querySelectorAll('input[type="radio"]');
      expect(radios.length).toBeGreaterThanOrEqual(2);
    });

    it('radio buttons should have same name', () => {
      const radios = document.querySelectorAll('input[type="radio"][name="contact-method"]');
      expect(radios.length).toBe(2);
    });

    it('should have textarea field', () => {
      const textarea = document.querySelector('textarea');
      expect(textarea).toBeTruthy();
      expect(textarea.id).toBe('message');
      expect(textarea.getAttribute('rows')).toBeTruthy();
    });

    it('should have submit button', () => {
      const submitBtn = document.querySelector('button[type="submit"]');
      expect(submitBtn).toBeTruthy();
      expect(submitBtn.id).toBe('submit-btn');
    });

    it('should have reset button', () => {
      const resetBtn = document.querySelector('button[type="reset"]');
      expect(resetBtn).toBeTruthy();
      expect(resetBtn.id).toBe('reset-btn');
    });

    it('form inputs should have associated labels', () => {
      const labels = document.querySelectorAll('label[for]');
      expect(labels.length).toBeGreaterThan(0);
    });

    it('all labeled inputs should have matching id', () => {
      const labels = document.querySelectorAll('label[for]');
      labels.forEach(label => {
        const forAttr = label.getAttribute('for');
        const input = document.querySelector(`#${forAttr}`);
        expect(input).toBeTruthy();
      });
    });
  });

  // ========================
  // 5. TABLE ELEMENTS TESTS
  // ========================
  describe('Table Elements', () => {
    it('should have table element', () => {
      const table = document.querySelector('table');
      expect(table).toBeTruthy();
      expect(table.getAttribute('role')).toBe('table');
    });

    it('table should have aria-label', () => {
      const table = document.querySelector('table');
      expect(table.getAttribute('aria-label')).toBeTruthy();
    });

    it('should have thead element', () => {
      const thead = document.querySelector('thead');
      expect(thead).toBeTruthy();
    });

    it('should have tbody element', () => {
      const tbody = document.querySelector('tbody');
      expect(tbody).toBeTruthy();
    });

    it('should have tfoot element', () => {
      const tfoot = document.querySelector('tfoot');
      expect(tfoot).toBeTruthy();
    });

    it('header cells should have scope attribute', () => {
      const headerCells = document.querySelectorAll('th[scope]');
      expect(headerCells.length).toBeGreaterThan(0);
    });

    it('should have at least 3 rows in tbody', () => {
      const rows = document.querySelectorAll('tbody tr');
      expect(rows.length).toBeGreaterThanOrEqual(3);
    });

    it('each row should have matching columns', () => {
      const headerCells = document.querySelectorAll('thead th').length;
      const rows = document.querySelectorAll('tbody tr');
      rows.forEach(row => {
        const cells = row.querySelectorAll('td');
        expect(cells.length).toBeLessThanOrEqual(headerCells);
      });
    });
  });

  // ========================
  // 6. LIST ELEMENTS TESTS
  // ========================
  describe('List Elements', () => {
    it('should have unordered list (ul)', () => {
      const ul = document.querySelector('section#lists > ul');
      expect(ul).toBeTruthy();
    });

    it('unordered list should have list items', () => {
      const listItems = document.querySelectorAll('section#lists > ul > li');
      expect(listItems.length).toBeGreaterThan(0);
    });

    it('should support nested unordered lists', () => {
      const nestedUl = document.querySelector('section#lists ul ul');
      expect(nestedUl).toBeTruthy();
    });

    it('should have ordered list (ol)', () => {
      const ol = document.querySelector('section#lists > ol');
      expect(ol).toBeTruthy();
    });

    it('ordered list should have at least 5 items', () => {
      const listItems = document.querySelectorAll('section#lists > ol > li');
      expect(listItems.length).toBeGreaterThanOrEqual(5);
    });

    it('should have description list (dl)', () => {
      const dl = document.querySelector('dl');
      expect(dl).toBeTruthy();
    });

    it('description list should have dt and dd pairs', () => {
      const dts = document.querySelectorAll('dt');
      const dds = document.querySelectorAll('dd');
      expect(dts.length).toBeGreaterThan(0);
      expect(dds.length).toBe(dts.length);
    });
  });

  // ========================
  // 7. TEXT FORMATTING TESTS
  // ========================
  describe('Text Formatting Elements', () => {
    it('should have strong element', () => {
      const strong = document.querySelector('strong');
      expect(strong).toBeTruthy();
    });

    it('should have emphasis (em) element', () => {
      const em = document.querySelector('em');
      expect(em).toBeTruthy();
    });

    it('should have small element', () => {
      const small = document.querySelector('small');
      expect(small).toBeTruthy();
    });

    it('should have deleted (del) text element', () => {
      const del = document.querySelector('del');
      expect(del).toBeTruthy();
    });

    it('should have inserted (ins) text element', () => {
      const ins = document.querySelector('ins');
      expect(ins).toBeTruthy();
    });

    it('should have code element', () => {
      const code = document.querySelector('code');
      expect(code).toBeTruthy();
    });

    it('should have kbd (keyboard) element', () => {
      const kbd = document.querySelector('kbd');
      expect(kbd).toBeTruthy();
    });

    it('should have var (variable) element', () => {
      const variable = document.querySelector('var');
      expect(variable).toBeTruthy();
    });

    it('should have mark element', () => {
      const mark = document.querySelector('mark');
      expect(mark).toBeTruthy();
    });
  });

  // ========================
  // 8. ADVANCED ELEMENTS TESTS
  // ========================
  describe('Advanced HTML Elements', () => {
    it('should have blockquote with cite attribute', () => {
      const blockquote = document.querySelector('blockquote[cite]');
      expect(blockquote).toBeTruthy();
      expect(blockquote.getAttribute('cite')).toBeTruthy();
    });

    it('should have figure element', () => {
      const figure = document.querySelector('figure');
      expect(figure).toBeTruthy();
    });

    it('figure should have figcaption', () => {
      const figcaption = document.querySelector('figure figcaption');
      expect(figcaption).toBeTruthy();
    });

    it('should have details element', () => {
      const details = document.querySelector('details');
      expect(details).toBeTruthy();
    });

    it('details should have summary element', () => {
      const summary = document.querySelector('details > summary');
      expect(summary).toBeTruthy();
    });

    it('should have time element with datetime', () => {
      const time = document.querySelector('time[datetime]');
      expect(time).toBeTruthy();
      expect(time.getAttribute('datetime')).toBeTruthy();
    });

    it('should have address element', () => {
      const address = document.querySelector('address');
      expect(address).toBeTruthy();
    });

    it('should have pre element for code blocks', () => {
      const pre = document.querySelector('pre');
      expect(pre).toBeTruthy();
    });
  });

  // ========================
  // 9. ACCESSIBILITY TESTS
  // ========================
  describe('Accessibility Features', () => {
    it('should have proper aria-labels on sections', () => {
      const ariaLabeledSections = document.querySelectorAll('section[aria-labelledby]');
      expect(ariaLabeledSections.length).toBeGreaterThan(0);
    });

    it('should have proper ARIA roles', () => {
      expect(document.querySelector('[role="banner"]')).toBeTruthy();
      expect(document.querySelector('[role="main"]')).toBeTruthy();
      expect(document.querySelector('[role="contentinfo"]')).toBeTruthy();
    });

    it('buttons should have aria-labels', () => {
      const buttons = document.querySelectorAll('button');
      buttons.forEach(button => {
        expect(button.getAttribute('aria-label') || button.textContent).toBeTruthy();
      });
    });

    it('should have skip navigation link', () => {
      const skipLink = document.querySelector('.sr-only');
      expect(skipLink).toBeTruthy();
      expect(skipLink.getAttribute('href')).toBe('#main-content');
    });

    it('should have proper heading hierarchy', () => {
      const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
      let lastLevel = 1;

      headings.forEach(heading => {
        const level = parseInt(heading.tagName.charAt(1));
        expect(Math.abs(level - lastLevel)).toBeLessThanOrEqual(1);
        lastLevel = level;
      });
    });

    it('language should be properly set', () => {
      expect(document.documentElement.lang).toBe('en');
    });
  });

  // ========================
  // 10. ATTRIBUTE VALIDATION TESTS
  // ========================
  describe('Attribute Validation', () => {
    it('all links should have href attribute', () => {
      const links = document.querySelectorAll('a');
      links.forEach(link => {
        expect(link.getAttribute('href')).toBeTruthy();
      });
    });

    it('all images should have alt text', () => {
      const images = document.querySelectorAll('img');
      images.forEach(img => {
        expect(img.getAttribute('alt')).toBeTruthy();
      });
    });

    it('input fields should have name attribute', () => {
      const inputs = document.querySelectorAll('input');
      inputs.forEach(input => {
        expect(input.getAttribute('name')).toBeTruthy();
      });
    });

    it('form should have method attribute', () => {
      const form = document.querySelector('form');
      expect(form.getAttribute('method')).toBeTruthy();
    });

    it('textarea should have name attribute', () => {
      const textarea = document.querySelector('textarea');
      expect(textarea.getAttribute('name')).toBeTruthy();
    });
  });

  // ========================
  // 11. CONTENT STRUCTURE TESTS
  // ========================
  describe('Content Structure', () => {
    it('should have meaningful page content', () => {
      const mainContent = document.querySelector('main');
      expect(mainContent.textContent.length).toBeGreaterThan(100);
    });

    it('all sections should have headings', () => {
      const sections = document.querySelectorAll('section');
      sections.forEach(section => {
        const heading = section.querySelector('h2, h3');
        expect(heading).toBeTruthy();
      });
    });

    it('should have no broken section hierarchy', () => {
      const sections = document.querySelectorAll('section');
      expect(sections.length).toBeGreaterThanOrEqual(3);
    });

    it('footer should contain copyright or metadata', () => {
      const footer = document.querySelector('footer');
      expect(footer.textContent).toContain('©');
    });
  });

  // ========================
  // 12. COMPREHENSIVE INTEGRATION TESTS
  // ========================
  describe('Comprehensive Integration', () => {
    it('should have complete valid document structure', () => {
      expect(document.doctype).toBeTruthy();
      expect(document.querySelector('html')).toBeTruthy();
      expect(document.querySelector('head')).toBeTruthy();
      expect(document.querySelector('body')).toBeTruthy();
    });

    it('should have all major semantic elements', () => {
      const header = document.querySelector('header');
      const nav = document.querySelector('nav');
      const main = document.querySelector('main');
      const aside = document.querySelector('aside');
      const footer = document.querySelector('footer');

      expect(header).toBeTruthy();
      expect(nav).toBeTruthy();
      expect(main).toBeTruthy();
      expect(aside).toBeTruthy();
      expect(footer).toBeTruthy();
    });

    it('should have at least 20 interactive elements', () => {
      const interactiveElements = document.querySelectorAll('a, button, input, select, textarea');
      expect(interactiveElements.length).toBeGreaterThanOrEqual(20);
    });

    it('all elements should be properly nested', () => {
      // Test that there are no orphaned elements
      const orphanedElements = document.querySelectorAll('*:not(html):not(head):not(body)');
      orphanedElements.forEach(element => {
        const parent = element.parentElement;
        expect(parent).toBeTruthy();
      });
    });

    it('document should be accessible and semantic', () => {
      // Check for proper semantic structure
      expect(document.querySelector('header')).toBeTruthy();
      expect(document.querySelector('nav')).toBeTruthy();
      expect(document.querySelector('main')).toBeTruthy();
      expect(document.querySelector('footer')).toBeTruthy();

      // Check for ARIA attributes
      const ariaElements = document.querySelectorAll('[aria-label], [aria-labelledby], [role]');
      expect(ariaElements.length).toBeGreaterThan(5);
    });

    it('should have no duplicate IDs', () => {
      const allIds = document.querySelectorAll('[id]');
      const idSet = new Set();

      allIds.forEach(element => {
        const id = element.getAttribute('id');
        expect(idSet.has(id)).toBe(false);
        idSet.add(id);
      });
    });

    it('all sections should be accessible from navigation', () => {
      const navLinks = document.querySelectorAll('nav a[href^="#"]');
      navLinks.forEach(link => {
        const target = link.getAttribute('href');
        const targetElement = document.querySelector(target);
        expect(targetElement).toBeTruthy();
      });
    });
  });
});
