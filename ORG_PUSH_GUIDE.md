# Push This Project to a Separate GitHub Organization

If you want this repository inside a separate organization account, follow these steps.

## 1) Create organization + repository (GitHub UI)
1. Create an organization on GitHub (or use an existing one).
2. Inside that org, create a new empty repository (no README/license).
3. Copy the repo URL, for example:
   - HTTPS: `https://github.com/<ORG_NAME>/<REPO_NAME>.git`
   - SSH: `git@github.com:<ORG_NAME>/<REPO_NAME>.git`

## 2) Push current code to the org repo
From this local project:

```bash
git remote -v
git remote add org https://github.com/<ORG_NAME>/<REPO_NAME>.git
git push -u org --all
git push org --tags
```

## 3) (Optional) Make org repo the default `origin`

```bash
git remote rename origin old-origin
git remote rename org origin
git remote -v
```

## 4) If you want full history + all refs mirror

```bash
git clone --mirror https://github.com/<YOUR_USER>/<OLD_REPO>.git
cd <OLD_REPO>.git
git push --mirror https://github.com/<ORG_NAME>/<REPO_NAME>.git
```

## 5) Permissions checklist
- Ensure your GitHub user has **Write/Admin** access to the org repo.
- If SSO is required, authorize your token/SSH key for the organization.
- If using PAT, include `repo` scope.

## 6) CI/CD updates after migration
- Update repo secrets in org settings.
- Update deployment webhooks.
- Update any hardcoded GitHub URLs in docs.
