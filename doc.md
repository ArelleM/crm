# Documentation

## 1 Test de Charge

Nous avons testé l'API https://reqres.in/.
Nous avons effectué un test de charge sur les routes /api/login et /api/users.
Nous avons testé pour 20 users simultanés car nous estimons qu'il s'agit du maximum d'users connectés simultanément.

Nous avons utilisé Locust car il a une version web, qu'il est rapide à configurer et léger contrairement à JMeter qui utilise Java, qui est plus lent. Nous estimons que les fonctionnalités disponibles sur Locust sont suffisantes.

### Résultats

![](https://cdn.discordapp.com/attachments/766665656040161322/1115642248349106276/image.png "Résultats test de charge")

Nous voyons qu'il n'y a pas de fail, toutes les requetes sont passées. L'api supporte une charge de 20 users.
