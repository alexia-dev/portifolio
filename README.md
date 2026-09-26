# Portfólio — Aléxia Mendes

Portfólio pessoal de **Aléxia Mendes**, estudante de Ciência da Computação e desenvolvedora em formação.

O projeto apresenta uma visão profissional da trajetória, habilidades, projetos, formação e canais de contato, com foco em uma experiência visual moderna, responsiva e simples de navegar.

## ✨ Destaques

- Design responsivo para desktop e dispositivos móveis
- Paleta visual em degradê de **rosa claro → lilás**
- Modo claro e **Dark Mode**
- Preferência de tema salva no navegador com `localStorage`
- Navegação suave entre seções
- Menu mobile
- Efeito de texto digitado na seção inicial
- Cards de habilidades e projetos
- Linha do tempo de formação
- Contato direto por e-mail usando `mailto:`
- Links para GitHub, LinkedIn e Instagram

## 🗂️ Estrutura do projeto

```text
portfolio/
├── Index.html
├── 1725635186385.jpeg
├── README.md
└── .gitattributes
```

### `Index.html`

Arquivo principal do site.

O HTML contém a estrutura completa da página e, no projeto atual, também reúne os estilos CSS e os scripts JavaScript para manter a publicação simples, sem dependências de build.

### `1725635186385.jpeg`

Imagem utilizada como recurso visual do portfólio.

### `.gitattributes`

Configura atributos do Git para os arquivos do projeto.

## 🎨 Tecnologias

- **HTML5** — estrutura semântica da página
- **CSS3** — layout, responsividade, animações, gradientes e Dark Mode
- **JavaScript** — interações da interface e persistência do tema
- **Font Awesome** — ícones
- **Google Fonts** — tipografia
- **Git/GitHub** — versionamento e publicação

## 🌙 Como funciona o Dark Mode

O botão de tema alterna entre os modos claro e escuro.

A escolha é armazenada no navegador:

`localStorage.setItem('theme', 'dark')`

Ao abrir o site novamente, a preferência salva é recuperada. Quando não existe uma escolha anterior, o site pode seguir a preferência de tema do sistema operacional.

## ✉️ Contato

O botão de contato usa um link `mailto:` direcionado para:

**alexiaamendesdev@outlook.com**

O assunto e uma mensagem inicial já são preenchidos automaticamente para reduzir o número de etapas para quem deseja entrar em contato.

> Observação: o `mailto:` abre o cliente de e-mail configurado no dispositivo. O site não envia mensagens por conta própria nem armazena mensagens de visitantes.

## 🚀 Executando localmente

Como o projeto é estático, não é necessário instalar Node.js, Java ou outro servidor para visualizar a versão básica.

Basta abrir:

```text
Index.html
```

Para desenvolvimento, recomenda-se usar a extensão **Live Server** no VS Code ou outro servidor HTTP local.

## 📦 Publicação

O projeto pode ser publicado como site estático, inclusive pelo **GitHub Pages**.

## 🧩 Manutenção futura

Melhorias planejadas podem incluir:

- Separação do CSS e JavaScript em arquivos próprios
- Componentização da interface
- Melhorias de acessibilidade
- SEO e metadados sociais
- Otimização de imagens
- Inclusão automática de projetos públicos do GitHub
- Testes de acessibilidade e performance

## 👩‍💻 Autora

**Aléxia Mendes**

- GitHub: https://github.com/alexia-dev
- LinkedIn: https://www.linkedin.com/in/alexiaamendes/
- E-mail: alexiaamendesdev@outlook.com

---

> Portfólio pessoal desenvolvido para apresentar projetos, competências e evolução profissional em tecnologia.
