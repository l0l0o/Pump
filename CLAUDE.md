# PUMP — Instructions de travail (Claude Code)

## Structure du monorepo

```
PUMP/
├── mobile/        ← App React Native (Expo Router, TypeScript)
├── backend/       ← API NestJS + PostgreSQL + Prisma
├── back-office/   ← Interface d'administration (à définir)
└── docs/          ← Conventions transversales
```

Chaque package a son propre `docs/ADR.md` pour ses décisions architecturales spécifiques.
Les conventions ci-dessous s'appliquent à **tous** les packages.

---

## Convention de commits

Format : `<emoji> <type>(<scope>): <description>`
- Description en **français**, infinitif, minuscules, sans point final
- Max ~72 caractères

| Emoji | Type     | Usage                                |
|-------|----------|--------------------------------------|
| ✨     | feat     | Nouvelle fonctionnalité              |
| 🐛     | fix      | Correction de bug                    |
| ♻️     | refactor | Refacto sans changement comportement |
| 🎨     | style    | UI, styles, mise en forme            |
| 🔧     | chore    | Config, deps, outils                 |
| 📝     | docs     | Documentation                        |
| 🧪     | test     | Tests                                |
| 🗑️     | remove   | Suppression de code/fichier          |

Scopes : `planner` · `seances` · `auth` · `ui` · `shared` · `level` · `navigation` · `backend` · `back-office`

---

## Workflow Git

- `main` → stable / production
- `develop` → intégration
- `feat/xxx` → feature branches créées depuis `develop`
- Remote : https://github.com/l0l0o/Pump.git

---

## Règle de test — obligatoire avant tout push

**Chaque vertical slice doit :**

1. **Exposer des mock data** dans `[feature]/data/fake[Model].json` pour permettre le développement et les tests sans backend
2. **Avoir des tests e2e** couvrant ses flux critiques

Ne jamais pusher une feature sans que ces deux points soient respectés.

### Outils par package

| Package      | Mock data       | Tests e2e              | Tests unitaires                   |
|--------------|-----------------|------------------------|-----------------------------------|
| mobile       | JSON statiques  | Maestro (`.yaml`)      | Jest + React Native Testing Library |
| backend      | JSON / fixtures | Jest + Supertest       | Jest                              |
| back-office  | JSON statiques  | Playwright ou Cypress  | Vitest ou Jest                    |

---

## Conventions de code

- TypeScript strict activé partout
- Organisation par **feature** (vertical slice), pas par type de fichier
- Pas de valeurs hardcodées : utiliser les design tokens (`COLORS`, `SPACING`, `FONT`, `BORDER_RADIUS`)
- Les modèles de domaine vivent dans `shared/` (mobile) ou `src/domain/` (backend)
