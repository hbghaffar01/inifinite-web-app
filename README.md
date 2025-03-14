# Infinite Scroll Next.js Application

This is a [Next.js] project bootstrapped with featuring infinite scrolling with React Redux Toolkit, Framer Motion animations, and Docker support.

## Getting Started

First, run the development server:

```bash
# clone repo
git clone git@github.com:hbghaffar01/inifinite-web-app.git
# install packages
npm install
# docker build
npm run docker:build
# docker compose build
npm run compose:build
# run docker
npm run docker:run
# OR run docker compose up simply
npm run compose:up
# or run locally
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

## Docker Support

This project includes Docker support for containerized deployment. Here are the available Docker commands:

### Docker Commands

```bash
# Build Docker image
npm run docker:build

# Run Docker container
npm run docker:run

# Stop Docker containers
npm run docker:stop

# Remove Docker containers
npm run docker:remove

# Stop and remove containers
npm run docker:clean
```

### Docker Compose Commands

```bash
# Start with Docker Compose
npm run compose:up

# Build Docker Compose services
npm run compose:build

# Build and start services
npm run compose:up:build

# Start in detached mode
npm run compose:up:detach

# Stop Docker Compose services
npm run compose:down

# View logs
npm run compose:logs
```

## Features

- Infinite scrolling with React Redux Toolkit Query
- Framer Motion animations with card tilt effect
- Shared business logic in bridge folder
- Dockerized deployment
- Responsive design with Tailwind CSS