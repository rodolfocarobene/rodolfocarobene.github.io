const GITHUB_USER = "rodolfocarobene";
// Repos that are not projects (profile README, this site).
const HIDDEN_REPOS = new Set([GITHUB_USER, `${GITHUB_USER}.github.io`]);
const SVG_NS = "http://www.w3.org/2000/svg";

// Stable pseudo-random tilt per repo, so slips keep their place between visits.
function tiltFor(name) {
  let hash = 0;
  for (const char of name) hash = (hash * 31 + char.charCodeAt(0)) | 0;
  return ((Math.abs(hash) % 25) - 12) / 10; // -1.2deg .. 1.2deg
}

function starIcon() {
  const svg = document.createElementNS(SVG_NS, "svg");
  svg.setAttribute("viewBox", "0 0 16 16");
  svg.setAttribute("aria-hidden", "true");
  const path = document.createElementNS(SVG_NS, "path");
  path.setAttribute("d", "M8 .8l2.2 4.6 5 .7-3.6 3.5.9 5L8 12.2l-4.5 2.4.9-5L.8 6.1l5-.7z");
  svg.append(path);
  return svg;
}

function slip(repo, isTopBilled) {
  const item = document.createElement("li");
  item.className = "slip";
  if (isTopBilled) item.classList.add("rank-1");
  if (repo.archived) item.classList.add("archived");
  item.style.setProperty("--tilt", `${tiltFor(repo.name)}deg`);

  const link = document.createElement("a");
  link.className = "slip-name";
  link.href = repo.html_url;
  link.textContent = repo.name;
  item.append(link);

  if (repo.archived) {
    const flag = document.createElement("span");
    flag.className = "slip-flag";
    flag.textContent = "archived";
    item.append(flag);
  }

  if (repo.description) {
    const description = document.createElement("p");
    description.textContent = repo.description;
    item.append(description);
  }

  const meta = document.createElement("div");
  meta.className = "slip-meta";
  if (repo.stargazers_count > 0) {
    const stars = document.createElement("span");
    stars.className = "stars";
    stars.append(starIcon(), String(repo.stargazers_count));
    stars.setAttribute("aria-label", `${repo.stargazers_count} stars`);
    meta.append(stars);
  }
  const license = repo.license && repo.license.spdx_id !== "NOASSERTION" ? repo.license.spdx_id : null;
  for (const fact of [repo.language, license].filter(Boolean)) {
    const span = document.createElement("span");
    span.textContent = fact;
    meta.append(span);
  }
  item.append(meta);
  return item;
}

async function loadRepos() {
  const response = await fetch(
    `https://api.github.com/users/${GITHUB_USER}/repos?type=owner&per_page=100`,
    { headers: { Accept: "application/vnd.github+json" } },
  );
  if (!response.ok) throw new Error(`GitHub API returned ${response.status}`);
  const repos = (await response.json())
    .filter((repo) => !repo.fork && !repo.private && !HIDDEN_REPOS.has(repo.name))
    .sort(
      (a, b) =>
        b.stargazers_count - a.stargazers_count ||
        a.archived - b.archived ||
        new Date(b.pushed_at) - new Date(a.pushed_at),
    );
  if (repos.length === 0) return;

  // Billing rank: the most-starred repos print large, starred ones as slips,
  // the rest are pencilled into a ruled list.
  const topStars = repos[0].stargazers_count;
  const top = repos.filter((repo) => topStars > 0 && repo.stargazers_count === topStars);
  const starred = repos.filter((repo) => repo.stargazers_count > 0 && !top.includes(repo));
  const unstarred = repos.filter((repo) => repo.stargazers_count === 0);

  const groups = [];
  if (top.length) groups.push(list("slips slips-top", top.map((repo) => slip(repo, true))));
  if (starred.length) groups.push(list("slips", starred.map((repo) => slip(repo, false))));
  if (unstarred.length) groups.push(list("pencil-list", unstarred.map(pencilEntry)));
  document.getElementById("repo-list").replaceChildren(...groups);
}

function list(className, items) {
  const ul = document.createElement("ul");
  ul.className = className;
  ul.append(...items);
  return ul;
}

function pencilEntry(repo) {
  const item = document.createElement("li");
  const link = document.createElement("a");
  link.href = repo.html_url;
  link.textContent = repo.name;
  item.append(link);
  const facts = [repo.description, repo.language, repo.archived ? "archived" : null].filter(Boolean);
  if (facts.length) item.append(`, ${facts.join(" \u00b7 ")}`);
  return item;
}

// On failure (offline, rate limit) the pencilled fallback list in index.html stays visible.
loadRepos().catch((error) => console.warn("Could not load repositories:", error));
