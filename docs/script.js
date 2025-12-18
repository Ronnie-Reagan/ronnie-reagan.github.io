const projects = [
  { name: "Main Site", path: "" },
  { name: "DonCraft - Rust", path: "DonCraft-Rust" },
  { name: "Procedural Launcher", path: "procedural_launcher" },
  { name: "Example Website", path: "Your_Company_Name_Here" },
  { name: "Web-Based Speedometer", path: "web_based-speedometer" },
  { name: "Audio Visualizer Extension", path: "AudioVisualizerExtension" },
  { name: "BlackJack Simulator", path: "BlackJack_Sim" },
  { name: "Cherax Lua Doc Viewer [offline]", path: "cherax_lua_doc_viewer" },
  { name: "Cherax Viewer Pro [offline]", path: "Cherax_Viewer_Pro" },
  { name: "Click Me Game", path: "Click_Me_Game" },
  { name: "Dayton's Menu", path: "DaytonsMenu" },
  { name: "DFPWM Jukebox", path: "DFPWM_LIBRARY" },
  { name: "Draw the Path", path: "Draw_the_Path" },
  { name: "Solar Calculator", path: "FredsSolarCaclculator" },
  { name: "[NSFW] Gaymers Game", path: "Gaymers_Game" },
  { name: "Mod Reagan", path: "Mod-Reagan" },
  { name: "Radio Station [offline]", path: "radioStation" },
  { name: "Reagan's ECU [offline]", path: "ReagansECU" },
  { name: "Rust Calculator", path: "rustCalculator" },
  { name: "ScriptThis [offline]", path: "ScriptThis" },
  { name: "Auto Pilot", path: "Auto_Pilot" },
  { name: "Info Viewer", path: "test" },
  { name: "WebRTC Chat", path: "WebRTC-Chat" },
  { name: "Weed Doc", path: "weedDoc" },
];

const list = document.getElementById("projects");
for (const { name, path } of projects) {
  const li = document.createElement("li");
  const href = `https://ronnie-reagan.github.io/${path ? path + "/" : ""}`;
  li.innerHTML = `<a href="${href}" target="_blank" rel="noopener">${name}</a>`;
  list.appendChild(li);
}

// Dynamic year
document.getElementById("year").textContent = new Date().getFullYear();
