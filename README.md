# SQnovaWeb

## Overview
SQnovaWeb is a high-performance, single-page application (SPA) landing page for the SQnova VPN service. It is designed to provide a "snap" feeling during scrolling with **static rendering** (no lazy-loading on scroll to prevent layout jumps) and preloading strategies during idle time. The UI is in Persian (Farsi) and fully RTL.

## Features
- **Interactive Pricing Configurator:** Sliders for data volume and duration, protocol selection with real-time price calculation.
- **Product Sections:** Hero with network simulation, Protocol Deep Dive, Comparison Table, Privacy/Terms, Free Trial banners, Client App Downloads, FAQ.
- **Accessibility:** Native buttons, ARIA attributes (`aria-pressed`, `aria-expanded`, `aria-controls`), focus-visible indicators, and reduced-motion support.
- **Testing:** Vitest + React Testing Library for core logic and user interactions.

## Tech Stack
- **Framework:** React 19
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Build Tool:** Vite 8
- **Testing:** Vitest + React Testing Library
- **Icons:** Lucide React

## Architecture
This project follows a separation of concerns:
- **App:** Composition root (No business logic).
- **Components:** UI and layout presentation.
- **Hooks:** Reusable behavior logic (e.g., navigation, simulation).
- **Domain:** Business logic (e.g., pricing calculation).
- **Data:** Static configuration data (e.g., protocols, servers).
- **Utils:** Generic helpers.

## Project Structure
```text
src/
├── app/              # App-level files (e.g., ErrorBoundary)
├── components/       # React components
│   └── ui/           # UI primitives (e.g., SectionShell)
├── data/             # Static data (e.g., protocols, servers)
├── domain/           # Pure business logic (e.g., pricing)
├── hooks/            # Custom React hooks
├── test/             # Test setup files
├── types.ts          # TypeScript types
└── main.tsx
