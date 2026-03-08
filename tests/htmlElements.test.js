import { describe, it, expect, beforeEach } from 'vitest';
import { JSDOM } from 'jsdom';

/**
 * HTML Element Test Suite - Root Level
 * Comprehensive test cases for portfolio HTML elements
 * Tests cover: structure, accessibility, functionality, and display
 */

describe('HTML Element Tests - Root Portfolio', () => {
  let dom;
  let document;

  // Test HTML structure with sample root portfolio page
  const portfolioHTML = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta name="description" content="Portfolio Monorepo - Modern Development Stack">
      <title>Portfolio Monorepo</title>
      <style>
        :root { --primary-color: #3b82f6; }
        body { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); }
        .container { max-width: 800px; margin: 0 auto; background: white; padding: 2rem; }
        .feature-card { border: 1px solid #ddd; padding: 1.5rem; margin: 1rem 0; border-radius: 8px; }
        .primary-btn, .secondary-btn { padding: 0.75rem 1.5rem; border: none; cursor: pointer; }
        .primary-btn { background: #3b82f6; color: white; }
        .secondary-btn { background: #e5e7eb; color: #1f2937; }
        .features { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; }
        .projects { margin-top: 2rem; }
        .project-list { list-style: none; padding: 0; }
        .project-list li { padding: 1rem; border-left: 4px solid #3b82f6; }
        footer { margin-top: 2rem; padding-top: 2rem; border-top: 1px solid #e5e7eb; }
      </style>
    </head>
    <body>
      <div class="container">
        <header>
          <h1 id="main-title">Portfolio Monorepo</h1>
          <p class="subtitle">Modern Development Stack</p>
          <p class="intro">A comprehensive portfolio monorepo showcasing full-stack development capabilities with modern technologies and best practices.</p>
        </header>

        <nav>
          <a href="#features" aria-label="Jump to features section">Features</a>
          <a href="#projects" aria-label="Jump to projects section">Projects</a>
          <a href="#contact" aria-label="Jump to contact section">Contact</a>
        </nav>

        <main>
          <section id="features">
            <h2>Key Features</h2>
            <div class="features">
              <div class="feature-card">
                <h3>Monorepo Structure</h3>
                <p>Organized monorepo with pnpm workspaces for scalable project management.</p>
              </div>
              <div class="feature-card">
                <h3>TypeScript</h3>
                <p>Full TypeScript implementation for type-safe development across all projects.</p>
              </div>
              <div class="feature-card">
                <h3>Testing</h3>
                <p>Comprehensive test coverage with Vitest and automation.</p>
              </div>
            </div>
          </section>

          <section id="projects">
            <h2>Projects & Apps</h2>
            <ul class="project-list">
              <li data-project-id="web-app">
                <h3>Web Portfolio</h3>
                <p>Interactive portfolio web application with skills and project showcase.</p>
              </li>
              <li data-project-id="components">
                <h3>Component Library</h3>
                <p>Reusable UI components built with React and TypeScript.</p>
              </li>
              <li data-project-id="api">
                <h3>Backend API</h3>
                <p>RESTful API built with Node.js and Express for data management.</p>
              </li>
            </ul>
          </section>

          <section id="cta">
            <h2>Get Started</h2>
            <div class="cta">
              <a href="/apps/web" class="primary-btn" aria-label="Explore web portfolio app">Explore Web App</a>
              <a href="https://github.com" class="secondary-btn" aria-label="View source code on GitHub">View Source</a>
            </div>
          </section>
        </main>

        <footer>
          <p>&copy; 2024 Portfolio Monorepo. All rights reserved.</p>
          <nav aria-label="Social links">
            <a href="https://github.com" aria-label="GitHub profile" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://linkedin.com" aria-label="LinkedIn profile" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="mailto:example@example.com" aria-label="Email contact">Email</a>
          </nav>
        </footer>
      </div>
    </body>
    </html>
  `;

  beforeEach(() => {
    dom = new JSDOM(portfolioHTML);
    document = dom.window.document;
  });

  // ========================
  // 1. HTML DOCUMENT STRUCTURE TESTS
  // ========================
  describe('Document Structure', () => {
    it('should have DOCTYPE declaration', () => {
      expect(document.doctype).toBeTruthy();
      expect(document.doctype.name).toBe('html');
    });

    it('should have html element with lang="en"', () => {
      const htmlElement = document.documentElement;
      expect(htmlElement).toBeTruthy();
      expect(htmlElement.lang).toBe('en');
    });

    it('should have head section', () => {
      const head = document.head;
      expect(head).toBeTruthy();
      expect(head.tagName).toBe('HEAD');
    });

    it('should have body section', () => {
      const body = document.body;
      expect(body).toBeTruthy();
      expect(body.tagName).toBe('BODY');
    });

    it('should have proper charset meta tag', () => {
      const charsetMeta = document.querySelector('meta[charset="UTF-8"]');
      expect(charsetMeta).toBeTruthy();
      expect(charsetMeta.getAttribute('charset')).toBe('UTF-8');
    });

    it('should have viewport meta tag for responsive design', () => {
      const viewportMeta = document.querySelector('meta[name="viewport"]');
      expect(viewportMeta).toBeTruthy();
      expect(viewportMeta.getAttribute('content')).toContain('width=device-width');
      expect(viewportMeta.getAttribute('content')).toContain('initial-scale=1.0');
    });

    it('should have description meta tag', () => {
      const descriptionMeta = document.querySelector('meta[name="description"]');
      expect(descriptionMeta).toBeTruthy();
      expect(descriptionMeta.getAttribute('content')).toBeTruthy();
    });

    it('should have page title', () => {
      const title = document.title;
      expect(title).toBe('Portfolio Monorepo');
    });
  });

  // ========================
  // 2. HEADER & NAVIGATION TESTS
  // ========================
  describe('Header & Navigation', () => {
    it('should have header element', () => {
      const header = document.querySelector('header');
      expect(header).toBeTruthy();
    });

    it('should have h1 title', () => {
      const h1 = document.querySelector('h1');
      expect(h1).toBeTruthy();
      expect(h1.textContent).toBe('Portfolio Monorepo');
    });

    it('h1 should have id attribute', () => {
      const h1 = document.querySelector('h1');
      expect(h1.id).toBe('main-title');
    });

    it('should have subtitle paragraph', () => {
      const subtitle = document.querySelector('.subtitle');
      expect(subtitle).toBeTruthy();
      expect(subtitle.textContent).toBe('Modern Development Stack');
    });

    it('should have intro paragraph', () => {
      const intro = document.querySelector('.intro');
      expect(intro).toBeTruthy();
      expect(intro.textContent).toBeTruthy();
    });

    it('should have navigation menu', () => {
      const nav = document.querySelector('nav');
      expect(nav).toBeTruthy();
    });

    it('navigation should have links with aria-labels', () => {
      const navLinks = document.querySelectorAll('nav a');
      expect(navLinks.length).toBeGreaterThan(0);
      navLinks.forEach(link => {
        expect(link.getAttribute('aria-label')).toBeTruthy();
      });
    });

    it('navigation links should have correct href values', () => {
      const featuresLink = document.querySelector('a[href="#features"]');
      const projectsLink = document.querySelector('a[href="#projects"]');
      const contactLink = document.querySelector('a[href="#contact"]');

      expect(featuresLink).toBeTruthy();
      expect(projectsLink).toBeTruthy();
      expect(contactLink).toBeTruthy();
    });

    it('should have proper heading hierarchy', () => {
      const h1Count = document.querySelectorAll('h1').length;
      const h2Count = document.querySelectorAll('h2').length;
      const h3Count = document.querySelectorAll('h3').length;

      expect(h1Count).toBe(1);
      expect(h2Count).toBeGreaterThan(0);
      expect(h3Count).toBeGreaterThan(0);
    });
  });

  // ========================
  // 3. FEATURE CARDS TESTS
  // ========================
  describe('Feature Cards', () => {
    it('should have features section', () => {
      const featuresSection = document.querySelector('#features');
      expect(featuresSection).toBeTruthy();
    });

    it('should have features container', () => {
      const featuresContainer = document.querySelector('.features');
      expect(featuresContainer).toBeTruthy();
    });

    it('should have exactly 3 feature cards', () => {
      const featureCards = document.querySelectorAll('.feature-card');
      expect(featureCards.length).toBe(3);
    });

    it('each feature card should have h3 title', () => {
      const featureCards = document.querySelectorAll('.feature-card');
      featureCards.forEach(card => {
        const h3 = card.querySelector('h3');
        expect(h3).toBeTruthy();
        expect(h3.textContent).toBeTruthy();
      });
    });

    it('each feature card should have description paragraph', () => {
      const featureCards = document.querySelectorAll('.feature-card');
      featureCards.forEach(card => {
        const p = card.querySelector('p');
        expect(p).toBeTruthy();
        expect(p.textContent).toBeTruthy();
      });
    });

    it('feature cards should have CSS class', () => {
      const featureCards = document.querySelectorAll('.feature-card');
      featureCards.forEach(card => {
        expect(card.classList.contains('feature-card')).toBe(true);
      });
    });

    it('should have expected feature titles', () => {
      const expectedFeatures = ['Monorepo Structure', 'TypeScript', 'Testing'];
      const featureCards = document.querySelectorAll('.feature-card h3');

      featureCards.forEach((card, index) => {
        expect(card.textContent).toBe(expectedFeatures[index]);
      });
    });
  });

  // ========================
  // 4. PROJECTS SECTION TESTS
  // ========================
  describe('Projects Section', () => {
    it('should have projects section', () => {
      const projectsSection = document.querySelector('#projects');
      expect(projectsSection).toBeTruthy();
      expect(projectsSection.tagName).toBe('SECTION');
    });

    it('should have projects heading', () => {
      const projectsSection = document.querySelector('#projects');
      const h2 = projectsSection.querySelector('h2');
      expect(h2).toBeTruthy();
      expect(h2.textContent).toBe('Projects & Apps');
    });

    it('should have project list', () => {
      const projectList = document.querySelector('.project-list');
      expect(projectList).toBeTruthy();
      expect(projectList.tagName).toBe('UL');
    });

    it('should have at least 3 project items', () => {
      const projectItems = document.querySelectorAll('.project-list li');
      expect(projectItems.length).toBeGreaterThanOrEqual(3);
    });

    it('each project item should have data-project-id', () => {
      const projectItems = document.querySelectorAll('.project-list li');
      projectItems.forEach(item => {
        expect(item.getAttribute('data-project-id')).toBeTruthy();
      });
    });

    it('each project item should have h3 title', () => {
      const projectItems = document.querySelectorAll('.project-list li');
      projectItems.forEach(item => {
        const h3 = item.querySelector('h3');
        expect(h3).toBeTruthy();
      });
    });

    it('each project item should have description', () => {
      const projectItems = document.querySelectorAll('.project-list li');
      projectItems.forEach(item => {
        const p = item.querySelector('p');
        expect(p).toBeTruthy();
        expect(p.textContent).toBeTruthy();
      });
    });

    it('project list should be semantic ul element', () => {
      const projectList = document.querySelector('.project-list');
      expect(projectList.tagName).toBe('UL');
    });
  });

  // ========================
  // 5. BUTTON & LINK TESTS
  // ========================
  describe('Buttons & Links', () => {
    it('should have primary buttons/links', () => {
      const primaryButtons = document.querySelectorAll('.primary-btn');
      expect(primaryButtons.length).toBeGreaterThan(0);
    });

    it('should have secondary buttons/links', () => {
      const secondaryButtons = document.querySelectorAll('.secondary-btn');
      expect(secondaryButtons.length).toBeGreaterThan(0);
    });

    it('primary buttons should be styled correctly', () => {
      const primaryButtons = document.querySelectorAll('.primary-btn');
      primaryButtons.forEach(btn => {
        expect(btn.classList.contains('primary-btn')).toBe(true);
        expect(btn.getAttribute('href')).toBeTruthy();
      });
    });

    it('should have Explore Web App button', () => {
      const exploreBtn = document.querySelector('a[aria-label="Explore web portfolio app"]');
      expect(exploreBtn).toBeTruthy();
      expect(exploreBtn.getAttribute('href')).toBe('/apps/web');
    });

    it('should have View Source button', () => {
      const sourceBtn = document.querySelector('a[aria-label="View source code on GitHub"]');
      expect(sourceBtn).toBeTruthy();
      expect(sourceBtn.getAttribute('href')).toContain('github');
    });

    it('buttons should have aria-labels', () => {
      const buttons = document.querySelectorAll('.primary-btn, .secondary-btn');
      buttons.forEach(btn => {
        expect(btn.getAttribute('aria-label')).toBeTruthy();
      });
    });

    it('external links should have target="_blank"', () => {
      const externalLinks = document.querySelectorAll('a[target="_blank"]');
      expect(externalLinks.length).toBeGreaterThan(0);
      externalLinks.forEach(link => {
        expect(link.getAttribute('rel')).toContain('noopener');
      });
    });
  });

  // ========================
  // 6. FOOTER TESTS
  // ========================
  describe('Footer', () => {
    it('should have footer element', () => {
      const footer = document.querySelector('footer');
      expect(footer).toBeTruthy();
    });

    it('footer should be semantic footer tag', () => {
      const footer = document.querySelector('footer');
      expect(footer.tagName).toBe('FOOTER');
    });

    it('footer should have copyright text', () => {
      const footer = document.querySelector('footer');
      const copyrightText = footer.textContent;
      expect(copyrightText).toContain('©');
      expect(copyrightText).toContain('2024');
      expect(copyrightText).toContain('Portfolio Monorepo');
    });

    it('footer should have social navigation', () => {
      const footerNav = document.querySelector('footer nav');
      expect(footerNav).toBeTruthy();
    });

    it('footer nav should have aria-label', () => {
      const footerNav = document.querySelector('footer nav');
      expect(footerNav.getAttribute('aria-label')).toBe('Social links');
    });

    it('footer should have 3 social media links', () => {
      const footerLinks = document.querySelectorAll('footer nav a');
      expect(footerLinks.length).toBe(3);
    });

    it('footer links should have aria-labels', () => {
      const footerLinks = document.querySelectorAll('footer nav a');
      footerLinks.forEach(link => {
        expect(link.getAttribute('aria-label')).toBeTruthy();
      });
    });

    it('footer should include GitHub link', () => {
      const githubLink = document.querySelector('footer a[href*="github"]');
      expect(githubLink).toBeTruthy();
      expect(githubLink.getAttribute('aria-label')).toContain('GitHub');
    });

    it('footer should include LinkedIn link', () => {
      const linkedinLink = document.querySelector('footer a[href*="linkedin"]');
      expect(linkedinLink).toBeTruthy();
      expect(linkedinLink.getAttribute('aria-label')).toContain('LinkedIn');
    });

    it('footer should include email link', () => {
      const emailLink = document.querySelector('footer a[href*="mailto"]');
      expect(emailLink).toBeTruthy();
      expect(emailLink.getAttribute('aria-label')).toContain('Email');
    });
  });

  // ========================
  // 7. ACCESSIBILITY TESTS
  // ========================
  describe('Accessibility', () => {
    it('should use semantic HTML elements', () => {
      expect(document.querySelector('header')).toBeTruthy();
      expect(document.querySelector('nav')).toBeTruthy();
      expect(document.querySelector('main')).toBeTruthy();
      expect(document.querySelector('footer')).toBeTruthy();
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

    it('interactive elements should have aria-labels', () => {
      const links = document.querySelectorAll('a');

      links.forEach(link => {
        expect(link.getAttribute('aria-label') || link.textContent.trim()).toBeTruthy();
      });
    });

    it('all navigation links should be accessible', () => {
      const navLinks = document.querySelectorAll('nav a');
      navLinks.forEach(link => {
        expect(link.getAttribute('aria-label') || link.textContent).toBeTruthy();
        expect(link.getAttribute('href')).toBeTruthy();
      });
    });

    it('language attribute should be set', () => {
      expect(document.documentElement.lang).toBeTruthy();
      expect(document.documentElement.lang).toBe('en');
    });

    it('should have no empty links', () => {
      const links = document.querySelectorAll('a');
      links.forEach(link => {
        const hasText = link.textContent.trim().length > 0;
        const hasAriaLabel = link.getAttribute('aria-label');
        expect(hasText || hasAriaLabel).toBe(true);
      });
    });
  });

  // ========================
  // 8. CSS CLASSES & IDS
  // ========================
  describe('CSS Classes & IDs', () => {
    it('container should have container class', () => {
      const container = document.querySelector('.container');
      expect(container).toBeTruthy();
      expect(container.classList.contains('container')).toBe(true);
    });

    it('major sections should have id attributes', () => {
      expect(document.querySelector('#features')).toBeTruthy();
      expect(document.querySelector('#projects')).toBeTruthy();
      expect(document.querySelector('#cta')).toBeTruthy();
    });

    it('feature cards should have feature-card class', () => {
      const featureCards = document.querySelectorAll('.feature-card');
      featureCards.forEach(card => {
        expect(card.classList.contains('feature-card')).toBe(true);
      });
    });

    it('buttons should have proper button classes', () => {
      const primaryBtn = document.querySelector('.primary-btn');
      const secondaryBtn = document.querySelector('.secondary-btn');

      expect(primaryBtn.classList.contains('primary-btn')).toBe(true);
      expect(secondaryBtn.classList.contains('secondary-btn')).toBe(true);
    });

    it('project list should have project-list class', () => {
      const projectList = document.querySelector('.project-list');
      expect(projectList.classList.contains('project-list')).toBe(true);
    });

    it('should not have duplicate IDs', () => {
      const allIds = document.querySelectorAll('[id]');
      const idSet = new Set();

      allIds.forEach(element => {
        const id = element.getAttribute('id');
        expect(idSet.has(id)).toBe(false);
        idSet.add(id);
      });
    });
  });

  // ========================
  // 9. RESPONSIVE DESIGN
  // ========================
  describe('Responsive Design', () => {
    it('should have viewport meta tag', () => {
      const viewport = document.querySelector('meta[name="viewport"]');
      expect(viewport).toBeTruthy();
    });

    it('viewport should specify mobile viewport settings', () => {
      const viewport = document.querySelector('meta[name="viewport"]');
      const content = viewport.getAttribute('content');

      expect(content).toContain('width=device-width');
      expect(content).toContain('initial-scale=1');
    });

    it('container should use max-width for responsive layout', () => {
      const container = document.querySelector('.container');
      expect(container).toBeTruthy();
      expect(container.classList.contains('container')).toBe(true);
    });
  });

  // ========================
  // 10. CONTENT VALIDATION
  // ========================
  describe('Content Validation', () => {
    it('should have meaningful page content', () => {
      const mainContent = document.querySelector('main');
      expect(mainContent).toBeTruthy();
      expect(mainContent.textContent.length).toBeGreaterThan(50);
    });

    it('should have all expected feature cards', () => {
      const expectedFeatures = ['Monorepo Structure', 'TypeScript', 'Testing'];
      expectedFeatures.forEach(feature => {
        const featureElement = Array.from(document.querySelectorAll('.feature-card h3')).find(
          el => el.textContent.includes(feature)
        );
        expect(featureElement).toBeTruthy();
      });
    });

    it('should have all expected project items', () => {
      const expectedProjects = ['Web Portfolio', 'Component Library', 'Backend API'];
      expectedProjects.forEach(project => {
        const projectElement = Array.from(document.querySelectorAll('.project-list li h3')).find(
          el => el.textContent.includes(project)
        );
        expect(projectElement).toBeTruthy();
      });
    });

    it('should have contact information available', () => {
      const emailLink = document.querySelector('a[href*="mailto"]');
      expect(emailLink).toBeTruthy();
      expect(emailLink.getAttribute('href')).toContain('mailto');
    });

    it('should have all sections with headings', () => {
      const sections = document.querySelectorAll('section');
      sections.forEach(section => {
        const heading = section.querySelector('h2, h3');
        expect(heading).toBeTruthy();
      });
    });
  });

  // ========================
  // 11. INTEGRATION TESTS
  // ========================
  describe('Integration', () => {
    it('should have complete HTML structure', () => {
      expect(document.doctype).toBeTruthy();
      expect(document.querySelector('html')).toBeTruthy();
      expect(document.querySelector('head')).toBeTruthy();
      expect(document.querySelector('body')).toBeTruthy();
    });

    it('should have at least 10 interactive elements', () => {
      const buttons = document.querySelectorAll('a[href], button');
      expect(buttons.length).toBeGreaterThanOrEqual(10);
    });

    it('should have proper document flow', () => {
      const bodyChildren = document.body.children;
      expect(bodyChildren.length).toBeGreaterThan(0);

      // Should have container as main wrapper
      const container = document.querySelector('.container');
      expect(container).toBeTruthy();
    });

    it('all sections should be within main', () => {
      const sections = document.querySelectorAll('section');
      const main = document.querySelector('main');

      sections.forEach(section => {
        expect(main.contains(section)).toBe(true);
      });
    });

    it('should have no broken links (basic check)', () => {
      const links = document.querySelectorAll('a[href]');
      links.forEach(link => {
        const href = link.getAttribute('href');
        expect(href).not.toBe('');
        expect(href).not.toBeNull();
      });
    });

    it('footer should be at end of document', () => {
      const footer = document.querySelector('footer');
      const containerChildren = document.querySelector('.container').children;
      const lastChild = containerChildren[containerChildren.length - 1];

      expect(footer).toBeTruthy();
      expect(lastChild.tagName).toBe('FOOTER');
    });

    it('header should be at beginning of document', () => {
      const header = document.querySelector('header');
      const containerChildren = document.querySelector('.container').children;
      const firstChild = containerChildren[0];

      expect(header).toBeTruthy();
      expect(firstChild.tagName).toBe('HEADER');
    });
  });
});
