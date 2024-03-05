## Cloud | Azure

É possível acessar a API na nuvem através da seguinte URL:

```
https://ticketmaster.ashyisland-d656732b.brazilsouth.azurecontainerapps.io
```

&nbsp;

## Como Utilizar | Docker

Requisitos: Ter o <a href="https://www.docker.com">Docker</a> instalado em sua máquina.
\
\
Você pode conferir a imagem docker da API no <a href="https://hub.docker.com/r/ufelps/ticketmaster-api">Dockerhub</a>

\
1 | Copie o código no seu terminal e baixe a imagem

```
docker pull ufelps/ticketmaster-api
```

2 | Confira se a imagem foi baixada com o seguinte comando

```
docker images
```

3 | Instancie um contêiner da imagem docker

```
docker run -p 8080:8080 -e APP_PROFILE=test ufelps/ticketmaster-api
```

Após isso, a API estará rodando na porta 8080 de sua máquina.

&nbsp;

## Rotas | Postman

Acesse o [Postman](https://www.postman.com/red-comet-846596/workspace/ticketmaster/collection/23677590-42ae2312-534a-474a-96dc-36f8071b5a5c?action=share&creator=23677590&active-environment=23677590-162b18ff-b9ea-4d9c-928f-fff0d24642c4) para ver as rotas da API.
\
<br>
