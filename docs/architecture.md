# Architecture

## Purpose

Explain how the system is organised.

## Main Components

A static map-first AI product interface with separate files for page structure, styling, interactions, and sample data. A dark navigation rail frames a light workspace: the map occupies the primary desktop area, AI insights sit alongside it, and a KPI strip summarizes the selected area below.

## File Structure

`src/` contains the app. `tests/` contains Node.js tests for the data module.

## Frontend and Backend Split

The prototype is frontend-only. It does not send or store user data.

## Data Flow

The app initially selects Krabi so the product opens with a complete example. When the user selects or searches for another area, `app.js` reads its summary, example species, three-year history, and restoration guidance from `data.js`, then updates the AI Insight, Nature Profile, biodiversity card, KPI strip, trend chart, comparison, change detection, and export views in the browser. Layer controls change presentation-only overlays. Markers are positioned as percentages inside an image-ratio canvas so they remain anchored when the screen size changes. A browser timer formats the current date and time in the Asia/Bangkok timezone.

## Storage Method

No storage is used.

## External Libraries

The interface loads the Prompt font from Google Fonts. Tahoma is the local fallback when the font service is unavailable. No JavaScript libraries are used.

## GitHub Pages

The repository root redirects visitors to the application in `src/`. Jekyll excludes `outputs/` from the Pages artifact so presentation files remain downloadable from the repository without being included in the deployed website.
