# 🎬 Catálogo de Filmes

Aplicação desenvolvida como teste técnico para vaga de Estágio de Desenvolvedor Front-end Júnior.

O projeto consome a API do TMDb para listar filmes populares, realizar buscas e visualizar detalhes dos filmes.

---

# 🚀 Tecnologias utilizadas

- Next.js
- React
- TypeScript
- Tailwind CSS
- TanStack Query
- TMDb API

---

# 📋 Requisitos implementados

## Setup
- [x] Projeto criado com Next.js
- [x] Tailwind CSS configurado
- [x] TanStack Query configurado

## Página principal (/)
- [x] Listagem de filmes populares
- [x] Consumo da API do TMDb
- [x] Componente reutilizável `MovieCard`
- [x] Exibição de pôster, título e ano
- [x] Barra de busca
- [x] Filtro em tempo real

## Página de detalhes (/movie/[id])
- [x] Página dinâmica por ID
- [x] Busca individual do filme
- [x] Exibição de pôster
- [x] Exibição de título
- [x] Exibição de sinopse
- [x] Exibição da data de lançamento

## Estilização
- [x] Layout responsivo
- [x] Interface desenvolvida com Tailwind CSS

## Bônus implementados
- [ ] Loading spinner
- [x] Tratamento para buscas sem resultado
- [ ] Debounce na busca
- [ ] Paginação / carregar mais

---

# ⚙️ Como executar o projeto

## Clone o repositório

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
```

## Acesse a pasta do projeto

```bash
cd seu-repositorio
```

## Instale as dependências

```bash
npm install
```

## Configure as variáveis de ambiente

Crie um arquivo `.env.local` na raiz do projeto:

```env
NEXT_PUBLIC_TMDB_API_KEY=sua_chave
```

## Execute o projeto

```bash
npm run dev
```

A aplicação estará disponível em:

```bash
http://localhost:3000
```

---

# 🔌 API utilizada

TMDb (The Movie Database)

https://www.themoviedb.org/

---

# 📱 Responsividade

O projeto foi desenvolvido para funcionar em dispositivos desktop e mobile.

---

# 👨‍💻 Autor

Felipe dos Santos Pinto