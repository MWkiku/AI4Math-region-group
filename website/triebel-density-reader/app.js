const modules = [
  {
    id: 1,
    path: "全景",
    title: "引言：问题、对象与主结论",
    summary: "建立两类稠密性问题，区分普通光滑逼近与紧支光滑逼近，并给出五条研究路径的全景。",
    formula: "C∞(Ω) ∩ Y  与  C∞c(Ω) ∩ Y",
    route: ["辨认原空间 X、单 Hardy 加强空间 X̂ 与双 Hardy 空间 X̃。", "区分普通光滑稠密性和紧支光滑稠密性。", "阅读主要结果 A–C，建立全文结论地图。"],
    checks: ["我能说清两类稠密性问题为何不同。", "我能解释五条路径各自解决什么问题。", "我能复述全文的参数主线 aq 与 p(s+a)。"]
  },
  {
    id: 2,
    path: "预备知识",
    title: "统一记号与公共工具",
    summary: "集中定义加权混合差分半范数、三个空间、Hardy 条件与边界覆盖条件，并准备层测度和截断工具。",
    formula: "[f]X = ‖ |f(x)-f(y)| / |x-y|^(n/q+s) · d(y)^(-a) ‖Lp_x(Lq_y)",
    route: ["逐项核对 X、X̂、X̃ 的范数分量。", "理解边界覆盖条件如何推出层测度上界。", "掌握振幅截断与两层控制收敛。"],
    checks: ["我能解释权为什么只作用在内层变量 y。", "我能重证 |{d<u}∩B(z,ρ)| ≲ uρ^(n−1)。", "我知道几乎处处收敛为何不足以推出范数收敛。"]
  },
  {
    id: 3,
    path: "路径二 · 主结果",
    title: "Hardy 加强空间中的光滑稠密性",
    summary: "在边界覆盖条件和 aq<1 下，证明紧支光滑函数在单、双 Hardy 加强空间的完整范数中稠密。",
    formula: "AΩ + aq<1  ⇒  closure(C∞c(Ω)) = X̂，且 = X̃",
    route: ["先读主定理与证明依赖图。", "依次理解振幅截断、边界截断、固定内支集磨光。", "检查三个参数 N、ε、σ 的选择次序。"],
    checks: ["我能说明 aq<1 在哪里被使用。", "我能解释边界截断差核如何由 Hardy 项控制。", "我能独立复述单 Hardy 项主定理的三步证明。"]
  },
  {
    id: 4,
    path: "路径一",
    title: "加强空间与原空间之间的关系",
    summary: "比较三个空间的集合包含、较弱拓扑下的闭包与范数差异，避免把严格包含和稠密性混为一谈。",
    formula: "closure_X(X̃) = closure_X(X̂) = X₀",
    route: ["理解 X₀ 的原始范数闭包定义。", "证明两个加强空间在 X 中具有相同闭包。", "用距离幂和常数函数理解严格包含。"],
    checks: ["我能区分集合相等、范数等价和闭包相同。", "我能解释 X̃⊊X̂ 与两者各自稠密并不矛盾。", "我知道何时常数函数属于 X̂。"]
  },
  {
    id: 5,
    path: "路径四",
    title: "Hardy 不等式下的原空间稠密性",
    summary: "区分全空间 Hardy 不等式与紧支 Hardy 不等式：前者给出空间相等和稠密性传递，后者识别紧支闭包。",
    formula: "P(f)≤C‖f‖X ⇒ X=X̂；P(φ)≤C‖φ‖X ⇒ X₀=X̂",
    route: ["阅读全空间 Hardy 条件下的传递引理。", "比较紧支 Hardy 条件的闭包识别作用。", "研究对角指标与区间二进尺度结论。"],
    checks: ["我能解释两类 Hardy 假设的量词差异。", "我能推出全空间 Hardy 条件下的范数等价。", "我能说清次临界和超临界结论为何不同。"]
  },
  {
    id: 6,
    path: "路径五",
    title: "加强空间与原空间的非稠密性反例",
    summary: "用临界、超临界边界权和常数函数揭示紧支逼近的真实障碍，并区分非平凡反例与空间退化。",
    formula: "aq≥1 ⇒ X=span{1}；在适当指标下 closure(C∞c∩X̂)={0}⊊X̂",
    route: ["先阅读普通光滑稠密性，明确反例针对哪种闭包。", "分析 aq=1 与 aq>1 的加强空间反例。", "比较原空间退化、常数判据和混合指标障碍。"],
    checks: ["我能指出反例否定的是紧支稠密性而非普通光滑稠密性。", "我能验证 aq≥1 时权质量为何发散。", "我能区分 X̂ 非稠密与 X̃={0} 的平凡稠密。"]
  },
  {
    id: 7,
    path: "路径三",
    title: "局部化方法：传递与范数不等价",
    summary: "研究局部差分半范数何时可替代全域范数；给出范数等价时的闭包传递，以及权和混合指标造成的失败。",
    formula: "X = Xloc 且范数等价  ⇒  两种拓扑下闭包一致",
    route: ["理解局部积分区域 |x−y|<θd(x)。", "阅读等价成立时的闭包传递命题。", "分析权不可积和 p<q 时的范数不等价反例。"],
    checks: ["我能解释局部范数总是不超过全域范数。", "我知道范数不等价为何不自动推出普通光滑不稠密。", "我能复述混合指标反例的尺度选择。"]
  },
  {
    id: 8,
    path: "统一结论",
    title: "结论、参数图景与后续问题",
    summary: "把普通光滑、加强范数紧支逼近和原始范数紧支逼近放入同一框架，并列出尚未覆盖的临界问题。",
    formula: "普通光滑稠密 → 加强空间紧支稠密 → 原空间紧支闭包判定",
    route: ["阅读统一结论表并逐行核对假设。", "按 aq、p(s+a)、p=q 三个轴整理参数图景。", "选择一个开放问题形成下一轮研究计划。"],
    checks: ["我能画出全文的结论分区图。", "我不会把某种方法失效误判为稠密性失效。", "我已选定一个可继续工作的开放问题。"]
  }
];

const stateNames = { todo: "未开始", active: "精读中", done: "已完成" };
const states = JSON.parse(localStorage.getItem("triebel-reading-states") || "{}");
let currentModule = null;
let currentObjectUrl = null;

const dbPromise = new Promise((resolve, reject) => {
  const request = indexedDB.open("triebel-deep-reader", 1);
  request.onupgradeneeded = () => request.result.createObjectStore("modulePdfs", { keyPath: "id" });
  request.onsuccess = () => resolve(request.result);
  request.onerror = () => reject(request.error);
});

async function dbGet(id) {
  const db = await dbPromise;
  return new Promise((resolve, reject) => {
    const req = db.transaction("modulePdfs", "readonly").objectStore("modulePdfs").get(id);
    req.onsuccess = () => resolve(req.result || null);
    req.onerror = () => reject(req.error);
  });
}

async function dbPut(record) {
  const db = await dbPromise;
  return new Promise((resolve, reject) => {
    const req = db.transaction("modulePdfs", "readwrite").objectStore("modulePdfs").put(record);
    req.onsuccess = () => resolve();
    req.onerror = () => reject(req.error);
  });
}

async function dbDelete(id) {
  const db = await dbPromise;
  return new Promise((resolve, reject) => {
    const req = db.transaction("modulePdfs", "readwrite").objectStore("modulePdfs").delete(id);
    req.onsuccess = () => resolve();
    req.onerror = () => reject(req.error);
  });
}

function getState(id) { return states[id] || "todo"; }
function setState(id, value) {
  states[id] = value;
  localStorage.setItem("triebel-reading-states", JSON.stringify(states));
  updateProgress();
  const card = document.querySelector(`.module-card[data-id="${id}"]`);
  if (card) {
    card.dataset.state = value;
    card.querySelector(".state-button").textContent = stateNames[value];
  }
}

function cycleState(id) {
  const next = { todo: "active", active: "done", done: "todo" }[getState(id)];
  setState(id, next);
}

function updateProgress() {
  const values = modules.map(m => getState(m.id));
  const done = values.filter(v => v === "done").length;
  const active = values.filter(v => v === "active").length;
  const percent = Math.round(((done + active * .5) / modules.length) * 100);
  document.getElementById("progressRing").style.setProperty("--progress", `${percent * 3.6}deg`);
  document.getElementById("progressPercent").textContent = `${percent}%`;
  document.getElementById("doneCount").textContent = done;
  document.getElementById("activeCount").textContent = active;
  document.getElementById("progressTitle").textContent = done === 8 ? "八章精读完成" : active ? `${active} 个模块精读中` : done ? `已完成 ${done} 章` : "尚未开始";
  document.getElementById("progressDetail").textContent = done === 8 ? "你已经完成第一轮阅读，可以进入复述与修订。" : "点击状态标签可在未开始、精读中和已完成之间切换。";
}

async function markCustomVersions() {
  for (const item of modules) {
    const record = await dbGet(item.id);
    const dot = document.querySelector(`.module-card[data-id="${item.id}"] .version-dot`);
    if (dot && record) {
      dot.textContent = "已载入修订版";
      dot.classList.add("custom");
    }
  }
}

function renderModules() {
  const grid = document.getElementById("moduleGrid");
  grid.innerHTML = modules.map(item => `
    <article class="module-card" data-id="${item.id}" data-state="${getState(item.id)}">
      <div class="module-index">${String(item.id).padStart(2, "0")}</div>
      <div>
        <div class="module-meta"><span class="path-tag">${item.path}</span><button class="state-button" data-state-id="${item.id}">${stateNames[getState(item.id)]}</button></div>
        <h3>${item.title}</h3>
        <p>${item.summary}</p>
        <span class="formula">${item.formula}</span>
        <div class="card-actions"><button class="read-button" data-open-id="${item.id}">打开精读讲义</button><span class="version-dot">独立章节 PDF</span></div>
      </div>
    </article>`).join("");
  grid.querySelectorAll("[data-state-id]").forEach(btn => btn.addEventListener("click", () => cycleState(Number(btn.dataset.stateId))));
  grid.querySelectorAll("[data-open-id]").forEach(btn => btn.addEventListener("click", () => openModule(Number(btn.dataset.openId))));
  markCustomVersions();
}

function checksFor(id) {
  return JSON.parse(localStorage.getItem(`triebel-checks-${id}`) || "[]");
}

function renderChecks(item) {
  const checked = checksFor(item.id);
  document.getElementById("dialogChecks").innerHTML = item.checks.map((text, index) => `
    <label class="check-item"><input type="checkbox" data-check="${index}" ${checked[index] ? "checked" : ""}><span>${text}</span></label>`).join("");
  document.querySelectorAll("[data-check]").forEach(input => input.addEventListener("change", () => {
    const values = item.checks.map((_, index) => document.querySelector(`[data-check="${index}"]`).checked);
    localStorage.setItem(`triebel-checks-${item.id}`, JSON.stringify(values));
  }));
}

async function loadPdf(item) {
  if (currentObjectUrl) URL.revokeObjectURL(currentObjectUrl);
  currentObjectUrl = null;
  const record = await dbGet(item.id);
  let url;
  if (record) {
    currentObjectUrl = URL.createObjectURL(record.blob);
    url = currentObjectUrl;
    document.getElementById("versionBadge").textContent = "修订版";
    document.getElementById("versionInfo").textContent = `${record.name} · ${new Date(record.updatedAt).toLocaleString("zh-CN")}`;
    document.getElementById("restoreOriginal").hidden = false;
  } else {
    url = `modules/chapter-${item.id}.pdf`;
    document.getElementById("versionBadge").textContent = "原版";
    document.getElementById("versionInfo").textContent = "当前显示随网页发布的章节 PDF。";
    document.getElementById("restoreOriginal").hidden = true;
  }
  document.getElementById("pdfFrame").src = `${url}#view=FitH&toolbar=1`;
  document.getElementById("openExternal").href = url;
  document.getElementById("pdfLabel").textContent = record ? `修订版 · ${record.name}` : `第 ${item.id} 章 · 原版`;
}

async function openModule(id) {
  const item = modules.find(m => m.id === id);
  currentModule = item;
  localStorage.setItem("triebel-last-module", String(id));
  if (getState(id) === "todo") setState(id, "active");
  document.getElementById("dialogKicker").textContent = `MODULE ${String(id).padStart(2, "0")} · ${item.path}`;
  document.getElementById("dialogTitle").textContent = item.title;
  document.getElementById("dialogSummary").textContent = item.summary;
  document.getElementById("dialogRoute").innerHTML = item.route.map(step => `<li>${step}</li>`).join("");
  renderChecks(item);
  await loadPdf(item);
  document.getElementById("moduleDialog").showModal();
}

function closeDialog() {
  const dialog = document.getElementById("moduleDialog");
  dialog.close();
  document.getElementById("pdfFrame").src = "about:blank";
  if (currentObjectUrl) URL.revokeObjectURL(currentObjectUrl);
  currentObjectUrl = null;
}

document.getElementById("closeDialog").addEventListener("click", closeDialog);
document.getElementById("moduleDialog").addEventListener("click", event => {
  if (event.target === document.getElementById("moduleDialog")) closeDialog();
});

document.getElementById("pdfUpload").addEventListener("change", async event => {
  const file = event.target.files[0];
  if (!file || !currentModule) return;
  if (file.type !== "application/pdf" && !file.name.toLowerCase().endsWith(".pdf")) {
    alert("请上传 PDF 文件。");
    return;
  }
  if (file.size > 50 * 1024 * 1024) {
    alert("单个模块 PDF 请控制在 50 MB 以内。");
    return;
  }
  await dbPut({ id: currentModule.id, blob: file, name: file.name, updatedAt: Date.now() });
  const dot = document.querySelector(`.module-card[data-id="${currentModule.id}"] .version-dot`);
  dot.textContent = "已载入修订版";
  dot.classList.add("custom");
  await loadPdf(currentModule);
  event.target.value = "";
});

document.getElementById("restoreOriginal").addEventListener("click", async () => {
  if (!currentModule || !confirm("确定恢复该模块随网页发布的原版 PDF 吗？")) return;
  await dbDelete(currentModule.id);
  const dot = document.querySelector(`.module-card[data-id="${currentModule.id}"] .version-dot`);
  dot.textContent = "独立章节 PDF";
  dot.classList.remove("custom");
  await loadPdf(currentModule);
});

document.querySelectorAll("[data-module]").forEach(button => button.addEventListener("click", () => openModule(Number(button.dataset.module))));
document.getElementById("continueReading").addEventListener("click", () => openModule(Number(localStorage.getItem("triebel-last-module") || 1)));

renderModules();
updateProgress();
