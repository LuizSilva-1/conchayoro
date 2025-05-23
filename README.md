# 🌊 ConchaYoro

Bem-vindo à nossa homepage! 🚀

Explore, aprenda e desenvolva com a gente em um ambiente feito para quem ama tecnologia.

---

## Repositório Acadêmico – CI/CD, Docker, Backend e AWS

Este repositório contém as atividades práticas da disciplina **Continuous Integration & Deployment (CI/CD)** do curso de pós-graduação em **DevOps & Continuous Software Engineering – PUC Minas**.

---

## 📦 Estrutura dos Projetos

```
.
├── backend/                        # API NestJS com Sequelize e SQLite
├── frontend/                       # (Usado no build Docker + ECR + EB)
├── .github/workflows/
│   ├── integracao-ecr-eb.yml      # Pipeline CI/CD para ECR + Elastic Beanstalk
│   └── pipeline-deploy-s3.yml     # Deploy de site estático para S3
```

---

## 🔧 Atividades Desenvolvidas

### 🐳 Docker básico
- Rodar e parar container Nginx (`docker run`, `docker ps`, `docker stop`)

### 📦 Build Docker do frontend
- Dockerfile multi-stage (Node + Nginx)
- Teste local com `docker build` e `docker run`

### ☁️ Push de imagem no ECR
- Tag, login e push para AWS ECR via GitHub Actions

### 🚀 Deploy automatizado no Beanstalk
- Substituição de variáveis via `sed`
- Deploy com `eb deploy` no GitHub Actions

### 🔧 Backend com NestJS
- Projeto iniciado com `nest new`
- Testes com `jest` e `npm test`

### 🔁 CRUD com Sequelize
- Modelos com `SequelizeModule.forRoot`
- Endpoints RESTful com DTOs

### 🧪 Testes de Unidade
A API backend desenvolvida em NestJS foi testada utilizando **Jest**, conforme roteiro da aula **6.a - Testes de Unidade** da disciplina de CI/CD.

#### Arquivo testado:
```bash
src/products/products.controller.spec.ts
```

#### Métodos testados:

| Método              | Descrição                                          |
|---------------------|----------------------------------------------------|
| `create()`          | Criação de um novo produto                         |
| `update()`          | Atualização de um produto existente                |
| `remove()`          | Exclusão de produto                                |
| `findAll()`         | Retorno de todos os produtos                       |
| `findOne()`         | Consulta de produto específico por ID              |
| `findByCriteria()`  | Busca por critérios genéricos via body (TDD)       |

#### Execução dos testes:
```bash
npm test src/products/products.controller.spec.ts
```

#### Com cobertura de testes:
```bash
npm test src/products/products.controller.spec.ts -- --coverage
```

> 💡 Alguns testes exigiram o uso de `as any` para contornar a tipagem rígida do TypeScript durante mocks. Isso foi feito conscientemente para manter o foco na validação da lógica conforme o roteiro acadêmico.

---

## 📡 Endpoints principais

```http
POST   /products
GET    /products
POST   /products/filter
GET    /products/:id
PUT    /products/:id
DELETE /products/:id
```

---

## ⚠️ Notas Técnicas

- Projeto executado totalmente via **WSL (Ubuntu)** para evitar conflitos com Node/NPM do Windows.
- Problemas com `jest`, `npx` e paths UNC resolvidos isolando ambiente.
- Ainda estudo mais a fundo a estrutura dos payloads JSON.

---

## 🧱 Isolamento do Ambiente WSL (Linux vs Windows)

Para evitar conflitos com o Node.js e NPM instalados no Windows, o projeto foi inteiramente executado dentro do **WSL2 (Ubuntu)**.  
Abaixo, o comando utilizado para **impedir interferência do ambiente Windows** no ambiente Linux:

```bash
bcdedit /set hypervisorlaunchtype off
```

Esse comando desativa o Hyper-V temporariamente, garantindo que o WSL2 opere de forma isolada.

Além disso, foi utilizado o `nvm` (Node Version Manager) para gerenciar a versão do Node diretamente dentro do WSL:

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
nvm install 18
nvm use 18
```

> 💡 Essa abordagem garante que todas as instalações de Node, NPM, Jest e dependências sejam totalmente gerenciadas dentro do Linux, evitando erros como caminhos UNC, conflitos de ambiente e falhas com `npx` ou `jest`.

---

## 👨‍🏫 Acadêmico

**Professor:** Junilson Pereira Souza  
**Disciplina:** Continuous Integration & Deployment (CI/CD)  
**Curso:** Pós-graduação Lato Sensu em DevOps & Continuous Software Engineering  
**Instituição:** PUC Minas