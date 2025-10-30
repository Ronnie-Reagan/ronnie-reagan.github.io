const projects = [
  { name: "DFPWM Jukebox", path: "DFPWM_LIBRARY" },
  { name: "Rust Calculator", path: "rustCalculator" },
  { name: "Solar Calculator", path: "FredsSolarCaclculator" },
  { name: "Info Viewer", path: "test" },
  { name: "WebRTC Chat", path: "WebRTC-Chat" },
  { name: "Bad Clicker Game", path: "Click_Me_Game" },
  { name: "[NSFW] Gaymers Game", path: "Gaymers_Game" },
];

const list = document.getElementById("projects");
for (const { name, path } of projects) {
  const li = document.createElement("li");
  li.innerHTML = `<a href="https://ronnie-reagan.github.io/${path}/" target="_blank" rel="noopener">${name}</a>`;
  list.appendChild(li);
}

// Dynamic year
document.getElementById("year").textContent = new Date().getFullYear();
