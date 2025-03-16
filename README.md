
# Hassaniya - Dictionnaire Collaboratif

Ce projet est une application web pour la gestion collaborative du dictionnaire Hassaniya. Elle permet aux utilisateurs de proposer des mots, des définitions, et d'interagir via des commentaires.

## Prérequis

- **Git** pour cloner le projet.
- **Docker** pour exécuter l'application dans un conteneur.
- **Python 3.13+** (si vous choisissez d'exécuter le projet localement sans Docker).
- **Docker Compose** (optionnel, si vous souhaitez utiliser Docker pour la gestion complète de l'environnement).

## Installation du projet

### 1. Cloner le projet avec Git

Si vous ne l'avez pas encore, commencez par cloner le projet avec Git :

```bash
git clone https://github.com/Zeini-23025/defi-2-client.git
cd defi-2-client
```

### Résumé des étapes :

#### 1. **Avec Docker** :

- **Télécharger l'image Docker** :
  ```bash
  docker pull zeini/docker-client-dev
  ```

- **Exécuter l'application avec Docker** :
  ```bash
  docker run -p 3000:3000 zeini/docker-client-dev
  ```

#### 2. **Exécuter le projet localement avec Git & Python** :

Si vous souhaitez exécuter le projet localement sans Docker, suivez ces étapes :

- **Cloner le projet depuis GitHub** :
  ```bash
  git clone https://github.com/Zeini-23025/defi-2-client.git
  cd defi-2-client
  ```

- **Installer les dépendances** :
  ```bash
  npm install
  ```

- **Run** :
  ```bash
  npm run dev
  ```



L'application sera accessible à l'adresse `http://localhost:3000`. 

## Liens utiles

- **Dépôt GitHub** : [https://github.com/Zeini-23025/defi-2-client.git](https://github.com/Zeini-23025/defi-2-client.git)
- **Image Docker** : [https://hub.docker.com/r/zeini/docker-client-dev](https://hub.docker.com/r/zeini/docker-client-dev)

Ce fichier `README.md` est maintenant prêt et contient toutes les instructions nécessaires pour cloner et exécuter votre projet, à la fois localement et via Docker.
