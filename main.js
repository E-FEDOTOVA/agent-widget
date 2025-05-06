(function () {
  if (window.voiceAgentWidgetLoaded) return;
  window.voiceAgentWidgetLoaded = true;

  // Optional: allow config override
  const config = window.RetellWidgetConfig || {
    agentId: "agent_f827dec94d3d574aafd914f7f6"
  };

  // Load CSS
  const style = document.createElement("link");
  style.rel = "stylesheet";
  style.href = "https://e-fedotova.github.io/agent-widget/style.css";
  document.head.appendChild(style);

  // Create iframe container or inline widget
  const container = document.getElementById("voice-agent-widget");
  const iframe = document.createElement("iframe");
  iframe.src = `https://e-fedotova.github.io/agent-widget/widget.html?agentId=${config.agentId}`;
  iframe.style = "width: 100%; height: 400px; border: none;";
  container.appendChild(iframe);
})();
