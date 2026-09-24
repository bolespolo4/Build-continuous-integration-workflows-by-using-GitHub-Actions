# 🚀 Build-continuous-integration-workflows-by-using-GitHub-Actions

### CI/CD Made Simple — Automated Builds, Tests, and Validation with GitHub Actions

---

## ✨ About This Project

This repository is a hands-on demonstration of how to build **powerful, automated CI/CD workflows** using **GitHub Actions**. It includes a complete GitHub Actions workflow that automatically:

- ✅ Installs Node.js dependencies on every push
- ✅ Builds the project across multiple Node.js versions
- ✅ Runs tests on both Linux and Windows
- ✅ Validates code quality and functionality automatically

---

## 🛠️ What's Inside

### 📁 Project Structure

```
Build-continuous-integration-workflows-by-using-GitHub-Actions/
├── .github/
│   └── workflows/
│       └── node.js.yml          # The GitHub Actions workflow
├── package.json                 # Project metadata and scripts
├── index.js                     # Main application logic
├── build.js                     # Build script
├── test.js                      # Test script
├── LICENSE
└── README.md
```

### 🎯 Dummy Node.js Project

Included is a simple **dummy Node.js project** designed to test the CI/CD workflow:

- **`index.js`** — Core application logic with `greet()` and `add()` functions
- **`build.js`** — Build script that generates a `dist/` directory
- **`test.js`** — Test script using Node.js built-in `assert` module
- **`package.json`** — Defines `build`, `test`, and `start` scripts

---

## 🔥 GitHub Actions Workflow Highlights

The workflow (`.github/workflows/node.js.yml`) runs on:

- **Push to `main` branch**
- **Pull requests targeting `main` branch**

### Matrix Strategy

The workflow uses a **matrix strategy** to test across multiple environments:

| Job | OS | Node.js Versions |
|-----|----|-----------------|
| `build` | Ubuntu | 18.x, 20.x, 22.x |
| `test` | Ubuntu + Windows | 16.x, 18.x |

This ensures the project works across different operating systems and Node.js versions.

---

## 🚀 How to Run Locally

### 1. Install Node.js

Download and install Node.js from [nodejs.org](https://nodejs.org/).

### 2. Install Dependencies

```bash
npm install
```

### 3. Run Tests

```bash
npm test
```

Expected output:

```
> dummy-nodejs-project@1.0.0 test
> echo "Running tests..." && node test.js

Running tests...
All tests passed!
```

### 4. Build the Project

```bash
npm run build
```

Expected output:

```
> dummy-nodejs-project@1.0.0 build
> echo "Building project..." && node build.js

Building project...
Build completed successfully!
```

### 5. Run the Application

```bash
npm start
```

---

## 🧪 What the Workflow Tests

The GitHub Actions workflow validates that:

- ✅ Dependencies install correctly (`npm ci`)
- ✅ The build process completes successfully
- ✅ All tests pass across multiple Node.js versions
- ✅ The project works on both Linux and Windows

---

## 🎓 Learning Outcomes

By exploring this repository, you'll learn how to:

- Create a GitHub Actions workflow
- Use matrix strategies for cross-platform testing
- Test across multiple Node.js versions
- Automate builds and tests
- Structure a Node.js project for CI/CD

---

## 🤝 Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

<div align="center">

### 🎉 Made with ❤️ using GitHub Actions

---

<div>
