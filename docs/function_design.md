# Function Design

## Purpose

NatureLens AI should help users explore environmental information in Thailand through a lively interactive map. The app should turn scattered environmental data into simple AI-powered insights that help users understand natural areas, compare locations, detect changes, and support conservation or restoration planning.

The app should not claim that one area is absolutely the best. It should present opportunities, patterns, and explanations so users can make informed decisions.

## User Goals

- Explore natural areas in Thailand through an interactive map.
- Search and select provinces, districts, or specific locations.
- Understand the environmental profile of a selected area.
- View AI-generated explanations in simple language.
- Compare two areas side by side.
- Detect land cover or habitat changes over time.
- Toggle environmental layers on the map.
- Export a summary report for planning, education, or presentation.

## Main Features

- Interactive map of Thailand as the main visual element.
- Dark dashboard interface with green nature accents.
- Province/district/location search.
- Sidebar navigation.
- AI Insight Panel.
- Nature Opportunity Score.
- Nature Profile / Nature Fingerprint.
- Layer toggles:
  - Forest cover
  - Protected areas
  - Biodiversity records
  - Roads and settlements
  - Change detection
- Area comparison tool.
- Before/after change detection view.
- Exportable report.
- Thai / English language toggle.

## Input Data

- User-selected province, district, or map area.
- Thailand boundary and administrative boundary data.
- Satellite imagery.
- Land cover data.
- Forest cover data.
- Protected area data.
- Biodiversity occurrence records.
- Roads and settlement data.
- Historical land cover data.
- User-selected goal or scenario.

## Output Data

- Selected area name and location.
- Nature Opportunity Score.
- Nature Profile indicators.
- Land cover and ecosystem type.
- Forest cover summary.
- Habitat connectivity level.
- Nearby protected areas.
- Biodiversity summary.
- Human disturbance level.
- Change detection summary.
- AI-generated explanation.
- Suggested conservation or restoration options.
- Exportable report.

## User Interactions

- Open the app and view a lively map of Thailand.
- Search for a province, district, or place.
- Click an area on the map.
- View insights in the right-side panel.
- Switch between dashboard tabs.
- Toggle map layers on and off.
- Compare two selected areas.
- View before/after change detection.
- Change language between Thai and English.
- Export or save a report.

## Expected Behaviour

- The app should load the Thailand map clearly and smoothly.
- The map should feel alive using colored markers, layer overlays, and hover interactions.
- When the user selects an area, the right panel should update immediately.
- AI explanations should be clear, concise, and transparent.
- The app should avoid overclaiming or saying one area is absolutely “the best”.
- The app should show data uncertainty when information is limited.
- The interface should be visually polished, modern, and nature-themed.
- The app should work on desktop and mobile screens.

## Edge Cases

- If no data is available, show a clear message.
- If map data cannot load, show a retry option.
- If satellite or land cover data is incomplete, show a warning.
- If biodiversity data is limited, explain that results are based only on available records.
- If the selected area is outside Thailand, show that the prototype supports Thailand only.
- If the selected area is too small, ask the user to select a larger area.
- If the selected area is too large, summarize by sub-area.
- If datasets conflict, show uncertainty instead of one fixed answer.
- If AI explanation fails, show the raw indicators instead.

## Example Feature: Explore Nature Opportunity Area

The user should be able to select:
- Province or district
- Area on the Thailand map
- Environmental layer
- Conservation or restoration goal
- Comparison area

The app should analyze the selected area and show:
- Nature Opportunity Score
- Nature Profile
- Forest cover
- Connectivity level
- Nearby protected areas
- Biodiversity summary
- Human disturbance level
- Change detection
- AI explanation
- Suggested conservation or restoration options
- Export report button