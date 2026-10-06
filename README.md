# ECOM

A multi-app food commerce project for a brand called ChowUp. The repository contains:

- `client/` — customer-facing storefront for browsing food items, filtering, searching, cart management, and checkout flows
- `admin/` — internal dashboard for managing products, categories, orders, customers, and sales insights

## Tech Stack

- Next.js
- React
- TypeScript
- Tailwind CSS
- Zustand for cart state
- Framer Motion for UI motion
- React Hook Form + Zod for forms

## Project Structure

```text
ECOM/
├── admin/                  # Admin dashboard app
│   ├── src/
│   ├── package.json
│   └── README.md
├── client/                 # Customer storefront app
│   ├── src/
│   ├── package.json
│   └── README.md
├── .gitignore
└── README.md              # This file
```

## Features

### Client app
- Hero-driven landing page
- Product listing and category filtering
- Search and sorting
- Product detail pages
- Shopping cart with persistent local cart state
- Checkout form flow and payment UI
- Sign-in page and responsive storefront layout

### Admin app
- Sales overview dashboard
- Orders management
- Product and category management
- Customer list and user details
- Inventory and status tracking
- UI panels for analytics and task tracking

## Prerequisites

Before running the apps, make sure you have:

- Node.js 18 or newer
- npm

## Installation

From the repo root, install dependencies for each app separately:

```bash
cd client
npm install

cd ../admin
npm install
```

## Running the Apps

### Start the storefront

```bash
cd client
npm run dev
```

Open http://localhost:3000

### Start the admin dashboard

```bash
cd admin
npm run dev -- --port 3001
```

Open http://localhost:3001

## Production Build

### Client

```bash
cd client
npm run build
npm run start
```

### Admin

```bash
cd admin
npm run build
npm run start -- --port 3001
```

## Linting

```bash
cd client
npm run lint

cd ../admin
npm run lint
```

## Notes

- The apps are set up as separate Next.js projects, so they should be started independently.
- The storefront and admin app each have their own `package.json` and dependency lockfile.
- The project is designed as a small commerce demo and is best suited for local development and UI exploration.

## License

This project does not currently include a project-specific license file. If you plan to distribute or deploy it publicly, add an appropriate OSS license before release.
