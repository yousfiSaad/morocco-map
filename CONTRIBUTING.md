# Contributing to Morocco Map

First off, thank you for considering contributing to Morocco Map! 🇲🇦

Following these guidelines helps to communicate that you respect the time of the developers managing and developing this open source project. In return, they should reciprocate that respect in addressing your issue, assessing changes, and helping you finalize your pull requests.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [What We're Looking For](#what-were-looking-for)
- [How to Contribute](#how-to-contribute)
- [Getting Started](#getting-started)
- [Submitting Changes](#submitting-changes)
- [Data Quality Standards](#data-quality-standards)
- [Reporting Bugs](#reporting-bugs)
- [Suggesting Enhancements](#suggesting-enhancements)

## Code of Conduct

This project and everyone participating in it is governed by our [Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code.

## What We're Looking For

We welcome contributions in the following areas:

- 🗺️ **Data improvements**: Corrections to geographical boundaries, names, or IDs
- 🌆 **New data**: Adding cities, communes, or other administrative divisions
- 📚 **Documentation**: Improving README, adding examples, or fixing typos
- 🐛 **Bug fixes**: Fixing data errors or issues in examples
- ✨ **New features**: Adding new data formats, examples, or tools
- 🌐 **Translations**: Adding or improving multi-language support
- 🧪 **Tests**: Adding validation scripts or data quality checks

## How to Contribute

### Reporting Bugs

Before creating bug reports, please check the [issue tracker](https://github.com/yousfiSaad/morocco-map/issues) to avoid duplicates.

When creating a bug report, include:

- **Clear title and description**
- **Steps to reproduce** the issue
- **Expected behavior** vs **actual behavior**
- **Screenshots** if applicable
- **Environment details** (browser, Node.js version, etc.)

### Suggesting Enhancements

Enhancement suggestions are tracked as [GitHub issues](https://github.com/yousfiSaad/morocco-map/issues).

When creating an enhancement suggestion, include:

- **Clear use case**: Why would this be useful?
- **Detailed description**: What should it do?
- **Examples**: Show how it would work
- **Alternatives considered**: What other approaches did you think about?

## Getting Started

### Prerequisites

- Node.js (>= 12.0.0)
- Git
- A text editor

### Development Setup

1. **Fork the repository** on GitHub

2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/YOUR_USERNAME/morocco-map.git
   cd morocco-map
   ```

3. **Create a branch** for your changes:
   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b fix/your-bug-fix
   ```

4. **Install dependencies**:
   ```bash
   npm install
   ```

5. **Run examples** to test:
   ```bash
   npm run example
   ```

## Submitting Changes

### Pull Request Process

1. **Update documentation** if you're changing functionality
2. **Test your changes** thoroughly
3. **Follow the coding style** of the project
4. **Write clear commit messages**
5. **Push to your fork** and submit a pull request

### Commit Message Guidelines

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

```
<type>(<scope>): <subject>

<body>

<footer>
```

**Types:**
- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation changes
- `data`: Data updates or corrections
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

**Examples:**
```
feat(cities): add major Moroccan cities data

docs(readme): add TypeScript usage examples

fix(regions): correct boundary for MA-01 region

data(provinces): update ISO codes for provinces
```

### Pull Request Template

When submitting a PR, include:

- **Description**: What does this PR do?
- **Motivation**: Why is this change needed?
- **Testing**: How did you test this?
- **Screenshots**: If applicable
- **Related Issues**: Link to related issues

## Data Quality Standards

### Geographic Data

When contributing geographic data:

1. **Source**: Data must come from reliable sources (preferably OpenStreetMap)
2. **Accuracy**: Boundaries should be as accurate as possible
3. **Format**: Follow TopoJSON specification
4. **IDs**: Must comply with ISO 3166-2 standard where applicable
5. **Properties**: Include multi-language names (Arabic, English, Berber)

### Data Validation

Before submitting geographic data changes:

1. **Validate JSON**: Ensure files are valid JSON
2. **Test rendering**: Verify the data renders correctly in examples
3. **Check file size**: Optimize topology to keep files reasonably sized
4. **Verify IDs**: Ensure IDs are unique and follow standards

### Example Validation Script

```javascript
// Validate TopoJSON structure
const data = require('./data/regions.json');

// Check it's valid TopoJSON
if (data.type !== 'Topology') {
  throw new Error('Invalid TopoJSON');
}

// Validate all IDs are present and unique
const ids = data.objects.regions.geometries.map(g => g.id);
if (new Set(ids).size !== ids.length) {
  throw new Error('Duplicate IDs found');
}
```

## Working with Geographic Data

### Tools

Recommended tools for working with geographic data:

- **[QGIS](https://qgis.org/)**: Open source GIS software
- **[Mapshaper](https://mapshaper.org/)**: Online tool for editing TopoJSON
- **[topojson CLI](https://github.com/topojson/topojson)**: Command-line tools

### Converting Data

To convert GeoJSON to TopoJSON:

```bash
npm install -g topojson

# Convert with simplification
geo2topo regions=input.geojson | toposimplify -s 0.00001 > output.json
```

## Attribution

When contributing data derived from OpenStreetMap, ensure proper attribution:

```
© OpenStreetMap contributors
Data available under the Open Database License (ODbL)
https://www.openstreetmap.org/copyright
```

## Questions?

Feel free to ask questions by:

- Opening a [GitHub Discussion](https://github.com/yousfiSaad/morocco-map/discussions)
- Creating an [issue](https://github.com/yousfiSaad/morocco-map/issues)

## Recognition

Contributors will be recognized in our README and release notes. Thank you for making Morocco Map better! 🙏

---

**Note**: By contributing to this project, you agree that your contributions will be licensed under the ODbL-1.0 license.
