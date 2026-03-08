import { describe, it, expect, beforeEach } from 'vitest';
import { JSDOM } from 'jsdom';
import { readFileSync } from 'fs';
import { resolve } from 'path';

describe('Portfolio Landing Page - Main Entry Point', () => {
    let document: Document;

    beforeEach(() => {
        const htmlPath = resolve(__dirname, 'index.html');
        const htmlContent = readFileSync(htmlPath, 'utf-8');
        const dom = new JSDOM(htmlContent);
        document = dom.window.document;
    });

    it('should have proper HTML structure with lang attribute', () => {
        const html = document.documentElement;
        expect(html.getAttribute('lang')).toBe('en');
    });

    it('should have required meta tags', () => {
        const head = document.head;
        expect(head.querySelector('meta[charset]')).toBeTruthy();
        expect(head.querySelector('meta[name="viewport"]')).toBeTruthy();
    });

    it('should have a title element', () => {
        const title = document.querySelector('title');
        expect(title).toBeTruthy();
        expect(title?.textContent).toContain('Portfolio Monorepo');
    });

    it('should have a main container div', () => {
        const container = document.querySelector('.container');
        expect(container).toBeTruthy();
    });

    it('should have h1 heading with portfolio title', () => {
        const h1 = document.querySelector('h1');
        expect(h1).toBeTruthy();
        expect(h1?.textContent).toContain('Portfolio Monorepo');
    });

    it('should have subtitle with Modern Development Stack', () => {
        const subtitle = document.querySelector('.subtitle');
        expect(subtitle).toBeTruthy();
        expect(subtitle?.textContent).toContain('Modern Development Stack');
    });

    it('should have an intro paragraph', () => {
        const intro = document.querySelector('.intro');
        expect(intro).toBeTruthy();
        expect(intro?.textContent).toContain('monorepo-based portfolio project');
    });

    it('should have a features section with feature cards', () => {
        const features = document.querySelector('.features');
        expect(features).toBeTruthy();

        const featureCards = features?.querySelectorAll('.feature-card');
        expect(featureCards?.length).toBe(3);
    });

    it('should have feature cards with correct titles', () => {
        const featureCards = document.querySelectorAll('.feature-card h3');
        const titles = Array.from(featureCards).map(card => card.textContent);
        expect(titles).toContain('Monorepo');
        expect(titles).toContain('TypeScript');
        expect(titles).toContain('Testing');
    });

    it('should have a projects section', () => {
        const projects = document.querySelector('.projects');
        expect(projects).toBeTruthy();

        const heading = projects?.querySelector('h2');
        expect(heading?.textContent).toContain('Projects & Apps');
    });

    it('should have project list items', () => {
        const projectList = document.querySelector('.project-list');
        expect(projectList).toBeTruthy();

        const items = projectList?.querySelectorAll('li');
        expect(items?.length).toBeGreaterThan(0);
    });

    it('should have CTA buttons', () => {
        const cta = document.querySelector('.cta');
        expect(cta).toBeTruthy();

        const buttons = cta?.querySelectorAll('a');
        expect(buttons?.length).toBeGreaterThanOrEqual(1);
    });

    it('should have primary CTA button linking to web app', () => {
        const primaryBtn = document.querySelector('a.primary-btn');
        expect(primaryBtn).toBeTruthy();
        expect(primaryBtn?.getAttribute('href')).toContain('apps/web/src/index.html');
    });

    it('should have footer with copyright notice', () => {
        const footer = document.querySelector('footer');
        expect(footer).toBeTruthy();

        const copyright = footer?.textContent;
        expect(copyright).toContain('2026');
        expect(copyright).toContain('Portfolio Monorepo');
    });

    it('should have correct copyright year 2026', () => {
        const footer = document.querySelector('footer');
        expect(footer?.textContent).toContain('© 2026');
    });

    it('should have proper CSS styling applied', () => {
        const style = document.querySelector('style');
        expect(style).toBeTruthy();
        expect(style?.textContent).toContain('background: linear-gradient');
    });

    it('should have responsive design media query', () => {
        const style = document.querySelector('style');
        expect(style?.textContent).toContain('@media (max-width: 768px)');
    });
});
