// ===============================================
// 共通ロジック：保存・読込・カスタムアチーブメント
// localStorage に保存するので再訪問時も獲得状況が残ります
// ===============================================
const STORE = {
  unlocked: "cosam_unlocked_v1", // { id: timestamp }
  custom:   "cosam_custom_v1",   // [ {id,cat,icon,title,desc} ]
  bingo:    "cosam_bingo_v1",    // [ id x24 ]
};

function loadJSON(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch (e) { return fallback; }
}
function saveJSON(key, val) {
  localStorage.setItem(key, JSON.stringify(val));
}

// --- カスタムアチーブメント ---
function getCustomAchievements() { return loadJSON(STORE.custom, []); }

function addCustomAchievement(title, desc, icon) {
  const list = getCustomAchievements();
  const item = {
    id: "custom-" + Date.now(),
    cat: "custom",
    icon: icon && icon.trim() ? icon.trim() : "⭐",
    title: title.trim(),
    desc: (desc || "").trim(),
  };
  list.push(item);
  saveJSON(STORE.custom, list);
  return item;
}

function removeCustomAchievement(id) {
  saveJSON(STORE.custom, getCustomAchievements().filter(a => a.id !== id));
  const un = loadJSON(STORE.unlocked, {});
  delete un[id];
  saveJSON(STORE.unlocked, un);
}

// --- 全アチーブメント ---
function getAllAchievements() {
  return DEFAULT_ACHIEVEMENTS.concat(getCustomAchievements());
}
function findAchievement(id) {
  return getAllAchievements().find(a => a.id === id);
}

// --- 獲得状況 ---
function getUnlockedMap() { return loadJSON(STORE.unlocked, {}); }
function isUnlocked(id) { return !!getUnlockedMap()[id]; }

function toggleUnlocked(id) {
  const map = getUnlockedMap();
  let nowUnlocked;
  if (map[id]) { delete map[id]; nowUnlocked = false; }
  else { map[id] = Date.now(); nowUnlocked = true; }
  saveJSON(STORE.unlocked, map);
  return nowUnlocked;
}

function getProgress() {
  const all = getAllAchievements();
  const map = getUnlockedMap();
  const done = all.filter(a => map[a.id]).length;
  return { done, total: all.length, pct: all.length ? Math.round(done / all.length * 100) : 0 };
}

// --- ビンゴカード（24マス＋中央FREE）---
function generateBingoCard(force) {
  let card = loadJSON(STORE.bingo, null);
  const validIds = new Set(getAllAchievements().map(a => a.id));
  if (force || !card || card.length !== 24 || card.some(id => !validIds.has(id))) {
    const pool = getAllAchievements().map(a => a.id);
    for (let i = pool.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [pool[i], pool[j]] = [pool[j], pool[i]];
    }
    card = pool.slice(0, 24);
    saveJSON(STORE.bingo, card);
  }
  return card;
}

// ビンゴ判定：達成ライン数を返す（中央はFREE）
function countBingoLines(cells /* 25個の boolean、中央index12はtrue */) {
  let lines = 0;
  const at = (r, c) => cells[r * 5 + c];
  for (let r = 0; r < 5; r++) if ([0,1,2,3,4].every(c => at(r,c))) lines++;
  for (let c = 0; c < 5; c++) if ([0,1,2,3,4].every(r => at(r,c))) lines++;
  if ([0,1,2,3,4].every(i => at(i,i))) lines++;
  if ([0,1,2,3,4].every(i => at(i,4-i))) lines++;
  return lines;
}

// --- ヘッダーの進捗表示（各ページ共通）---
function renderProgressBadge(el) {
  if (!el) return;
  const p = getProgress();
  el.textContent = `🏆 ${p.done} / ${p.total} (${p.pct}%)`;
}

// --- トースト通知 ---
function showToast(msg) {
  let t = document.querySelector(".toast");
  if (!t) {
    t = document.createElement("div");
    t.className = "toast";
    document.body.appendChild(t);
  }
  t.textContent = msg;
  t.classList.add("show");
  clearTimeout(t._timer);
  t._timer = setTimeout(() => t.classList.remove("show"), 2200);
}
