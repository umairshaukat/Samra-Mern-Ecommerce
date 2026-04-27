# Push This Project to GitHub Repository: `umairshaukat/CartoonAI`

You shared this target repo URL:

- `https://github.com/umairshaukat/CartoonAI.git`

Use the commands below from this project folder.

## Option A — Push this existing local repo (recommended)

```bash
git init
git branch -M main
git remote remove origin 2>/dev/null || true
git remote add origin https://github.com/umairshaukat/CartoonAI.git
git push -u origin main
```

If your current branch is not `main`, run:

```bash
git checkout -B main
git push -u origin main
```

## Option B — Push all branches and tags

```bash
git remote add cartoonai https://github.com/umairshaukat/CartoonAI.git
git push cartoonai --all
git push cartoonai --tags
```

## Authentication notes
- If prompted, login with GitHub username + Personal Access Token (PAT), not password.
- PAT needs at least `repo` scope for private repos.
- If repo is in an org with SSO, authorize your PAT/SSH key for that org.

## Verify push

```bash
git remote -v
git branch --show-current
git log --oneline -n 5
```

Then refresh: `https://github.com/umairshaukat/CartoonAI`
