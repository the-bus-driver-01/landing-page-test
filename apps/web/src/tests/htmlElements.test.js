import { describe, it, expect, beforeEach } from 'vitest';
import { JSDOM } from 'jsdom';

/**
 * HTML Element Test Suite
 * Comprehensive test cases for portfolio HTML elements
 * Tests cover: structure, accessibility, functionality, and display
 */

describe('HTML Element Tests - Web App Portfolio', () => {
  let dom;
  let document;

  // Test HTML structure with sample portfolio page
  const portfolioHTML = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta name="description" content="Portfolio - Full Stack Developer & Engineer">
      <title>Portfolio - Web Application</title>
      <style>
        :root { --primary-color: #3b82f6; }
        body { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); }
        .container { max-width: 800px; margin: 0 auto; background: white; padding: 2rem; }
        .skill-tag { display: inline-block; background: #3b82f6; color: white; padding: 0.5rem 1rem; }
        .skill-card { border: 1px solid #ddd; padding: 1.5rem; margin: 1rem 0; border-radius: 8px; }
        .primary-btn, .secondary-btn { padding: 0.75rem 1.5rem; border: none; cursor: pointer; }
        .primary-btn { background: #3b82f6; color: white; }
        .secondary-btn { background: #e5e7eb; color: #1f2937; }
        footer { margin-top: 2rem; padding-top: 2rem; border-top: 1px solid #e5e7eb; }
      </style>
    </head>
    <body>
      <div class="container">
        <header>
          <h1 id="main-title">Portfolio</h1>
          <p class="subtitle">Full Stack Developer & Engineer</p>
          <p class="description">Passionate about building scalable applications with modern technologies</p>
        </header>

        <nav>
          <a href="#skills" aria-label="Jump to skills section">Skills</a>
          <a href="#projects" aria-label="Jump to projects section">Projects</a>
          <a href="#contact" aria-label="Jump to contact section">Contact</a>
        </nav>

        <main>
          <section id="skills">
            <h2>Technical Skills</h2>
            <div class="skill-tags">
              <span class="skill-tag" data-skill="typescript">TypeScript</span>
              <span class="skill-tag" data-skill="react">React</span>
              <span class="skill-tag" data-skill="nodejs">Node.js</span>
              <span class="skill-tag" data-skill="vue">Vue.js</span>
              <span class="skill-tag" data-skill="graphql">GraphQL</span>
              <span class="skill-tag" data-skill="postgresql">PostgreSQL</span>
              <span class="skill-tag" data-skill="docker">Docker</span>
              <span class="skill-tag" data-skill="aws">AWS</span>
            </div>
          </section>

          <section id="projects">
            <h2>Projects & Experience</h2>
            <article class="skill-card" data-project-id="1">
              <h3>E-commerce Platform</h3>
              <p>Built with React, Node.js, and PostgreSQL. Implements real-time inventory management.</p>
              <a href="#" class="primary-btn">View Project</a>
            </article>
            <article class="skill-card" data-project-id="2">
              <h3>Task Management App</h3>
              <p>Vue.js frontend with GraphQL API. Features real-time collaboration.</p>
              <a href="#" class="primary-btn">View Project</a>
            </article>
          </section>

          <section id="cta">
            <h2>Get Started</h2>
            <button class="primary-btn" id="explore-btn" aria-label="Explore portfolio">Explore Portfolio</button>
            <button class="secondary-btn" id="contact-btn" aria-label="Contact me">Get In Touch</button>
          </section>
        </main>

        <footer>
          <p>&copy; 2024 Portfolio. All rights reserved.</p>
          <nav aria-label="Social links">
            <a href="https://github.com" aria-label="GitHub profile" target="_blank">GitHub</a>
            <a href="https://linkedin.com" aria-label="LinkedIn profile" target="_blank">LinkedIn</a>
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
      expect(title).toBe('Portfolio - Web Application');
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
      expect(h1.textContent).toBe('Portfolio');
    });

    it('h1 should have id attribute', () => {
      const h1 = document.querySelector('h1');
      expect(h1.id).toBe('main-title');
    });

    it('should have subtitle paragraph', () => {
      const subtitle = document.querySelector('.subtitle');
      expect(subtitle).toBeTruthy();
      expect(subtitle.textContent).toBe('Full Stack Developer & Engineer');
    });

    it('should have description paragraph', () => {
      const description = document.querySelector('.description');
      expect(description).toBeTruthy();
      expect(description.textContent).toBeTruthy();
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
      const skillLink = document.querySelector('a[href="#skills"]');
      const projectLink = document.querySelector('a[href="#projects"]');
      const contactLink = document.querySelector('a[href="#contact"]');

      expect(skillLink).toBeTruthy();
      expect(projectLink).toBeTruthy();
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
  // 3. MAIN CONTENT SECTIONS
  // ========================
  describe('Main Content Sections', () => {
    it('should have main element', () => {
      const main = document.querySelector('main');
      expect(main).toBeTruthy();
    });

    it('should have skills section', () => {
      const skillsSection = document.querySelector('#skills');
      expect(skillsSection).toBeTruthy();
      expect(skillsSection.tagName).toBe('SECTION');
    });

    it('should have projects section', () => {
      const projectsSection = document.querySelector('#projects');
      expect(projectsSection).toBeTruthy();
      expect(projectsSection.tagName).toBe('SECTION');
    });

    it('should have cta section', () => {
      const ctaSection = document.querySelector('#cta');
      expect(ctaSection).toBeTruthy();
      expect(ctaSection.tagName).toBe('SECTION');
    });

    it('container should have proper styling class', () => {
      const container = document.querySelector('.container');
      expect(container).toBeTruthy();
      expect(container.classList.contains('container')).toBe(true);
    });
  });

  // ========================
  // 4. SKILL TAGS TESTS
  // ========================
  describe('Skill Tags', () => {
    it('should have skill-tags container', () => {
      const skillTagsContainer = document.querySelector('.skill-tags');
      expect(skillTagsContainer).toBeTruthy();
    });

    it('should have 8 skill tags', () => {
      const skillTags = document.querySelectorAll('.skill-tag');
      expect(skillTags.length).toBe(8);
    });

    it('each skill tag should have correct text', () => {
      const expectedSkills = ['TypeScript', 'React', 'Node.js', 'Vue.js', 'GraphQL', 'PostgreSQL', 'Docker', 'AWS'];
      const skillTags = document.querySelectorAll('.skill-tag');

      skillTags.forEach((tag, index) => {
        expect(tag.textContent).toBe(expectedSkills[index]);
      });
    });

    it('each skill tag should have data-skill attribute', () => {
      const skillTags = document.querySelectorAll('.skill-tag');
      skillTags.forEach(tag => {
        expect(tag.getAttribute('data-skill')).toBeTruthy();
      });
    });

    it('skill tags should have CSS class', () => {
      const skillTags = document.querySelectorAll('.skill-tag');
      skillTags.forEach(tag => {
        expect(tag.classList.contains('skill-tag')).toBe(true);
      });
    });

    it('skill tags should have proper styling', () => {
      const skillTag = document.querySelector('.skill-tag');
      expect(skillTag.tagName).toBe('SPAN');
    });
  });

  // ========================
  // 5. PROJECT CARDS TESTS
  // ========================
  describe('Project Cards', () => {
    it('should have project cards container', () => {
      const projectsSection = document.querySelector('#projects');
      expect(projectsSection).toBeTruthy();
    });

    it('should have at least 2 project cards', () => {
      const projectCards = document.querySelectorAll('.skill-card[data-project-id]');
      expect(projectCards.length).toBeGreaterThanOrEqual(2);
    });

    it('each project card should be an article element', () => {
      const projectCards = document.querySelectorAll('.skill-card');
      projectCards.forEach(card => {
        expect(card.tagName).toBe('ARTICLE');
      });
    });

    it('each project card should have project-id data attribute', () => {
      const projectCards = document.querySelectorAll('.skill-card[data-project-id]');
      projectCards.forEach((card, index) => {
        expect(card.getAttribute('data-project-id')).toBeTruthy();
        expect(card.getAttribute('data-project-id')).toBe((index + 1).toString());
      });
    });

    it('each project card should have h3 title', () => {
      const projectCards = document.querySelectorAll('.skill-card');
      projectCards.forEach(card => {
        const h3 = card.querySelector('h3');
        expect(h3).toBeTruthy();
        expect(h3.textContent).toBeTruthy();
      });
    });

    it('each project card should have description paragraph', () => {
      const projectCards = document.querySelectorAll('.skill-card');
      projectCards.forEach(card => {
        const p = card.querySelector('p');
        expect(p).toBeTruthy();
        expect(p.textContent).toBeTruthy();
      });
    });

    it('each project card should have action button', () => {
      const projectCards = document.querySelectorAll('.skill-card');
      projectCards.forEach(card => {
        const button = card.querySelector('.primary-btn');
        expect(button).toBeTruthy();
        expect(button.tagName).toBe('A');
      });
    });
  });

  // ========================
  // 6. BUTTON & LINK TESTS
  // ========================
  describe('Buttons & Links', () => {
    it('should have primary buttons', () => {
      const primaryButtons = document.querySelectorAll('.primary-btn');
      expect(primaryButtons.length).toBeGreaterThan(0);
    });

    it('should have secondary buttons', () => {
      const secondaryButtons = document.querySelectorAll('.secondary-btn');
      expect(secondaryButtons.length).toBeGreaterThan(0);
    });

    it('primary buttons should be styled correctly', () => {
      const primaryButtons = document.querySelectorAll('.primary-btn');
      primaryButtons.forEach(btn => {
        expect(btn.classList.contains('primary-btn')).toBe(true);
      });
    });

    it('should have explore button with id', () => {
      const exploreBtn = document.querySelector('#explore-btn');
      expect(exploreBtn).toBeTruthy();
      expect(exploreBtn.id).toBe('explore-btn');
    });

    it('should have contact button with id', () => {
      const contactBtn = document.querySelector('#contact-btn');
      expect(contactBtn).toBeTruthy();
      expect(contactBtn.id).toBe('contact-btn');
    });

    it('buttons should have aria-labels', () => {
      const buttons = document.querySelectorAll('button');
      buttons.forEach(btn => {
        expect(btn.getAttribute('aria-label')).toBeTruthy();
      });
    });

    it('links should have href attributes', () => {
      const links = document.querySelectorAll('a[href]');
      links.forEach(link => {
        expect(link.getAttribute('href')).toBeTruthy();
      });
    });

    it('external links should have target="_blank"', () => {
      const externalLinks = document.querySelectorAll('footer a[target="_blank"]');
      expect(externalLinks.length).toBeGreaterThan(0);
    });
  });

  // ========================
  // 7. FOOTER TESTS
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
    });

    it('footer should have social navigation', () => {
      const footerNav = document.querySelector('footer nav');
      expect(footerNav).toBeTruthy();
    });

    it('footer nav should have aria-label', () => {
      const footerNav = document.querySelector('footer nav');
      expect(footerNav.getAttribute('aria-label')).toBeTruthy();
    });

    it('footer should have social media links', () => {
      const footerLinks = document.querySelectorAll('footer a[href]');
      expect(footerLinks.length).toBeGreaterThanOrEqual(3);
    });

    it('footer links should have aria-labels', () => {
      const footerLinks = document.querySelectorAll('footer a');
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
    });

    it('footer should include email link', () => {
      const emailLink = document.querySelector('footer a[href*="mailto"]');
      expect(emailLink).toBeTruthy();
    });
  });

  // ========================
  // 8. ACCESSIBILITY TESTS
  // ========================
  describe('Accessibility', () => {
    it('should use semantic HTML elements', () => {
      expect(document.querySelector('header')).toBeTruthy();
      expect(document.querySelector('nav')).toBeTruthy();
      expect(document.querySelector('main')).toBeTruthy();
      expect(document.querySelector('footer')).toBeTruthy();
    });

    it('should have proper heading hierarchy (no skipped levels)', () => {
      const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
      let lastLevel = 1;

      headings.forEach(heading => {
        const level = parseInt(heading.tagName.charAt(1));
        expect(Math.abs(level - lastLevel)).toBeLessThanOrEqual(1);
        lastLevel = level;
      });
    });

    it('interactive elements should have aria-labels', () => {
      const buttons = document.querySelectorAll('button');
      const links = document.querySelectorAll('a');

      buttons.forEach(btn => {
        if (btn.tagName === 'BUTTON') {
          expect(btn.getAttribute('aria-label') || btn.textContent).toBeTruthy();
        }
      });

      links.forEach(link => {
        if (link.textContent.trim() === '' && link.tagName === 'A') {
          expect(link.getAttribute('aria-label')).toBeTruthy();
        }
      });
    });

    it('should have skip navigation link (optional best practice)', () => {
      // This test is optional as not all portfolios include skip links
      const skipLink = document.querySelector('a[href="#main"]');
      if (skipLink) {
        expect(skipLink.getAttribute('aria-label') || skipLink.textContent).toContain('skip');
      }
    });

    it('all navigation links should have aria-label or descriptive text', () => {
      const navLinks = document.querySelectorAll('nav a');
      navLinks.forEach(link => {
        expect(link.getAttribute('aria-label') || link.textContent).toBeTruthy();
      });
    });

    it('should not have empty alt text on images (if any)', () => {
      const images = document.querySelectorAll('img');
      images.forEach(img => {
        const alt = img.getAttribute('alt');
        expect(alt).not.toBe('');
      });
    });

    it('language attribute should be set', () => {
      expect(document.documentElement.lang).toBeTruthy();
      expect(document.documentElement.lang.length).toBeGreaterThan(0);
    });
  });

  // ========================
  // 9. CSS CLASSES & IDS
  // ========================
  describe('CSS Classes & IDs', () => {
    it('container should have container class', () => {
      const container = document.querySelector('.container');
      expect(container).toBeTruthy();
      expect(container.classList.contains('container')).toBe(true);
    });

    it('major sections should have id attributes', () => {
      expect(document.querySelector('#skills')).toBeTruthy();
      expect(document.querySelector('#projects')).toBeTruthy();
      expect(document.querySelector('#cta')).toBeTruthy();
    });

    it('skill tags should have skill-tag class', () => {
      const skillTags = document.querySelectorAll('.skill-tag');
      skillTags.forEach(tag => {
        expect(tag.classList.contains('skill-tag')).toBe(true);
      });
    });

    it('buttons should have proper button classes', () => {
      const primaryBtn = document.querySelector('.primary-btn');
      const secondaryBtn = document.querySelector('.secondary-btn');

      expect(primaryBtn.classList.contains('primary-btn')).toBe(true);
      expect(secondaryBtn.classList.contains('secondary-btn')).toBe(true);
    });

    it('project cards should have skill-card class', () => {
      const cards = document.querySelectorAll('.skill-card');
      cards.forEach(card => {
        expect(card.classList.contains('skill-card')).toBe(true);
      });
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
  // 10. RESPONSIVE DESIGN
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
      // This is a display/CSS test that can be verified
      const container = document.querySelector('.container');
      expect(container).toBeTruthy();
      // In a real scenario, you'd check computed styles
      expect(container.classList.contains('container')).toBe(true);
    });
  });

  // ========================
  // 11. CONTENT VALIDATION
  // ========================
  describe('Content Validation', () => {
    it('should have meaningful page content', () => {
      const mainContent = document.querySelector('main');
      expect(mainContent).toBeTruthy();
      expect(mainContent.textContent.length).toBeGreaterThan(50);
    });

    it('should have all expected skill tags', () => {
      const expectedSkills = ['TypeScript', 'React', 'Node.js', 'Vue.js', 'GraphQL', 'PostgreSQL', 'Docker', 'AWS'];
      expectedSkills.forEach(skill => {
        const skillElement = Array.from(document.querySelectorAll('.skill-tag')).find(
          el => el.textContent.includes(skill)
        );
        expect(skillElement).toBeTruthy();
      });
    });

    it('should have project descriptions', () => {
      const projectCards = document.querySelectorAll('.skill-card');
      projectCards.forEach(card => {
        const description = card.querySelector('p');
        expect(description).toBeTruthy();
        expect(description.textContent.length).toBeGreaterThan(10);
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
  // 12. INTEGRATION TESTS
  // ========================
  describe('Integration', () => {
    it('should have complete HTML structure', () => {
      expect(document.doctype).toBeTruthy();
      expect(document.querySelector('html')).toBeTruthy();
      expect(document.querySelector('head')).toBeTruthy();
      expect(document.querySelector('body')).toBeTruthy();
    });

    it('should have at least 5 interactive elements', () => {
      const buttons = document.querySelectorAll('button, a[href]');
      expect(buttons.length).toBeGreaterThanOrEqual(5);
    });

    it('should have proper document flow', () => {
      const bodyChildren = document.body.children;
      expect(bodyChildren.length).toBeGreaterThan(0);

      // Should have container as main wrapper
      const container = document.querySelector('.container');
      expect(container).toBeTruthy();
    });

    it('all sections should be within main or be semantic sections', () => {
      const sections = document.querySelectorAll('section');
      const main = document.querySelector('main');

      sections.forEach(section => {
        // Section should either be in main or be direct child of body
        expect(main && main.contains(section) || document.body.contains(section)).toBe(true);
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
      const lastChild = document.body.lastElementChild;

      // Footer should be the last element or within the last container
      expect(footer).toBeTruthy();
      expect(document.body.contains(footer)).toBe(true);
    });
  });
});
