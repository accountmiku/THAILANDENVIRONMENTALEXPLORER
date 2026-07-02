# Architecture

## Purpose

Explain how the system is organised.

## Main Components

A static map-first AI product interface with separate files for page structure, styling, interactions, and sample data. The map occupies the primary desktop workspace, while layers float over it and AI insights provide supporting context.

## File Structure

`src/` contains the app. `tests/` contains Node.js tests for the data module.

## Frontend and Backend Split

The prototype is frontend-only. It does not send or store user data.

## Data Flow

The user selects or searches for an area, `app.js` reads its summary, three-year history, and restoration guidance from `data.js`, then updates the AI Insight, Nature Profile, trend chart, comparison, change detection, and export views in the browser. Layer controls change presentation-only overlays. Markers are positioned as percentages inside an image-ratio canvas so they remain anchored when the screen size changes.

## Storage Method

No storage is used.

## External Libraries

The interface loads the Prompt font from Google Fonts. Tahoma is the local fallback when the font service is unavailable. No JavaScript libraries are used.
