import { areas, getArea } from "./data.js";

const insightEmpty = document.querySelector("#insight-empty");
const insightContent = document.querySelector("#insight-content");
const selectedSummary = document.querySelector("#selected-summary");
const mapStatus = document.querySelector("#map-status");
let selectedAreaId = null;
let currentLanguage = "th";

function profileRow(label, value, inverse = false) {
  const displayValue = inverse ? 100 - value : value;
  return `<div class="profile-row"><div><span>${label}</span><b>${value}</b></div><div class="profile-bar"><i style="width:${displayValue}%"></i></div></div>`;
}

function historyChart(history) {
  const points = history.map((item, index) => {
    const x = 18 + (index * 132);
    const y = 102 - item.nature;
    return { ...item, x, y };
  });
  return `<section class="history-card"><div class="section-title"><h3>ข้อมูลย้อนหลัง 3 ปี</h3><small>ดัชนีธรรมชาติจำลอง (0–100)</small></div><svg class="history-chart" viewBox="0 0 300 120" role="img" aria-label="กราฟดัชนีธรรมชาติย้อนหลัง 3 ปี"><line x1="18" y1="102" x2="282" y2="102"></line><polyline points="${points.map((point) => `${point.x},${point.y}`).join(" ")}"></polyline>${points.map((point) => `<circle cx="${point.x}" cy="${point.y}" r="4"></circle><text x="${point.x}" y="${point.y - 10}" text-anchor="middle">${point.nature}</text><text x="${point.x}" y="116" text-anchor="middle">${point.year}</text>`).join("")}</svg></section>`;
}

function showArea(areaId) {
  const area = getArea(areaId);
  if (!area) return;
  selectedAreaId = areaId;
  document.querySelectorAll(".map-marker").forEach((marker) => marker.classList.toggle("selected", marker.dataset.area === areaId));
  insightEmpty.hidden = true;
  insightContent.hidden = false;
  mapStatus.textContent = `● ${area.name}`;
  selectedSummary.innerHTML = `<span class="summary-score">${area.score}</span><div><b>${area.name}</b><small>Nature Opportunity Score</small></div>`;
  insightContent.innerHTML = `
    <div class="insight-head"><div><p class="kicker">AI INSIGHT PANEL</p><h2>${currentLanguage === "th" ? area.name : area.nameEn}</h2><small>${area.ecosystem}</small></div><div class="score-ring"><b>${area.score}</b><span>/100</span></div></div>
    <div class="opportunity-label">ศักยภาพ${area.level}<span>ข้อมูลจำลอง</span></div>
    <section class="ai-explanation"><div class="ai-mini">AI</div><p>${area.insight}</p></section>
    <section class="profile"><h3>Nature Profile</h3>${profileRow("Forest cover", area.forest)}${profileRow("Connectivity", area.connectivity)}${profileRow("Biodiversity", area.biodiversity)}${profileRow("Low disturbance", area.disturbance, true)}</section>
    ${historyChart(area.history)}
    <div class="metric-grid"><div><span>Nearby protected area</span><b>${area.protectedArea}</b></div><div><span>Nature change</span><b class="${area.change >= 0 ? "positive" : "negative"}">${area.change > 0 ? "+" : ""}${area.change}%</b></div></div>
    <section class="action-card"><span>แนวทางที่น่าสำรวจ</span><strong>${area.recommendation}</strong><small>${area.caution}</small></section>
    <section class="restoration-card"><h3>แนวทางฟื้นฟูที่เหมาะกับพื้นที่</h3><ol>${area.restorationSteps.map((step) => `<li>${step}</li>`).join("")}</ol><small>ควรสำรวจพื้นที่จริงและออกแบบร่วมกับชุมชนก่อนดำเนินการ</small></section>
    <details><summary>แหล่งที่มาและการอัปเดต</summary><ul>${area.sources.map((source) => `<li>${source}</li>`).join("")}</ul><p>อัปเดต ${area.updatedAt} · ปรับปรุงด้วยตนเอง</p></details>`;
  updateChangeSummary(area);
}

function updateChangeSummary(area) {
  const direction = area.change >= 0 ? "เพิ่มขึ้น" : "ลดลง";
  document.querySelector("#change-summary").innerHTML = `<h2>${area.name}</h2><p>พื้นที่ธรรมชาติ${direction}ประมาณ <strong>${Math.abs(area.change)}%</strong> ในข้อมูลจำลอง ควรตรวจสอบกับภาพถ่ายดาวเทียมจริงก่อนนำไปใช้</p>`;
}

function switchView(viewId) {
  document.querySelectorAll(".view").forEach((view) => view.classList.toggle("active-view", view.id === viewId));
  document.querySelectorAll(".nav-item").forEach((item) => item.classList.toggle("active", item.dataset.view === viewId));
  document.querySelector(".sidebar").classList.remove("open");
}

function renderComparison() {
  const areaA = getArea(document.querySelector("#compare-a").value);
  const areaB = getArea(document.querySelector("#compare-b").value);
  document.querySelector("#comparison-cards").innerHTML = [areaA, areaB].map((area) => `<article><p class="kicker">NATURE PROFILE</p><h2>${area.name}</h2><div class="large-score">${area.score}<span>/100</span></div>${profileRow("Forest", area.forest)}${profileRow("Connectivity", area.connectivity)}${profileRow("Biodiversity", area.biodiversity)}<p>${area.insight}</p></article>`).join("");
}

function exportReport() {
  const area = selectedAreaId ? getArea(selectedAreaId) : null;
  if (!area) { mapStatus.textContent = "กรุณาเลือกพื้นที่ก่อน Export"; return; }
  const history = area.history.map((item) => `${item.year}: ${item.nature}/100`).join(", ");
  const restoration = area.restorationSteps.map((step, index) => `${index + 1}. ${step}`).join("\n");
  const report = `NatureLens AI — Prototype Report\nพื้นที่: ${area.name}\nNature Opportunity Score: ${area.score}/100\nระบบนิเวศ: ${area.ecosystem}\nAI Insight: ${area.insight}\nข้อมูลย้อนหลัง: ${history}\nแนวทาง: ${area.recommendation}\n\nแนวทางฟื้นฟูเฉพาะพื้นที่\n${restoration}\n\nข้อควรระวัง: ${area.caution}\nอัปเดต: ${area.updatedAt}\n\nข้อมูลนี้เป็นข้อมูลจำลอง ไม่ใช่ข้อสรุปทางวิทยาศาสตร์`;
  const link = document.createElement("a");
  link.href = URL.createObjectURL(new Blob([report], { type: "text/plain;charset=utf-8" }));
  link.download = `naturelens-${areaIdForFile(selectedAreaId)}.txt`;
  link.click();
  URL.revokeObjectURL(link.href);
}

function areaIdForFile(areaId) { return areaId.replace(/[^a-z-]/g, ""); }

document.querySelectorAll(".map-marker").forEach((marker) => marker.addEventListener("click", () => showArea(marker.dataset.area)));
document.querySelectorAll(".nav-item").forEach((item) => item.addEventListener("click", () => switchView(item.dataset.view)));
document.querySelectorAll("[data-layer]").forEach((input) => {
  const layer = document.querySelector(`#layer-${input.dataset.layer}`);
  layer.classList.toggle("visible", input.checked);
  input.addEventListener("change", () => layer.classList.toggle("visible", input.checked));
});

const areaEntries = Object.entries(areas);
const compareA = document.querySelector("#compare-a");
const compareB = document.querySelector("#compare-b");
for (const [id, area] of areaEntries) {
  compareA.add(new Option(area.name, id));
  compareB.add(new Option(area.name, id));
}
compareB.value = "krabi";
compareA.addEventListener("change", renderComparison);
compareB.addEventListener("change", renderComparison);
renderComparison();

document.querySelector("#area-search").addEventListener("change", (event) => {
  const match = areaEntries.find(([, area]) => [area.name, area.nameEn.toLowerCase()].includes(event.target.value.trim().toLowerCase()) || area.name === event.target.value.trim());
  if (match) { switchView("map-view"); showArea(match[0]); }
  else mapStatus.textContent = "ไม่พบพื้นที่ในต้นแบบ";
});
document.querySelector("#language-toggle").addEventListener("click", () => {
  currentLanguage = currentLanguage === "th" ? "en" : "th";
  document.documentElement.lang = currentLanguage;
  document.querySelectorAll("[data-th]").forEach((element) => element.textContent = element.dataset[currentLanguage]);
  if (selectedAreaId) showArea(selectedAreaId);
});
document.querySelector("#export-button").addEventListener("click", exportReport);
document.querySelector(".mobile-menu").addEventListener("click", () => document.querySelector(".sidebar").classList.toggle("open"));
