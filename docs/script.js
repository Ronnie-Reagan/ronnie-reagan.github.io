const projects = [
  {
    name: "DFPWM Jukebox",
    path: "DFPWM_LIBRARY",
    description: "Browser-side DFPWM playback system and audio toy.",
    category: "audio",
    tags: ["audio", "player", "web"],
    status: "live",
    featured: true,
    preview: true,
  },
  {
    name: "Audio Visualizer Extension",
    path: "AudioVisualizerExtension",
    description: "A Chromium extension audio-visualizer.",
    category: "audio",
    tags: ["audio", "visualizer", "extension"],
    status: "live",
    featured: true,
    preview: true,
  },
  {
    name: "Procedural Launcher",
    path: "procedural_launcher",
    description: "Launcher-style game with procedurally generated levels.",
    category: "web",
    tags: ["game", "launcher", "web"],
    status: "live",
    featured: true,
  },
  {
    name: "WebRTC Chat",
    path: "WebRTC-Chat",
    description: "Browser chat experiment using realtime web communication.",
    category: "web",
    tags: ["chat", "webrtc", "realtime"],
    status: "live",
    featured: true,
  },
  {
    name: "Web-Based Speedometer",
    path: "web_based-speedometer",
    description: "Vehicle speedometer browser experiment.",
    category: "tool",
    tags: ["vehicle", "ui", "demo"],
    status: "live",
    featured: true,
  },
  {
    name: "DonCraft - Rust",
    path: "DonCraft-Rust",
    description: "Experimental landing page for a future project—Rust server.",
    category: "game",
    tags: ["rust", "game", "native"],
    status: "live",
    featured: true,
  },
  {
    name: "BlackJack Simulator",
    path: "BlackJack_Sim",
    description: "Casino-style simulation project.",
    category: "game",
    tags: ["simulation", "cards", "game"],
    status: "live",
    featured: false,
  },
  {
    name: "Cherax Lua Doc Viewer [offline]",
    path: "cherax_lua_doc_viewer",
    description: "Offline viewer for Lua documentation and reference material.",
    category: "offline",
    tags: ["offline", "docs", "viewer"],
    status: "offline",
    featured: false,
  },
  {
    name: "Cherax Viewer Pro [offline]",
    path: "Cherax_Viewer_Pro",
    description: "Offline viewer for Lua documentation and reference material.",
    category: "offline",
    tags: ["offline", "viewer", "utility"],
    status: "offline",
    featured: false,
  },
  {
    name: "Click Me Game",
    path: "Click_Me_Game",
    description: "Small web game experiment with a very direct premise.",
    category: "game",
    tags: ["game", "web", "casual"],
    status: "live",
    featured: false,
  },
  {
    name: "Dayton's Menu",
    path: "DaytonsMenu",
    description: "Offline menu project, written in part by Dayton.",
    category: "offline",
    tags: ["offline", "menu", "ui", "utility"],
    status: "offline",
    featured: false,
  },
  {
    name: "Draw the Path",
    path: "Draw_the_Path",
    description: "Path drawing-oriented interactive game.",
    category: "web",
    tags: ["drawing", "path", "interactive", "game"],
    status: "live",
    featured: false,
  },
  {
    name: "Solar Calculator",
    path: "FredsSolarCaclculator",
    description: "Solar and battery calculation tool.",
    category: "tool",
    tags: ["calculator", "solar", "utility"],
    status: "live",
    featured: false,
  },
  {
    name: "[NSFW] Gaymers Game",
    path: "Gaymers_Game",
    description: "NSFW-tagged game thrown together with 'assets' drawn with Dr.Paint.",
    category: "game",
    tags: ["nsfw", "game"],
    status: "live",
    featured: false,
  },
  {
    name: "Mod Reagan",
    path: "Mod-Reagan",
    description: "Moderation focused 'all-seeing eye' for discord moderation/peace-keeping.",
    category: "offline",
    tags: ["offline", "mod", "tool", "project"],
    status: "offline",
    featured: false,
  },
  {
    name: "Radio Station [offline]",
    path: "radioStation",
    description: "Offline radio-station project.",
    category: "offline",
    tags: ["offline", "audio", "radio"],
    status: "offline",
    featured: false,
  },
  {
    name: "Reagan's ECU [offline]",
    path: "ReagansECU",
    description: "Offline vehicle logic-expanding script for a deprecated mod-menu.",
    category: "offline",
    tags: ["offline", "vehicle", "utility"],
    status: "offline",
    featured: false,
  },
  {
    name: "Rust Calculator",
    path: "rustCalculator",
    description: "Calculator utility built for the game Rust.",
    category: "tool",
    tags: ["rust", "calculator", "utility"],
    status: "live",
    featured: false,
  },
  {
    name: "ScriptThis [offline]",
    path: "ScriptThis",
    description: "Offline GTAV scripting tool.",
    category: "offline",
    tags: ["offline", "scripts", "utility"],
    status: "offline",
    featured: false,
  },
  {
    name: "Auto Pilot",
    path: "Auto_Pilot",
    description: "Automation inspired chrome extension 'game'.",
    category: "game",
    tags: ["automation", "control", "project", "game"],
    status: "live",
    featured: false,
  },
  {
    name: "Info Viewer",
    path: "test",
    description: "General viewer or inspection utility.",
    category: "tool",
    tags: ["viewer", "info", "utility"],
    status: "live",
    featured: false,
  },
  {
    name: "Weed Doc",
    path: "weedDoc",
    description: "Document or reference style project.",
    category: "web",
    tags: ["docs", "reference", "web"],
    status: "live",
    featured: false,
  },
  {
    name: "Example Website",
    path: "Your_Company_Name_Here",
    description: "Template-like example website kept in the archive instead of leading the homepage.",
    category: "web",
    tags: ["template", "website", "example"],
    status: "live",
    featured: false,
  },
  {
    name: "Main Site",
    path: "",
    description: "The landing page itself. Kept out of the archive layout because you are already on it.",
    category: "site",
    tags: ["site", "homepage"],
    status: "live",
    featured: false,
  },
];

const liveSystems = [
  {
    title: "DFPWM Jukebox",
    description: "My personal DFPWM based jukebox",
    projectPath: "DFPWM_LIBRARY",
    status: "Load preview",
  },
  {
    title: "Audio Visualizer",
    description: "Chromium extension for audio visualization",
    projectPath: "AudioVisualizerExtension",
    status: "Load preview",
  },
];

const featuredContainer = document.getElementById("featured-projects");
const archiveContainer = document.getElementById("archive-projects");
const liveContainer = document.getElementById("live-systems");
const filterContainer = document.getElementById("project-filters");
const searchInput = document.getElementById("project-search");
const heroStats = document.getElementById("hero-stats");

let activeFilter = "all";
let activeSearch = "";

function createProjectUrl(path) {
  if (!path) {
    return "./";
  }

  return `${path.replace(/^\/+|\/+$/g, "")}/`;
}

function statusLabel(status) {
  switch (status) {
    case "offline":
      return "offline";
    case "archived":
      return "archive";
    case "live":
    default:
      return "live";
  }
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function renderHeroStats() {
  const total = projects.filter((project) => project.category !== "site").length;
  const featured = projects.filter((project) => project.featured).length;
  const live = projects.filter((project) => project.status === "live" && project.category !== "site").length;
  const offline = projects.filter((project) => project.status === "offline").length;

  heroStats.innerHTML = [
    { value: total, label: "projects listed" },
    { value: featured, label: "featured up top" },
    { value: live, label: "live / public" },
    { value: offline, label: "offline / utility" },
  ]
    .map(
      (item) => `
        <article class="stat-card">
          <strong>${item.value}</strong>
          <span>${escapeHtml(item.label)}</span>
        </article>
      `
    )
    .join("");
}

function buildProjectCard(project, variant = "archive") {
  const tagsHtml = project.tags
    .slice(0, variant === "featured" ? 4 : 3)
    .map((tag) => `<span class="tag">${escapeHtml(tag)}</span>`)
    .join("");

  const metaHtml = `
    <div class="project-meta">
      <span><span class="meta-label">Category</span> <strong>${escapeHtml(project.category)}</strong></span>
      <span><span class="meta-label">Status</span> <strong>${escapeHtml(statusLabel(project.status))}</strong></span>
    </div>
  `;

  const previewAction = project.preview
    ? `<button class="project-action preview-inline-button" type="button" data-preview-path="${escapeHtml(project.path)}">Load preview</button>`
    : "";

  return `
    <article class="project-card ${variant === "featured" ? "featured-card" : "archive-card"}">
      <div>
        <div class="project-top">
          <div>
            <div class="project-title-row">
              <h3>${escapeHtml(project.name)}</h3>
              <span class="status-pill">${escapeHtml(statusLabel(project.status))}</span>
            </div>
            <p class="project-description">${escapeHtml(project.description)}</p>
          </div>
        </div>

        ${metaHtml}

        <div class="tags">${tagsHtml}</div>
      </div>

      <div class="project-actions">
        <a class="project-action" href="${escapeHtml(createProjectUrl(project.path))}" target="_blank" rel="noopener">Open project</a>
        ${previewAction}
      </div>
    </article>
  `;
}

function renderFeatured() {
  const featuredProjects = projects.filter((project) => project.featured);
  featuredContainer.innerHTML = featuredProjects.map((project) => buildProjectCard(project, "featured")).join("");
}

function renderLiveSystems() {
  liveContainer.innerHTML = liveSystems
    .map(
      (system) => `
        <article class="live-card">
          <div class="live-top">
            <div>
              <div class="live-title-row">
                <h3>${escapeHtml(system.title)}</h3>
                <span class="status-pill">embed-ready</span>
              </div>
              <p class="live-copy">${escapeHtml(system.description)}</p>
            </div>
          </div>

          <div class="preview-shell" data-preview-shell="${escapeHtml(system.projectPath)}">
            <div class="preview-placeholder">
              <div>
                <strong>${escapeHtml(system.status)}</strong>
                <span class="preview-status">Loads the live page into a contained homepage preview.</span>
              </div>
            </div>
            <iframe
              class="preview-frame"
              title="${escapeHtml(system.title)} preview"
              loading="lazy"
              referrerpolicy="no-referrer"
              sandbox="allow-same-origin allow-scripts allow-forms allow-popups"></iframe>
          </div>

          <div class="live-actions">
            <button class="preview-button" type="button" data-preview-path="${escapeHtml(system.projectPath)}">Load preview</button>
            <button class="reload-button" type="button" data-reload-path="${escapeHtml(system.projectPath)}">Reload preview</button>
            <a class="project-action" href="${escapeHtml(createProjectUrl(system.projectPath))}" target="_blank" rel="noopener">Open full page</a>
          </div>
        </article>
      `
    )
    .join("");
}

function getArchiveProjects() {
  return projects.filter((project) => !project.featured && project.category !== "site");
}

function buildFilters() {
  const categories = ["all", ...new Set(getArchiveProjects().map((project) => project.category))];
  filterContainer.innerHTML = categories
    .map((category) => {
      const isActive = category === activeFilter;
      return `
        <button
          class="filter-button ${isActive ? "active" : ""}"
          type="button"
          data-filter="${escapeHtml(category)}"
          aria-pressed="${isActive ? "true" : "false"}">
          ${escapeHtml(category)}
        </button>
      `;
    })
    .join("");
}

function matchesSearch(project) {
  if (!activeSearch) {
    return true;
  }

  const haystack = [project.name, project.description, project.category, ...project.tags]
    .join(" ")
    .toLowerCase();

  return haystack.includes(activeSearch);
}

function renderArchive() {
  const filtered = getArchiveProjects().filter((project) => {
    const matchesCategory = activeFilter === "all" || project.category === activeFilter;
    return matchesCategory && matchesSearch(project);
  });

  if (!filtered.length) {
    archiveContainer.innerHTML = `
      <div class="archive-empty">
        No projects matched the current search and filter.
      </div>
    `;
    return;
  }

  archiveContainer.innerHTML = filtered.map((project) => buildProjectCard(project, "archive")).join("");
}

function loadPreview(path, forceReload = false) {
  const shell = document.querySelector(`[data-preview-shell="${CSS.escape(path)}"]`);
  if (!shell) {
    return;
  }

  const frame = shell.querySelector(".preview-frame");
  if (!frame) {
    return;
  }

  const targetUrl = createProjectUrl(path);
  if (forceReload || frame.dataset.loaded !== "true") {
    frame.src = targetUrl;
    frame.dataset.loaded = "true";
  } else if (forceReload) {
    frame.src = targetUrl;
  }

  shell.classList.add("loaded");
}

function handleClick(event) {
  const filterButton = event.target.closest("[data-filter]");
  if (filterButton) {
    activeFilter = filterButton.dataset.filter || "all";
    buildFilters();
    renderArchive();
    return;
  }

  const previewButton = event.target.closest("[data-preview-path]");
  if (previewButton) {
    loadPreview(previewButton.dataset.previewPath || "", false);
    return;
  }

  const reloadButton = event.target.closest("[data-reload-path]");
  if (reloadButton) {
    loadPreview(reloadButton.dataset.reloadPath || "", true);
  }
}

function handleSearch(event) {
  activeSearch = event.target.value.trim().toLowerCase();
  renderArchive();
}

function init() {
  renderHeroStats();
  renderLiveSystems();
  renderFeatured();
  buildFilters();
  renderArchive();

  document.addEventListener("click", handleClick);
  searchInput.addEventListener("input", handleSearch);
  document.getElementById("year").textContent = new Date().getFullYear();
}

init();