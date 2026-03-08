# Portfolio Customization Guide

This guide explains how to customize the portfolio with your own information. The project contains placeholder values that need to be replaced with your actual details.

## 📝 What to Customize

### 1. Main Landing Page (`index.html`)

This is the first page visitors see. You need to update:

#### GitHub Repository Link

**Location**: Line 227 in `/workspace/index.html`

**Current (PLACEHOLDER)**:
```html
<a href="https://github.com" class="secondary-btn">View Source</a>
```

**Replace with YOUR repository URL**:
```html
<a href="https://github.com/YOUR_USERNAME/portfolio-monorepo" class="secondary-btn">View Source</a>
```

**Example**:
```html
<a href="https://github.com/johndoe/portfolio-monorepo" class="secondary-btn">View Source</a>
```

---

### 2. Portfolio Page (`apps/web/src/index.html`)

This is the main portfolio page with your personal information.

#### GitHub Profile Link

**Location**: Line 119 in `/workspace/apps/web/src/index.html`

**Current (PLACEHOLDER)**:
```html
<a href="https://github.com/username" title="GitHub Profile" aria-label="Visit my GitHub profile">GitHub</a>
```

**Replace with YOUR GitHub username**:
```html
<a href="https://github.com/YOUR_USERNAME" title="GitHub Profile" aria-label="Visit my GitHub profile">GitHub</a>
```

**Example**:
```html
<a href="https://github.com/johndoe" title="GitHub Profile" aria-label="Visit my GitHub profile">GitHub</a>
```

#### LinkedIn Profile Link

**Location**: Line 121 in `/workspace/apps/web/src/index.html`

**Current (PLACEHOLDER)**:
```html
<a href="https://linkedin.com/in/username" title="LinkedIn Profile" aria-label="Visit my LinkedIn profile">LinkedIn</a>
```

**Replace with YOUR LinkedIn username**:
```html
<a href="https://linkedin.com/in/YOUR_USERNAME" title="LinkedIn Profile" aria-label="Visit my LinkedIn profile">LinkedIn</a>
```

**Example**:
```html
<a href="https://linkedin.com/in/john-doe" title="LinkedIn Profile" aria-label="Visit my LinkedIn profile">LinkedIn</a>
```

#### Email Address

**Location**: Line 123 in `/workspace/apps/web/src/index.html`

**Current (PLACEHOLDER)**:
```html
<a href="mailto:your.email@example.com" title="Email Contact" aria-label="Send me an email">Email</a>
```

**Replace with YOUR email address**:
```html
<a href="mailto:your.actual.email@domain.com" title="Email Contact" aria-label="Send me an email">Email</a>
```

**Example**:
```html
<a href="mailto:john.doe@example.com" title="Email Contact" aria-label="Send me an email">Email</a>
```

---

## 🔍 Quick Find & Replace

You can use your text editor's find and replace feature to update all placeholders:

### Using VS Code:
1. Press `Ctrl+H` (or `Cmd+H` on Mac) to open Find and Replace
2. Search for: `username`
3. Replace with: `your-actual-github-username`
4. Use "Replace All" to update all occurrences

### Repeat for email:
1. Search for: `your.email@example.com`
2. Replace with: `your.actual@email.com`
3. Replace all occurrences

---

## ✅ Verification Checklist

After customization, verify all changes:

- [ ] GitHub link in `index.html` points to your repository
- [ ] GitHub username in `apps/web/src/index.html` is updated
- [ ] LinkedIn username in `apps/web/src/index.html` is updated
- [ ] Email address in `apps/web/src/index.html` is your actual email
- [ ] All links work correctly in development mode (`pnpm dev`)
- [ ] Tested clicking on all social links in footer

---

## 🚀 Testing Your Customization

1. Start the development server:
   ```bash
   pnpm dev
   ```

2. Open `http://localhost:5173` in your browser

3. Verify:
   - The landing page shows your GitHub repository link
   - All social links in the portfolio page work correctly
   - Links open your actual profiles/email client

4. Test on different browsers and devices to ensure everything works

---

## 🔗 URL Format Reference

### GitHub Profile
- Format: `https://github.com/YOUR_USERNAME`
- Example: `https://github.com/johndoe`

### LinkedIn Profile
- Format: `https://linkedin.com/in/YOUR_USERNAME`
- Example: `https://linkedin.com/in/john-doe`
- Note: LinkedIn usernames are typically lowercase and use hyphens

### Email Links
- Format: `mailto:your.email@domain.com`
- Example: `mailto:john@example.com`

### Repository URLs
- Format: `https://github.com/USERNAME/REPO_NAME`
- Example: `https://github.com/johndoe/portfolio-monorepo`

---

## 📝 Additional Customization (Optional)

You can further customize the portfolio by editing:

- **Portfolio title and description** in `apps/web/src/index.html`
- **Feature cards** on the landing page in `index.html`
- **Project list** in `index.html`
- **Colors and styling** via CSS in both HTML files

---

## ⚠️ Important Notes

- **Don't commit placeholder values**: Always replace placeholder values before committing/deploying
- **Keep backups**: Before making changes, consider creating a backup
- **Test thoroughly**: Verify all links work after customization
- **Check HTML validity**: Ensure you don't accidentally break HTML structure when editing

---

## 🆘 Troubleshooting

### Links not working in the browser
- Ensure you used the correct URL format
- Check for typos in usernames and URLs
- Verify the HTML syntax is correct (closing `</a>` tags, quotes, etc.)

### Development server not showing changes
- Stop the dev server (Ctrl+C)
- Clear browser cache (Ctrl+Shift+Delete or Cmd+Shift+Delete)
- Restart with `pnpm dev`

### Email link not working
- Make sure you replaced the full email address
- Email format should be: `your.email@domain.com`
- Test by clicking the link and verifying your email client opens

---

For more information, see [README.md](./README.md)
