# Estratégia CSS

## CSS global (`src/index.css`)

Importado **uma única vez** em `src/main.tsx`. Contém apenas:

| Seção | Propósito |
|-------|-----------|
| Reset | `*` margin, padding, box-sizing |
| Tipografia base | `body` background e font-family |
| Fonte externa | `@import` DS-Digital |
| Elementos de formulário | Tipografia monospace padrão em inputs |
| Hook `.sheet` | Tipografia DS-Digital dentro da ficha (CharacterSheet) |

**Não adicionar estilos de componente aqui.**

## CSS Modules (`*.module.css`)

Cada componente/página importa seu próprio module co-localizado:

```tsx
import styles from "./SheetBox.module.css";

<section className={styles.box}>
```

- Classes são escopadas automaticamente (hash no build).
- **Proibido** importar `.css` plano (não-module) em componentes.
- Convenção Vite: `localsConvention: "camelCase"` — `.sheet-box` no CSS vira `styles.sheetBox` no TSX.

## Quando usar `:global()`

Lista fechada:

1. Hook `.sheet` — classe literal no `<main>` para tipografia global em `index.css`.
2. Integração com bibliotecas de terceiros (quando necessário).

**Não** usar `:global()` para estilizar classes internas de outro componente.

## Composição entre componentes

Quando um pai precisa influenciar layout de um filho, use props:

| Componente | Prop | Uso |
|------------|------|-----|
| `SheetBox` | `className?: string` | min-height por seção, overrides de layout |
| `SheetField` | `wide?: boolean` | campo ocupa linha inteira no grid |

Evite seletores descendentes cruzados (ex.: `.header .sheet-box`).

## Hook `.sheet` (global)

`CharacterSheet` renderiza `<main className={`${styles.sheet} sheet`}>`. A classe literal `sheet` conecta ao hook em `index.css` para tipografia DS-Digital nos formulários. A classe `styles.sheet` carrega o layout scoped do module.

## Inventário de modules

| Arquivo | Componente |
|---------|------------|
| `SheetBox.module.css` | SheetBox |
| `AttributeCircle.module.css` | AttributeCircle |
| `SheetField.module.css` | SheetField |
| `SheetFormGrid.module.css` | SheetFormGrid |
| `CharacterSheet.module.css` | CharacterSheet |
