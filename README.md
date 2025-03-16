🏆 **Nom de l'équipe** : NOT FOUND

# Hassaniya - Dictionnaire Collaboratif

📌 **Objectif**

L'application Hassaniya est une plateforme collaborative permettant aux utilisateurs de proposer, définir et commenter des mots du dialecte Hassaniya. Elle offre un système de validation communautaire et un suivi de l'historique des modifications.

📚 **Description du Projet**

🚀 **Fonctionnalités**

- **Gestion des utilisateurs** : Rôles (utilisateurs, modérateurs, administrateurs), authentification et gestion des profils.
- **Soumission de mots** : Proposition de nouveaux mots avec définitions et sources.
- **Validation communautaire** : Système d'approbation et de modifications collaboratives.
- **Commentaires et interactions** : Possibilité de commenter et discuter les définitions.
- **Historique des modifications** : Suivi des modifications et contributions.
- **Notifications** : Alertes sur les nouvelles propositions, commentaires et validations.

🐳 **Conteneurisation avec Docker**

L'application est conteneurisée avec Docker, facilitant ainsi son déploiement et son exécution dans différents environnements.

⚙️ **CI/CD avec GitHub Actions**

Un pipeline CI/CD est mis en place avec GitHub Actions pour automatiser le processus de build et de push de l'image Docker vers Docker Hub.

👤 **Livrables**

- ✅ Code source du backend et frontend de l'application sur GitHub.
- ✅ Dockerfile pour la conteneurisation.
- ✅ Workflow GitHub Actions pour l'automatisation du build et du push Docker.
- ✅ URL du dépôt Docker Hub contenant l'image Docker.

🔹 **Dépôts GitHub**

- 🔗 [Backend](https://github.com/Zeini-23025/defi-2-server)
- 🔗 [Frontend](https://github.com/Zeini-23025/defi-2-client)

🐳 **Dépôts Docker Hub**

- 🐳 [Backend](https://hub.docker.com/repository/docker/zeini/docker-server-dev)
- 🐳 [Frontend](https://hub.docker.com/repository/docker/zeini/docker-client-dev)

🚀 **Accéder à l'application**

- 🔹 **Backend** : 🌍 [docker-server-hassaniya.onrender.com](#)
- 🔹 **Frontend** : 🌍 [docker-client-hassaniya.onrender.com](#)

---

## Installation du projet

### 1. Cloner le projet avec Git

```bash
git clone https://github.com/Zeini-23025/defi-2-server.git
cd defi-2-server
```
### 2. Exécuter le Frontend

#### Méthode 1 : Utilisation de Docker

Télécharger l'image Docker :

```bash
docker pull zeini/docker-client-dev
```

Exécuter le frontend avec Docker :

```bash
docker run -p 3000:3000 zeini/docker-client-dev
```

#### Méthode 2 : Exécution locale avec Git & Node.js

Cloner le projet Frontend :

```bash
git clone https://github.com/Zeini-23025/defi-2-client.git
cd defi-2-client
```

Installer les dépendances :

```bash
cd defi-2-client
npm install
```

Démarrer le frontend :

```bash
npm run dev
```

L'application sera accessible à l'adresse [http://localhost:5173](http://localhost:5173).

---

### 3. Exécuter le Backend

#### Méthode 1 : Utilisation de Docker

Télécharger l'image Docker :

```bash
docker pull zeini/docker-server-dev
```

Exécuter l'application avec Docker :

```bash
docker run -p 8000:8000 zeini/docker-server-dev
```

#### Méthode 2 : Exécution locale avec Git & Python
Cloner le projet avec Git

```bash
git clone https://github.com/Zeini-23025/defi-2-server.git
cd defi-2-server
```

Installer les dépendances Python :

```bash
pip install -r requirements.txt
cd app
```

Appliquer les migrations de la base de données :

```bash
python manage.py migrate
```

Démarrer le serveur de développement Django :

```bash
python manage.py runserver
```

L'application sera accessible à l'adresse [http://localhost:8000](http://localhost:8000).

---

### 4. Exécuter l'ensemble du projet (Backend + Frontend)

#### Méthode 1 : Utilisation de Docker

Tirer les images Docker :

```bash
docker pull zeini/docker-server-dev
docker pull zeini/docker-client-dev
```

Exécuter les conteneurs Backend et Frontend :

```bash
docker run -d -p 8000:8000 --name backend zeini/docker-server-dev
docker run -d -p 3000:3000 --name frontend --link backend zeini/docker-client-dev
```

#### Méthode 2 : Exécution locale

Lancer le Backend :

```bash
git clone https://github.com/Zeini-23025/defi-2-server.git
cd defi-2-server
pip install -r requirements.txt
cd app
python manage.py migrate
python manage.py runserver
```

Lancer le Frontend :

```bash
git clone https://github.com/Zeini-23025/defi-2-client.git
cd defi-2-client/defi-2-client
npm install
npm run dev
```

L'application complète sera accessible aux adresses suivantes :

- Backend : [http://localhost:8000](http://localhost:8000)
- Frontend : [http://localhost:5173](http://localhost:5173)
