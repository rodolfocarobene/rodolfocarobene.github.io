const GITHUB_USER = "rodolfocarobene";
// Repos that are not projects (profile README, this site).
const HIDDEN_REPOS = new Set([GITHUB_USER, `${GITHUB_USER}.github.io`]);

document.getElementById("year").textContent = new Date().getFullYear();

function repoCard(repo) {
  const item = document.createElement("li");
  item.className = "repo";

  const link = document.createElement("a");
  link.href = repo.html_url;
  link.textContent = repo.name;
  item.append(link);

  if (repo.description) {
    const description = document.createElement("p");
    description.textContent = repo.description;
    item.append(description);
  }

  const meta = document.createElement("div");
  meta.className = "repo-meta";
  const facts = [
    repo.language,
    repo.license && repo.license.spdx_id !== "NOASSERTION" ? repo.license.spdx_id : null,
    repo.stargazers_count > 0 ? `★ ${repo.stargazers_count}` : null,
  ];
  for (const fact of facts.filter(Boolean)) {
    const span = document.createElement("span");
    span.textContent = fact;
    meta.append(span);
  }
  item.append(meta);
  return item;
}

async function loadRepos() {
  const response = await fetch(
    `https://api.github.com/users/${GITHUB_USER}/repos?type=owner&sort=pushed&per_page=100`,
    { headers: { Accept: "application/vnd.github+json" } },
  );
  if (!response.ok) throw new Error(`GitHub API returned ${response.status}`);
  const repos = (await response.json()).filter(
    (repo) => !repo.fork && !repo.archived && !repo.private && !HIDDEN_REPOS.has(repo.name),
  );
  if (repos.length === 0) return;
  document.getElementById("repo-list").replaceChildren(...repos.map(repoCard));
}

// On failure (offline, rate limit) the static fallback list in index.html stays visible.
loadRepos().catch((error) => console.warn("Could not load repositories:", error));
