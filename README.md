# Design Centrado no Humano em IHC

Site acadêmico desenvolvido para a atividade **Aula 03 — Design centrado no humano em IHC**, da disciplina de Interação Humano-Computador.

## Integrantes

- Carlos Gabriel de Morais Leal
- Eric Freitas Sampaio
- Larissa dos Passos Costa Ferreira

## Antes da entrega: substituir a foto do trio

A imagem atual `assets/foto-trio.svg` é provisória e deve ser substituída por uma **fotografia geral dos três integrantes**.

Recomendação: exporte a foto real em **WebP**, preferencialmente horizontal, entre 1200 × 800 e 1600 × 1000 px. Você pode salvar como `assets/foto-trio.webp` e alterar o `src` no HTML. **Mantenha o atributo `alt` identificando os três integrantes mostrados na fotografia.**

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
├── tests/
│   └── validate_site.py
└── assets/
    ├── ifrr-logo.svg
    └── foto-trio.svg
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

## Teste local

Com Python instalado, execute:

```bash
python tests/validate_site.py
```

Também é recomendado testar:

- W3C HTML Validator;
- WAVE;
- Lighthouse, categoria Accessibility;
- navegação somente com teclado;
- diferentes larguras de tela.

## GitHub

Nome do repositório:

```text
design-centrado-humano-ihc
```

Para iniciar localmente:

```bash
git init
git branch -M main
git remote add origin https://github.com/carlosdevj/design-centrado-humano-ihc.git
git add .
git commit -m "feat: estrutura inicial do trabalho de IHC"
git push -u origin main
```

## Divisão sugerida dos commits

Para deixar clara a participação dos três integrantes:

1. **Carlos** — estrutura inicial, capa, introdução e estilos-base.
2. **Eric** — conteúdo das questões 1, 2 e 3.
3. **Larissa** — conteúdo das questões 4, 5 e 6.
4. **Revisão final** — acessibilidade, foto real do trio, referências e teste responsivo.

## Netlify

O arquivo `netlify.toml` já está configurado para publicar a raiz do repositório.

No Netlify:

1. escolha **Add new site → Import an existing project**;
2. conecte ao GitHub;
3. escolha `design-centrado-humano-ihc`;
4. use a branch `main`;
5. não é necessário comando de build;
6. o diretório de publicação é `.`.

## Publicação no GitHub Pages

O repositório inclui `.github/workflows/deploy-pages.yml`, que publica o site estático no GitHub Pages a cada push na branch `main`.

Se o Pages ainda não estiver habilitado no repositório, abra **Settings → Pages** e, em **Build and deployment → Source**, selecione **GitHub Actions**. Depois execute novamente o workflow em **Actions → Deploy GitHub Pages**.

A URL esperada é:

```text
https://carlosdevj.github.io/design-centrado-humano-ihc/
```
