// =====================================================================
// chart.js — простой график уровня по контрольным, нарисованный обычным
// SVG (без графических библиотек). Используется на странице прогресса.
// =====================================================================

// Нарисовать график в container.
//   points — точки по датам, ПО ВОЗРАСТАНИЮ: [{ date: "2026-09-01", level: "A2" }, ...]
function renderLevelChart(container, points) {
  if (points.length === 0) {
    container.innerHTML = '<p class="muted">Пока нет данных — график появится после первой контрольной.</p>';
    return;
  }

  // Размеры «холста». viewBox сам растянет svg под ширину контейнера.
  const W = 640, H = 200;
  const padL = 34, padR = 16, padT = 16, padB = 26;
  const innerW = W - padL - padR;
  const innerH = H - padT - padB;
  const n = points.length;
  const stepX = n > 1 ? innerW / (n - 1) : 0;

  // Координаты: по X — точки по порядку, по Y — уровень (A1 внизу, C1 наверху)
  function x(i) { return padL + (n > 1 ? i * stepX : innerW / 2); }
  function y(level) { return padT + innerH - (levelIndex(level) / (LEVELS.length - 1)) * innerH; }

  let svg = '<svg viewBox="0 0 ' + W + ' ' + H + '" class="level-chart" role="img" aria-label="График уровня по контрольным">';

  // Горизонтальные линии-подсказки и подписи уровней слева
  LEVELS.forEach(function (lvl) {
    const ly = y(lvl);
    svg += '<line class="chart-grid" x1="' + padL + '" y1="' + ly + '" x2="' + (W - padR) + '" y2="' + ly + '"></line>';
    svg += '<text class="chart-axis" x="2" y="' + (ly + 4) + '">' + lvl + "</text>";
  });

  // Линия, соединяющая точки
  const path = points.map(function (p, i) {
    return (i === 0 ? "M" : "L") + x(i).toFixed(1) + " " + y(p.level).toFixed(1);
  }).join(" ");
  svg += '<path class="chart-line" d="' + path + '" fill="none"></path>';

  // Сами точки + подписи дат под ними (если точек много — подписываем через одну, чтобы не наслаивались)
  const labelEvery = n > 8 ? Math.ceil(n / 8) : 1;
  points.forEach(function (p, i) {
    const px = x(i), py = y(p.level);
    svg += '<circle class="chart-dot" cx="' + px.toFixed(1) + '" cy="' + py.toFixed(1) + '" r="4"><title>' +
      escapeHtml(formatDate(p.date)) + ": " + p.level + "</title></circle>";
    if (i % labelEvery === 0 || i === n - 1) {
      svg += '<text class="chart-date" x="' + px.toFixed(1) + '" y="' + (H - 6) + '" text-anchor="middle">' + shortDate(p.date) + "</text>";
    }
  });

  svg += "</svg>";
  container.innerHTML = svg;
}

// "2026-09-01" → "1.09" — короткая дата для подписи под графиком
function shortDate(str) {
  const parts = str.split("-");
  return Number(parts[2]) + "." + parts[1];
}
