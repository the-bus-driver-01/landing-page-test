import { describe, it, expect, beforeEach } from 'vitest';
import { JSDOM } from 'jsdom';
import { readFileSync } from 'fs';
import { resolve } from 'path';

describe('Portfolio Landing Page - Social Links', () => {
    let document: Document;

    beforeEach(() => {
        const htmlPath = resolve(__dirname, 'index.html');
        const htmlContent = readFileSync(htmlPath, 'utf-8');
        const dom = new JSDOM(htmlContent);
        document = dom.window.document;
    });

    it('should have a footer element', () => {
        const footer = document.querySelector('footer');
        expect(footer).toBeTruthy();
    });

    it('should have a navigation section with aria-label for social links', () => {
        const nav = document.querySelector('nav[aria-label="Social links"]');
        expect(nav).toBeTruthy();
    });

    it('should have a social links container', () => {
        const socialLinks = document.querySelector('.social-links');
        expect(socialLinks).toBeTruthy();
    });

    it('should have GitHub social link with correct href', () => {
        const githubLink = document.querySelector('a[href="https://github.com/username"]');
        expect(githubLink).toBeTruthy();
        expect(githubLink?.textContent).toContain('GitHub');
        expect(githubLink?.getAttribute('title')).toBe('GitHub Profile');
    });

    it('should have LinkedIn social link with correct href', () => {
        const linkedinLink = document.querySelector('a[href="https://linkedin.com/in/username"]');
        expect(linkedinLink).toBeTruthy();
        expect(linkedinLink?.textContent).toContain('LinkedIn');
        expect(linkedinLink?.getAttribute('title')).toBe('LinkedIn Profile');
    });

    it('should have Email social link with correct href', () => {
        const emailLink = document.querySelector('a[href="mailto:your.email@example.com"]');
        expect(emailLink).toBeTruthy();
        expect(emailLink?.textContent).toContain('Email');
        expect(emailLink?.getAttribute('title')).toBe('Email Contact');
    });

    it('should have ARIA labels for accessibility on all social links', () => {
        const socialLinks = document.querySelectorAll('.social-links a');
        socialLinks.forEach(link => {
            expect(link.getAttribute('aria-label')).toBeTruthy();
        });
    });

    it('should have exactly 3 social links', () => {
        const socialLinks = document.querySelectorAll('.social-links a');
        expect(socialLinks).toHaveLength(3);
    });

    it('should have proper HTML structure', () => {
        const html = document.documentElement;
        expect(html.getAttribute('lang')).toBe('en');

        const head = document.head;
        expect(head.querySelector('meta[charset]')).toBeTruthy();
        expect(head.querySelector('meta[name="viewport"]')).toBeTruthy();

        const title = document.querySelector('title');
        expect(title).toBeTruthy();
    });

    it('should have header element with content', () => {
        const header = document.querySelector('header');
        expect(header).toBeTruthy();

        const h1 = header?.querySelector('h1');
        expect(h1).toBeTruthy();
        expect(h1?.textContent).toContain('Portfolio');
    });

    it('should have main element with content', () => {
        const main = document.querySelector('main');
        expect(main).toBeTruthy();
    });

    it('should have correct copyright year 2026', () => {
        const footer = document.querySelector('footer');
        expect(footer?.textContent).toContain('2026');
        expect(footer?.textContent).toContain('All rights reserved');
    });

    it('should have social links with proper styling', () => {
        const style = document.querySelector('style');
        expect(style?.textContent).toContain('.social-links');
    });

    it('should have responsive design media query', () => {
        const style = document.querySelector('style');
        expect(style?.textContent).toContain('@media (max-width: 768px)');
    });

    it('should have HTML comments documenting placeholder values', () => {
        const htmlContent = readFileSync(resolve(__dirname, 'index.html'), 'utf-8');
        expect(htmlContent).toContain('NOTE: Replace');
        expect(htmlContent).toContain('username');
        expect(htmlContent).toContain('your.email@example.com');
    });

    it('should have proper focus states for accessibility', () => {
        const style = document.querySelector('style');
        expect(style?.textContent).toContain(':focus');
    });
});
