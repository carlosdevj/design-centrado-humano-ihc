# Design Centrado no Humano em IHC

Site acadêmico desenvolvido para a atividade **Aula 03 — Design centrado no humano em IHC**, da disciplina de Interação Humano-Computador.

## Integrantes

- Carlos Gabriel de Morais Leal
- Eric Freitas Sampaio
- Larissa dos Passos Costa Ferreira

## Foto do trio

A fotografia geral dos integrantes já está incluída no projeto e é exibida na capa do site por meio de `assets/foto-trio.svg`, que referencia a imagem otimizada `assets/foto-trio.jpg`.

## Estrutura

```text
.
├── index.html
├── styles.css
├── script.js
├── netlify.toml
├── README.md
├── .nojekyll
├── .github/
│   └── workflows/
│       └── deploy-pages.yml
└── assets/
    ├── ifrr-logo.svg
    ├── foto-trio.svg
    └── foto-trio.jpg
```

## Conteúdo da atividade

O site responde às seis questões propostas:

1. Qual é o foco principal do design centrado no humano?
2. Quais são os três princípios do design centrado no humano mencionados na aula?
3. Como o Design Thinking se relaciona com o design centrado no humano?
4. Em qual contexto podemos usar a norma ISO 9241-210?
5. Como ocorre a integração do design centrado no humano com métodos ágeis?
6. Quais são as etapas de elaboração de um projeto centrado no usuário?

## Recursos de acessibilidade

- HTML5 semântico;
- link para pular ao conteúdo principal;
- textos alternativos nas imagens;
- contraste adequado;
- foco visível;
- navegação por teclado;
- controles para aumentar, reduzir e restaurar o tamanho da fonte;
- modo de alto contraste;
- suporte a `prefers-reduced-motion`;
- layout responsivo;
- modo apresentação.

## Testes recomendados

- W3C HTML Validator;
- WAVE;
- Lighthouse, categoria Accessibility;
- navegação somente com teclado;
- diferentes larguras de tela.

## Repositório

```text
design-centrado-humano-ihc
```

## Netlify

O arquivo `netlify.toml` está configurado para publicar a raiz do repositório.

No Netlify:

1. escolha **Add new site → Import an existing project**;
2. conecte ao GitHub;
3. escolha `design-centrado-humano-ihc`;
4. use a branch `main`;
5. não é necessário comando de build;
6. o diretório de publicação é `.`.

## GitHub Pages

O site também está publicado pelo GitHub Pages a partir da branch `main`.

```text
https://carlosdevj.github.io/design-centrado-humano-ihc/
```
