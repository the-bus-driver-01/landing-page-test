# Peer Review Guidelines

## Overview
These guidelines provide clear instructions for reviewers evaluating the portfolio landing page E2E tests and related work. The goal is to ensure thorough, constructive feedback that helps improve code quality, test coverage, and user experience.

## Review Scope

### What to Review
- **Test Code Quality**: Structure, readability, maintainability, and best practices
- **Test Coverage**: Completeness of E2E test scenarios (happy path, edge cases, error handling)
- **Landing Page Functionality**: All interactive elements, forms, navigation, and accessibility
- **User Experience**: Usability, performance, visual design, and responsive behavior
- **Documentation**: Clarity of setup instructions, test documentation, and code comments
- **Accessibility**: WCAG compliance, keyboard navigation, screen reader support
- **Performance**: Load times, asset optimization, and runtime efficiency

### Review Depth Levels

#### Quick Review (30 minutes)
- Focus on obvious issues and critical bugs
- Check code structure and naming conventions
- Verify test naming is descriptive
- Scan for security concerns

#### Standard Review (1-2 hours)
- Comprehensive code quality assessment
- Test coverage analysis
- Documentation review
- Accessibility checklist
- Performance considerations

#### Deep Review (2+ hours)
- Complete architectural review
- Alternative approaches analysis
- Edge case identification
- Performance profiling
- Security assessment

## Review Principles

### 1. Be Constructive
- Focus on the code, not the person
- Suggest improvements, don't just criticize
- Acknowledge good work and patterns
- Offer alternative solutions, not just problems

### 2. Be Specific
- Reference line numbers or code sections
- Provide concrete examples
- Explain *why* something is a concern
- Suggest specific improvements

### 3. Be Thorough
- Check the entire changeset
- Look for consistency issues
- Consider edge cases
- Think about maintainability

### 4. Be Timely
- Review within 2 business days
- Provide actionable feedback
- Be available for follow-up questions

## Review Process

### Before You Start
1. Read the description/PR summary
2. Understand the purpose of changes
3. Review any related documentation
4. Set up the project if needed to see changes in context

### During Review
1. **Initial Scan**: Get an overview of what changed
2. **Detailed Review**: Go through each file and change
3. **Testing**: Run tests locally if applicable
4. **Documentation**: Check for completeness and accuracy
5. **Synthesis**: Identify patterns and high-level concerns

### After Review
1. Organize feedback by category
2. Prioritize issues (critical, important, nice-to-have)
3. Suggest improvements constructively
4. Provide overall assessment

## Common Review Categories

### Code Quality
- Naming conventions (variables, functions, classes)
- Code readability and complexity
- DRY principle (Don't Repeat Yourself)
- Error handling and edge cases
- Type safety (if applicable)

### Testing
- Test naming clarity (what, given, when, then pattern)
- Test independence and isolation
- Mock/stub usage appropriateness
- Coverage of happy path and error scenarios
- Performance test benchmarks

### Accessibility
- Semantic HTML usage
- ARIA attributes correctness
- Keyboard navigation
- Color contrast
- Screen reader compatibility

### Performance
- Asset sizes and optimization
- Runtime performance
- Database/API call efficiency
- Memory leaks or resource issues
- Caching strategies

### Security
- Input validation
- XSS prevention
- CSRF protection
- Secure headers
- Dependency vulnerabilities

### Documentation
- Code comments clarity
- README completeness
- Setup instructions accuracy
- API documentation
- Inline documentation

## Providing Feedback

### Feedback Template
Use this structure for each comment:

```
**Category**: [Code Quality / Testing / Accessibility / Performance / Security / Documentation]
**Severity**: [Critical / Important / Nice-to-have]
**Location**: [File name and line number(s)]

**Issue**:
[Clear, specific description of the concern]

**Why it matters**:
[Explain the impact or reasoning]

**Suggestion**:
[Specific, actionable improvement suggestion]

**Example**:
[Code example showing the fix, if applicable]
```

## Red Flags

Be especially critical of:
- Security vulnerabilities (SQL injection, XSS, etc.)
- Critical bugs or test failures
- Accessibility barriers that block users
- Major performance regressions
- Missing test coverage for critical functionality

## Green Flags

Recognize and celebrate:
- Clear, maintainable code
- Comprehensive test coverage
- Good accessibility practices
- Performance optimizations
- Clear documentation
- Good error handling

## Follow-up

### If Author Disagrees
- Discuss in comments or sync meeting
- Consider alternative perspectives
- Provide data or examples if possible
- Aim for consensus, not authority

### Approval Guidelines
- Approve if concerns are addressed adequately
- Request changes if critical issues remain
- Comment if suggestions are optional

## Review Time Estimates

- Simple test additions: 15-30 minutes
- New test suite: 1-2 hours
- Landing page UI changes: 30-60 minutes
- Test refactoring: 30-90 minutes
- Documentation updates: 10-30 minutes

---

**Remember**: The goal is to help the team produce better work, not to gatekeep or be critical. Constructive feedback makes everyone better.
