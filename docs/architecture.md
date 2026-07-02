# Architecture

## Purpose

Explain how the system is organised.

## Main Components

A static dark-dashboard browser application with separate files for page structure, styling, interactions, and sample data.

## File Structure

`src/` contains the app. `tests/` contains Node.js tests for the data module.

## Frontend and Backend Split

The prototype is frontend-only. It does not send or store user data.

## Data Flow

The user selects or searches for an area, `app.js` reads its summary, three-year history, and restoration guidance from `data.js`, then updates the AI Insight, Nature Profile, trend chart, comparison, change detection, and export views in the browser. Layer controls change presentation-only overlays. Markers are positioned as percentages inside an image-ratio canvas so they remain anchored when the screen size changes.

## Storage Method

No storage is used.

## External Libraries

No external libraries are used.
