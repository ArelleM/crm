# CRM MDS

CRM MDS est un mini CRM avec des tests fonctionnels, unitaires et de charge.

## Prérequis

- Node.js
- npm
- Python (pour Locust)
- pip (pour installer Locust)

## Installation

1. Clonez le dépôt du projet :

    ```bash
    git clone https://github.com/ArelleM/crm.git
    ```

2. Accédez au répertoire du projet :

    ```bash
    cd <crm>
    ```

3. Installez les dépendances du projet :

    ```bash
    npm install
    ```

4. Installez Locust :

    ```bash
    pip install locust
    ```

## Utilisation

1. Pour exécuter l'application :

   Ouvrir index.html

2. Pour exécuter les tests Jest :

    ```bash
    npm run test
    ```

3. Pour exécuter les tests Cypress :

    ```bash
    npm run cy:run
    ```

4. Pour exécuter les tests de charge avec Locust, exécutez la commande suivante et accédez à `http://localhost:8089` pour commencer un test :

    ```bash
    locust -f locustfile.py
    ```

## Interprétation des résultats

### Jest

Les résultats des tests Jest seront affichés dans le terminal après l'exécution de `npm run test`. Les échecs de test seront clairement signalés avec des messages d'erreur descriptifs.

### Cypress

Les résultats des tests Cypress seront affichés dans le terminal après l'exécution de `npm run cy:run`. Vous pouvez également voir des captures d'écran et des vidéos des tests en échec dans le dossier `cypress/screenshots` et `cypress/videos`, respectivement.

### Locust

Les résultats des tests de charge Locust sont affichés dans l'interface web de Locust pendant et après un test de charge. Vous pouvez voir le nombre total de requêtes effectuées, le nombre de requêtes par seconde, le temps de réponse moyen, et d'autres statistiques.
