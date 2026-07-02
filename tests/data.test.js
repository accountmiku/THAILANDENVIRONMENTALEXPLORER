import test from "node:test";
import assert from "node:assert/strict";
import { areas, getArea } from "../src/data.js";

test("returns environmental summary for a supported area", () => {
  assert.equal(getArea("krabi").name, "กระบี่");
});

test("returns null for an unsupported area", () => {
  assert.equal(getArea("outside"), null);
});

test("all opportunity scores use the 0-100 range", () => {
  for (const area of Object.values(areas)) {
    assert.ok(area.score >= 0 && area.score <= 100);
  }
});

test("all area summaries identify their sources and update date", () => {
  for (const area of Object.values(areas)) {
    assert.ok(area.updatedAt);
    assert.ok(area.sources.length > 0);
  }
});

test("all nature profile indicators use the 0-100 range", () => {
  for (const area of Object.values(areas)) {
    for (const indicator of [area.forest, area.connectivity, area.biodiversity, area.disturbance]) {
      assert.ok(indicator >= 0 && indicator <= 100);
    }
  }
});

test("all areas include three years of valid history", () => {
  for (const area of Object.values(areas)) {
    assert.equal(area.history.length, 3);
    assert.equal(new Set(area.history.map((item) => item.year)).size, 3);
    for (const item of area.history) assert.ok(item.nature >= 0 && item.nature <= 100);
  }
});

test("all areas include specific restoration guidance", () => {
  for (const area of Object.values(areas)) {
    assert.ok(area.restorationSteps.length >= 1);
    assert.ok(area.restorationSteps.every((step) => step.length > 0));
  }
});
