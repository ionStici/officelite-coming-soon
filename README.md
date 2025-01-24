# Officelite Coming Soon Site Solution

This is a solution to the [Officelite coming soon site challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/officelite-coming-soon-site-M4DIPNz8g). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## About the Project

The **"Officelite Coming Soon Site"** is a pre-launch webpage designed to generate excitement for the upcoming release of Officelite. It features a countdown timer to the launch date, providing an interactive experience for visitors, along with a simple sign-up process to keep them engaged.

## Preview and Links

<details>
<summary><b>Open Preview</b></summary>
<br>

![](./preview.png)

<br>
</details>

| View it live: | [Live Demo URL](https://ionstici.github.io/officelite-coming-soon/) | [Frontend Mentor](https://www.frontendmentor.io/solutions/officelite-coming-soon-VS5Fz6NvO4) |
| ------------- | ------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |

## Features

- **Coming Soon Theme:** Features a countdown timer to build anticipation for the launch.
- **Responsive Design:** Optimized for all devices to ensure a consistent user experience.
- **Client-Side Routing:** Uses React Router DOM to navigate between home and sign-up pages without reloading.
- **State Management:** Employs Redux to keep the timer state in sync, providing a unified experience.

## Tech Stack

- **React:** Core framework for building the UI components.
- **Vite:** For a faster and more efficient development setup.
- **Scss:** For advanced, modular styling.
- **React Router DOM:** For handling navigation between pages.
- **Redux:** To manage application state, particularly for the timer.

## Deployment

The site is deployed using [**GitHub Pages**](https://pages.github.com).

Despite GitHub Pages not natively supporting the client-side routing provided by React Router, routing functionality was achieved by utilizing a workaround detailed in the repository: [spa-github-pages](https://github.com/rafgraph/spa-github-pages).

## Getting Started

### Prerequisites

You need [**Node.js**](http://nodejs.org) installed on your machine.

### Installation

```bash
# Clone the repository
git clone https://github.com/ionStici/officelite-coming-soon.git

# Navigate to the project directory
cd officelite-coming-soon

# Install dependencies
npm install

# Start the development server
npm run dev
```

## Acknowledgements

Thanks to **Frontend Mentor** for the challenge.

Special appreciation goes to the [**spa-github-pages**](https://github.com/rafgraph/spa-github-pages). project for providing the clever trick that allowed us to implement client-side routing on GitHub Pages despite its limitations.

## License

This project is licensed under the MIT License. See [LICENSE](./LICENSE) file for more information.
