# Dashboard Scolaire - Structure Simplifiée

## 📁 Structure du projet

```
dashboard-scolaire/
├── src/
│   ├── pages/
│   │   └── Index.tsx          ⭐ FICHIER PRINCIPAL - TOUT LE DASHBOARD
│   │
│   ├── components/ui/         (Composants de base Shadcn - ne pas modifier)
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   ├── table.tsx
│   │   ├── select.tsx
│   │   ├── checkbox.tsx
│   │   └── tabs.tsx
│   │
│   ├── App.tsx               (Configuration des routes)
│   ├── main.tsx              (Point d'entrée)
│   └── index.css             (Styles et thème)
│
├── public/
├── index.html
├── package.json
└── README.md                  (Ce fichier)
```

## 🎯 Fichier Principal : Index.tsx

Le fichier `src/pages/Index.tsx` contient **TOUT** le dashboard en un seul endroit :

### Structure interne du fichier :

1. **Imports** (lignes 1-30)
   - Icônes Lucide
   - Composants Recharts pour les graphiques
   - Composants UI de Shadcn

2. **Données exemples** (lignes 32-90)
   - `statsData` : Statistiques des cards
   - `lineChartData` : Données pour graphique en ligne
   - `barChartData` : Données pour graphique en barres
   - `pieChartData` : Données pour graphique circulaire
   - `usersData` : Liste des utilisateurs
   - `tabs` : Configuration des onglets

3. **Composants simples** (lignes 92-120)
   - `StatsCard` : Cards de statistiques
   - `ChartCard` : Container pour les graphiques

4. **Onglets** (lignes 122-320)
   - `OverviewTab` : Vue d'ensemble avec stats et graphiques
   - `UsersTab` : Gestion des utilisateurs avec tableau
   - `SalesTab` : Statistiques de ventes
   - `AnalyticsTab` : Analyses détaillées
   - `SettingsTab` : Paramètres de l'application

5. **Composant principal** (lignes 322-fin)
   - `Index` : Layout complet avec sidebar, filtres, header et contenu

## 🎨 Fonctionnalités

### Navigation
- **Sidebar gauche** : Menu de navigation entre les 5 onglets
- **Navigation responsive** : S'adapte aux différentes tailles d'écran

### Filtres
- **Colonne de filtres** : Période, catégorie, statut
- Filtres persistants pendant la navigation

### Contenu
- **5 onglets distincts** :
  1. Vue d'ensemble : Cards + Graphiques
  2. Utilisateurs : Tableau de gestion
  3. Ventes : Statistiques et graphiques
  4. Analyses : Graphiques détaillés
  5. Paramètres : Configuration

### Graphiques
- **Line Chart** : Évolution dans le temps
- **Bar Chart** : Comparaisons
- **Pie Chart** : Répartition en pourcentages

## 🚀 Installation et lancement

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

## 📝 Personnalisation

### Modifier les données
Recherchez dans `Index.tsx` les sections :
- `statsData` : pour les statistiques
- `lineChartData`, `barChartData`, `pieChartData` : pour les graphiques
- `usersData` : pour le tableau d'utilisateurs

### Modifier les couleurs
Éditez le fichier `src/index.css` :
- `--primary` : Couleur principale
- `--background` : Couleur de fond
- `--surface` : Couleur des cards

### Ajouter un onglet
Dans `Index.tsx` :
1. Ajouter dans `tabs` array
2. Créer la fonction du composant (ex: `MonOngletTab`)
3. Ajouter le case dans `renderTabContent()`

## 📚 Technologies utilisées

- **React** : Framework UI
- **TypeScript** : Typage
- **Tailwind CSS** : Styles
- **Shadcn/ui** : Composants UI
- **Recharts** : Graphiques
- **Lucide React** : Icônes

## 💡 Pour votre prof

Ce projet utilise une architecture **mono-fichier** pour faciliter la compréhension :
- ✅ Tout le code métier est dans `src/pages/Index.tsx`
- ✅ Structure claire avec commentaires
- ✅ Données exemples faciles à identifier
- ✅ Composants simples et réutilisables

Les composants dans `src/components/ui/` sont des composants de base (boutons, inputs, etc.) 
qui ne nécessitent pas de modifications.
