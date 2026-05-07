# Olinda Site

## Sobre o Projeto

O **Olinda Site** é uma plataforma de e-commerce desenvolvida para apresentar e comercializar produtos da marca Olinda. O site oferece uma experiência de compra intuitiva e moderna, com categorias específicas para diferentes públicos: homens, mulheres, crianças, bebês e licenciados. A aplicação foi construída com foco em performance, acessibilidade e design responsivo, visando proporcionar uma navegação fluida em dispositivos móveis e desktop.

<span style="color:red;">
**Nota:** Os nomes, preços e descrições dos produtos neste projeto são fictícios, exceto pela própria marca Olinda.
</span>

### Ideia do Projeto

A ideia central do projeto é criar um espaço digital que reflita a essência da marca Olinda, conhecida por sua qualidade e diversidade de produtos. O site serve como vitrine virtual, permitindo aos usuários explorar coleções por categoria, visualizar detalhes dos produtos e gerenciar um carrinho de compras. Além disso, inclui seções promocionais e recursos interativos para engajar os visitantes e facilitar o processo de compra.

## Tecnologias Utilizadas

O projeto foi desenvolvido utilizando um stack moderno e eficiente para aplicações web:

- **[Next.js](https://nextjs.org/)**: Framework React para renderização do lado do servidor (SSR) e geração de sites estáticos (SSG), otimizando performance e SEO.
- **[TypeScript](https://www.typescriptlang.org/)**: Superset do JavaScript que adiciona tipagem estática, melhorando a robustez e manutenibilidade do código.
- **[Tailwind CSS](https://tailwindcss.com/)**: Framework CSS utilitário para estilização rápida e consistente, com design responsivo.
- **[shadcn/ui](https://ui.shadcn.com/)**: Biblioteca de componentes UI reutilizáveis, baseada em Radix UI e Tailwind CSS, para uma interface coesa e acessível.
- **[ESLint](https://eslint.org/)**: Ferramenta de linting para manter a qualidade do código e seguir boas práticas.
- **[PostCSS](https://postcss.org/)**: Processador CSS para otimização e compatibilidade.

## Boas Práticas Implementadas

Para garantir um código de alta qualidade e uma experiência de desenvolvimento produtiva, adotamos as seguintes boas práticas:

- **Estrutura Organizada**: Separação clara de responsabilidades com pastas dedicadas para páginas (`app/`), componentes (`components/`), contextos (`contexts/`), bibliotecas (`lib/`) e ativos públicos (`public/`).
- **Componentes Reutilizáveis**: Uso de componentes modulares e genéricos, facilitando a manutenção e escalabilidade.
- **Gerenciamento de Estado**: Implementação de contextos React para estado global, como o carrinho de compras, evitando prop drilling.
- **Tipagem Forte**: Uso extensivo de TypeScript para interfaces e tipos, reduzindo erros em tempo de execução.
- **Design Responsivo**: Estilização com Tailwind CSS para garantir compatibilidade em diferentes dispositivos.
- **Acessibilidade**: Componentes UI acessíveis com shadcn/ui, seguindo padrões WCAG.
- **Linting e Formatação**: Configuração de ESLint para consistência de código e prevenção de bugs comuns.
- **Otimização de Performance**: Utilização de Next.js para SSR/SSG, carregamento lazy de componentes e otimização de imagens.

## Estrutura do Projeto

```
├── app/                    # Páginas e layouts do Next.js
│   ├── globals.css         # Estilos globais
│   ├── layout.tsx          # Layout principal
│   ├── page.tsx            # Página inicial
│   ├── baby/               # Página da categoria Bebês
│   ├── homem/              # Página da categoria Homens
│   ├── kids/               # Página da categoria Crianças
│   ├── licenciados/        # Página da categoria Licenciados
│   └── mulher/             # Página da categoria Mulheres
├── components/             # Componentes reutilizáveis
│   ├── ui/                 # Componentes base (shadcn/ui)
│   ├── cart-drawer.tsx     # Drawer do carrinho
│   ├── featured-categories.tsx # Categorias em destaque
│   ├── footer.tsx          # Rodapé
│   ├── header.tsx          # Cabeçalho
│   ├── hero-section.tsx    # Seção principal
│   ├── navigation-header.tsx # Navegação
│   ├── product-card.tsx    # Cartão de produto
│   └── promotional-features.tsx # Recursos promocionais
├── contexts/               # Contextos React para estado global
│   └── cart-context.tsx    # Contexto do carrinho
├── lib/                    # Utilitários e bibliotecas
│   └── utils.ts            # Funções auxiliares
├── public/                 # Ativos estáticos
├── components.json         # Configuração do shadcn/ui
├── eslint.config.mjs       # Configuração do ESLint
├── next.config.ts          # Configuração do Next.js
├── package.json            # Dependências e scripts
├── postcss.config.mjs      # Configuração do PostCSS
├── tailwind.config.ts      # Configuração do Tailwind CSS
└── tsconfig.json           # Configuração do TypeScript
```

## Instalação e Execução

### Pré-requisitos

- Node.js (versão 18 ou superior)
- npm, yarn, pnpm ou bun

### Instalação

1. Clone o repositório:
   ```bash
   git clone <url-do-repositorio>
   cd olinda-site
   ```

2. Instale as dependências:
   ```bash
   npm install
   # ou
   yarn install
   # ou
   pnpm install
   # ou
   bun install
   ```

### Execução em Desenvolvimento

Execute o servidor de desenvolvimento:

```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
# ou
bun dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador para visualizar o site. As alterações são refletidas automaticamente.

### Build para Produção

Para gerar uma build otimizada:

```bash
npm run build
```

Para executar a build em produção:

```bash
npm run start
```

### Outros Scripts

- `npm run lint`: Executa o ESLint para verificar a qualidade do código.

## Contribuição

Contribuições são bem-vindas! Para contribuir:

1. Faça um fork do projeto.
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`).
3. Commit suas mudanças (`git commit -am 'Adiciona nova feature'`).
4. Push para a branch (`git push origin feature/nova-feature`).
5. Abra um Pull Request.

## Licença

Este projeto é propriedade da marca Olinda. Consulte os termos de uso para mais informações.

## Deploy

O deploy é recomendado na [Vercel](https://vercel.com/), plataforma oficial do Next.js. Para mais detalhes, consulte a [documentação de deploy do Next.js](https://nextjs.org/docs/app/building-your-application/deploying).

---

Desenvolvido por Isaac Lopes.
