# Architecture Decision Record (ADR) - PUMP

**Date:** 2026-01-20
**Statut:** Actif
**Version:** 1.0

---

## 1. Contexte

PUMP est une application mobile de fitness cross-platform permettant de planifier et suivre ses séances d'entraînement. L'application inclut des fonctionnalités de gamification (niveaux, streaks) pour maintenir l'engagement utilisateur.

---

## 2. Stack Technique

### 2.1 Framework & Runtime

| Technologie | Version | Rôle |
|-------------|---------|------|
| React Native | 0.81.5 | Framework mobile cross-platform |
| React | 19.1.0 | Bibliothèque UI |
| Expo | ~54.0.25 | Plateforme de développement et build |
| TypeScript | ~5.9.2 | Typage statique |

### 2.2 Navigation

| Bibliothèque | Version | Usage |
|--------------|---------|-------|
| Expo Router | ~6.0.15 | Routing basé sur fichiers |
| @react-navigation/native | 7.1.8 | Navigation native |
| @react-navigation/bottom-tabs | 7.4.0 | Navigation par onglets |

### 2.3 UI & Animations

| Bibliothèque | Version | Usage |
|--------------|---------|-------|
| react-native-reanimated | 4.1.1 | Animations performantes |
| react-native-gesture-handler | 2.28.0 | Gestion des gestes |
| react-native-svg | 15.12.1 | Rendu SVG |
| react-native-screens | 4.16.0 | Optimisation des écrans |

### 2.4 Configuration TypeScript

```json
{
  "strict": true,
  "paths": { "@/*": ["./*"] }
}
```

### 2.5 Fonctionnalités Expo Expérimentales

```json
{
  "typedRoutes": true,
  "reactCompiler": true
}
```

---

## 3. Structure du Projet

```
PUMP/
├── app/                          # Routing basé sur fichiers (Expo Router)
│   ├── _layout.tsx              # Layout racine avec providers
│   └── (tabs)/                  # Groupe de navigation par onglets
│       ├── home/
│       │   └── index.tsx        # Écran principal (planner + niveau)
│       └── seances/
│           └── index.tsx        # Gestion des séances
│
├── components/                   # Composants UI réutilisables
│   └── ui/
│       ├── Container.tsx        # Wrapper avec bordure/padding
│       └── Header/
│           ├── Header.tsx
│           └── modules/
│               ├── AddButton.tsx
│               └── BackButton.tsx
│
├── features/                     # Fonctionnalités métier
│   ├── level-indicator/         # Système de niveaux et gamification
│   │   ├── LevelIndicator.tsx
│   │   └── modules/
│   │       ├── ExperienceBar.tsx
│   │       └── StreakIndicator.tsx
│   └── planner/                 # Planification des entraînements
│       ├── Planner.tsx
│       ├── hook/
│       │   └── getTime.ts
│       └── modules/
│           ├── Day.tsx
│           ├── DayList.tsx
│           ├── SeanceCard.tsx
│           └── AddExerciseButton.tsx
│
├── shared/                       # Modèles du domaine (logique métier)
│   ├── user/
│   │   └── User.ts
│   └── sport/
│       ├── seance/
│       │   └── Seance.ts
│       ├── exercice/
│       │   └── Exercice.ts
│       ├── routine/
│       │   └── Routine.ts
│       └── performance/
│           └── Performance.ts
│
├── context/                      # Gestion d'état global (React Context)
│   └── userContext.tsx
│
├── style/                        # Design tokens
│   ├── COLORS.ts
│   ├── FONT.ts
│   ├── SPACING.ts
│   └── BORDER_RADIUS.ts
│
├── constants/                    # Constantes applicatives
│   └── JOURS.ts
│
└── assets/                       # Ressources statiques
    ├── fonts/                   # Police InriaSans (6 variantes)
    └── images/                  # Icônes SVG par catégorie
```

---

## 4. Décisions Architecturales

### ADR-001: Expo Router pour le Routing

**Décision:** Utiliser Expo Router (file-based routing) plutôt que React Navigation seul.

**Contexte:** Besoin d'une solution de navigation simple, maintenable et type-safe.

**Conséquences:**
- (+) Routes définies par la structure de fichiers
- (+) Deep linking automatique
- (+) Types générés automatiquement avec `typedRoutes`
- (-) Moins de flexibilité pour des patterns de navigation complexes

---

### ADR-002: React Context pour la Gestion d'État

**Décision:** Utiliser React Context API plutôt qu'une bibliothèque tierce (Redux, Zustand).

**Contexte:** Application de taille modeste avec des besoins d'état global limités.

**Implémentation:**
```typescript
interface UserContextType {
  user: User | null
  setUser: (user: User | null) => void
  updateUser: (updates: Partial<UserData>) => void
  clearUser: () => void
}
```

**Conséquences:**
- (+) Pas de dépendance externe
- (+) API simple et native React
- (+) Suffisant pour les besoins actuels
- (-) Peut nécessiter une migration si l'état devient complexe

---

### ADR-003: Organisation Feature-Based

**Décision:** Organiser le code par fonctionnalités (`features/`) plutôt que par type de fichier.

**Contexte:** Faciliter la scalabilité et la maintenance du code.

**Structure d'une feature:**
```
features/
└── [feature-name]/
    ├── [Feature].tsx          # Composant principal
    ├── components/            # Sous-composants
    ├── hooks/                 # Hooks spécifiques
    └── data/                  # Mock data (fake[Model].json)
```

**Conséquences:**
- (+) Haute cohésion au sein d'une feature
- (+) Facilite l'ajout de nouvelles fonctionnalités
- (+) Meilleure encapsulation
- (-) Potentielle duplication de code entre features

---

### ADR-004: Domain-Driven Design pour les Modèles

**Décision:** Utiliser des classes TypeScript avec encapsulation pour les modèles métier.

**Contexte:** Séparer la logique métier de l'UI et garantir l'intégrité des données.

**Exemple:**
```typescript
class User {
  private _fullName: string
  private _height: number
  private _weight: number
  private _createdAt: Date

  // Getters/Setters avec validation
}
```

**Modèles implémentés:**
- `User` - Profil utilisateur
- `Seance` - Session d'entraînement
- `Exercice` - Exercice avec séries/répétitions
- `Routine` - Programme d'entraînement
- `Performance` - Suivi des performances

**Conséquences:**
- (+) Logique métier centralisée
- (+) Validation des données à la source
- (+) Réutilisable dans toute l'application
- (-) Plus verbeux que des objets simples

---

### ADR-005: Design Tokens System

**Décision:** Centraliser tous les tokens de design dans le dossier `style/`.

**Contexte:** Assurer la cohérence visuelle et faciliter les modifications globales.

**Tokens définis:**

| Fichier | Contenu |
|---------|---------|
| `COLORS.ts` | Palette de couleurs (primary: #F17D1E) |
| `FONT.ts` | Typographie (InriaSans, tailles, poids) |
| `SPACING.ts` | Échelle d'espacement (2, 4, 8, 10, 12, 20px) |
| `BORDER_RADIUS.ts` | Rayons de bordure (8, 12, 20, 50px) |

**Conséquences:**
- (+) Source unique de vérité pour le design
- (+) Facilite le theming futur
- (+) Cohérence garantie
- (-) Nécessite discipline pour ne pas hardcoder des valeurs

---

### ADR-006: Composants SVG Custom pour les Icônes

**Décision:** Créer des composants React pour chaque icône SVG plutôt que d'utiliser une bibliothèque d'icônes.

**Contexte:** Contrôle total sur le design et les props des icônes.

**Organisation:**
```
assets/icons/
├── common/          # Icônes génériques (Chevron, Plus)
├── exercise/        # Icônes exercices
├── header/          # Icônes header
├── streak/          # Icônes gamification
└── meteo/           # Icônes météo
```

**Conséquences:**
- (+) Cohérence avec la charte graphique
- (+) Props personnalisables (fill, size)
- (+) Pas de dépendance à une bibliothèque d'icônes
- (-) Plus de fichiers à maintenir

---

### ADR-008: Stratégie de Test par Vertical Slice

**Décision:** Chaque vertical slice doit être développée avec des mock data et couverte par des tests e2e avant tout push.

**Contexte:** Garantir le bon fonctionnement de chaque fonctionnalité de manière isolée, indépendamment du backend, et détecter les régressions tôt.

**Règles obligatoires:**

1. **Mock data** — chaque feature expose des données fictives réalistes dans `[feature]/data/fake[Model].json` permettant de développer et tester sans backend
2. **Tests e2e** — chaque slice dispose de tests e2e (Maestro) couvrant les flux critiques avant tout `git push`

**Structure attendue par feature:**
```
features/
└── [feature-name]/
    ├── [Feature].tsx
    ├── components/
    ├── hooks/
    ├── data/
    │   └── fake[Model].json    ← mock data obligatoire
    └── __tests__/
        └── [feature].e2e.yaml  ← test Maestro obligatoire
```

**Outils:**
- Mock data : fichiers JSON statiques
- Tests e2e mobile : [Maestro](https://maestro.mobile.dev/)
- Tests unitaires : Jest + React Native Testing Library

**Conséquences:**
- (+) Développement découplé du backend
- (+) Détection des régressions avant merge
- (+) Documentation vivante du comportement attendu
- (-) Overhead initial pour chaque nouvelle feature

---

### ADR-007: Pattern Container Component

**Décision:** Créer un composant `Container` réutilisable pour standardiser les conteneurs.

**Contexte:** Éviter la répétition des styles de conteneur communs.

**Props:**
```typescript
interface ContainerProps {
  children: React.ReactNode
  style?: ViewStyle
  border?: boolean
  padding?: number
}
```

**Conséquences:**
- (+) Consistance visuelle
- (+) DRY (Don't Repeat Yourself)
- (+) Facilite les changements globaux

---

## 5. Patterns de Navigation

### Structure des Routes

```
app/
├── (tabs)/                    # Groupe visuel (non affiché dans l'URL)
│   ├── home/index.tsx        # /home
│   └── seances/index.tsx     # /seances
└── _layout.tsx               # Layout avec Tabs
```

### Configuration des Tabs

```typescript
<Tabs screenOptions={{ headerShown: false }}>
  <Tabs.Screen name="home/index" />
  <Tabs.Screen name="seances/index" />
</Tabs>
```

### Deep Linking

- **Scheme:** `pump://`
- **Défini dans:** `app.json`

---

## 6. Gestion des Fonts

**Police:** InriaSans

**Variantes chargées:**
- InriaSans-Regular
- InriaSans-Bold
- InriaSans-BoldItalic
- InriaSans-Italic
- InriaSans-Light
- InriaSans-LightItalic

**Chargement:** Via `expo-font` dans le layout racine avec SplashScreen.

---

## 7. Historique des Décisions (Git)

| Commit | Décision |
|--------|----------|
| bf96f46 | Introduction des modèles de domaine (classes) |
| 34e7be5 | Création du système Header |
| b11a875 | Renommage `modules/` → `features/` |
| b2223de | Ajout du calendrier hebdomadaire |
| 7bef9ca | Réorganisation de la structure de fichiers |

---

## 8. Points d'Amélioration Identifiés

### À Court Terme

- [ ] Implémenter la persistance locale (AsyncStorage ou SQLite)
- [ ] Ajouter l'intégration backend (API REST)
- [ ] Créer les formulaires d'ajout de séances/exercices

### À Moyen Terme

- [ ] Ajouter les tests unitaires manquants (Jest + React Native Testing Library)
- [ ] Ajouter les tests e2e Maestro pour les features existantes
- [ ] Implémenter l'authentification utilisateur
- [ ] Ajouter les notifications push pour les rappels

### À Long Terme

- [ ] Architecture offline-first avec synchronisation
- [ ] Analytics pour le suivi de la gamification
- [ ] Système de thèmes (dark mode)

---

## 9. Annexes

### A. Dépendances Principales

```json
{
  "expo": "~54.0.25",
  "react": "19.1.0",
  "react-native": "0.81.5",
  "expo-router": "~6.0.15",
  "typescript": "~5.9.2",
  "react-native-reanimated": "4.1.1"
}
```

### B. Scripts NPM

```json
{
  "start": "expo start",
  "android": "expo start --android",
  "ios": "expo start --ios",
  "web": "expo start --web"
}
```

---

*Ce document doit être mis à jour lors de chaque décision architecturale majeure.*
