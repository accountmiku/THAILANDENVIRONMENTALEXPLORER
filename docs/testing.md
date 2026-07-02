# Testing

## Purpose

Explain how to test the project.

## How to Run the App

Run `python -m http.server 8000 --directory src`, then open `http://localhost:8000`.

## How to Run Automated Tests

Run `npm test` from the project root.

## Success Criteria

Before changing code, turn the task into a verifiable goal. For example:

- "Add validation" means invalid inputs are tested and rejected.
- "Fix a bug" means there is a test or manual check that reproduces the bug before the fix and passes after the fix.
- "Refactor code" means behaviour is unchanged and tests pass before and after.

For multi-step tasks, use a short plan:

```text
1. [Step] -> verify: [check]
2. [Step] -> verify: [check]
3. [Step] -> verify: [check]
```

## Manual Testing Checklist

- [ ] Can the app start without errors?
- [ ] Can the user enter valid data?
- [ ] Does the app reject invalid data?
- [ ] Is the data saved correctly?
- [ ] Does the table update correctly?
- [ ] Does the chart update correctly, if charts have been added?

## Common Failure Cases

- Unsupported areas must show a clear Thailand-only message.
- Missing area records must not cause an error.
- Opportunity scores must be between 0 and 100.
- Every supported area must identify at least one source and an update date.
- Every Nature Profile indicator must be between 0 and 100.
- Every supported area must have exactly three distinct history years with values between 0 and 100.
- Every supported area must include restoration guidance.
- Every supported area must include at least four example species from at least two categories.

## Expected Outputs

Krabi is selected on initial load. Selecting or searching for Chiang Mai, Nakhon Nayok, or Krabi updates AI Insight, Nature Profile, example species, the KPI strip, the three-year chart, and restoration guidance. The top-right clock shows the current date and Thailand time. Markers remain anchored to the same approximate provincial region across screen sizes. Layer toggles change the map overlay. Comparison shows two area profiles. Change detection uses the most recently selected area. Export produces a text report for the selected area.
