const webhookEvents = [
  {
    event: "push",
    time: "2025-07-03T10:00:00Z",
    repo: "techstax/action-repo",
    user: "hasanqu14",
    branch: "main",
    commits: [
      {
        message: "Initial commit",
        author: "hasanqu14"
      },
      {
        message: "Added webhook simulation",
        author: "hasanqu14"
      }
    ]
  },
  {
    event: "pull_request",
    time: "2025-07-03T11:45:00Z",
    repo: "techstax/webhook-repo",
    user: "hasanqu14",
    action: "opened",
    title: "Update UI for mobile view",
    fromBranch: "feature/ui-fix",
    toBranch: "main"
  }
];

function renderEvents() {
  const container = document.getElementById("event-container");
  container.innerHTML = "";

  webhookEvents.forEach(e => {
    const eventDiv = document.createElement("div");
    eventDiv.className = "event";

    if (e.event === "push") {
      const commitsHTML = e.commits.map(c =>
        `<li><strong>${c.author}:</strong> ${c.message}</li>`
      ).join("");

      eventDiv.innerHTML = `
        <div class="event-title"><i class="fas fa-upload"></i> PUSH to <code>${e.branch}</code></div>
        <div class="event-time">${new Date(e.time).toLocaleString()}</div>
        <p><strong>Repo:</strong> ${e.repo}</p>
        <p><strong>User:</strong> ${e.user}</p>
        <p><strong>Commits:</strong></p>
        <ul>${commitsHTML}</ul>
      `;
    }

    if (e.event === "pull_request") {
      eventDiv.innerHTML = `
        <div class="event-title"><i class="fas fa-code-branch"></i> PULL REQUEST <small>(${e.action})</small></div>
        <div class="event-time">${new Date(e.time).toLocaleString()}</div>
        <p><strong>Repo:</strong> ${e.repo}</p>
        <p><strong>User:</strong> ${e.user}</p>
        <p><strong>Title:</strong> ${e.title}</p>
        <p><strong>From:</strong> <code>${e.fromBranch}</code> → <code>${e.toBranch}</code></p>
      `;
    }

    container.appendChild(eventDiv);
  });
}

window.onload = renderEvents;
