# CSS 开发规范与规则配置

## 概述

本文档介绍如何在项目中配置规则和工具来规范 CSS 开发，确保代码质量和一致性。

## 1. CSS 代码规范

### 命名约定

推荐使用 BEM (Block Element Modifier) 命名规范：

```css
/* 块 */
.card { }

/* 元素 */
.card__title { }
.card__content { }

/* 修饰符 */
.card--primary { }
.card--large { }
```

### 代码风格

```css
/* ✅ 推荐 */
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
}

/* ❌ 不推荐 */
.container{display:flex;justify-content:center;align-items:center;padding:16px;}
```

### 选择器规范

- 避免使用 ID 选择器
- 避免使用 `!important`
- 选择器深度不超过 3 层
- 优先使用类选择器

## 2. Stylelint 配置

### 安装

```bash
npm install stylelint stylelint-config-standard stylelint-prettier --save-dev
```

### 配置文件 (`.stylelintrc.json`)

```json
{
  "extends": [
    "stylelint-config-standard",
    "stylelint-config-prettier"
  ],
  "rules": {
    "indentation": 2,
    "selector-class-pattern": "^[a-z][a-zA-Z0-9]*(-[a-zA-Z0-9]+)*$",
    "property-no-vendor-prefix": null,
    "at-rule-no-vendor-prefix": null,
    "no-descending-specificity": null,
    "selector-pseudo-class-no-unknown": [
      true,
      {
        "ignorePseudoClasses": ["global"]
      }
    ]
  }
}
```

### package.json 脚本

```json
{
  "scripts": {
    "lint:css": "stylelint 'src/**/*.css' --fix",
    "lint": "npm run lint:css"
  }
}
```

## 3. Git Hooks 配置

### 安装 Husky 和 lint-staged

```bash
npm install husky lint-staged --save-dev
```

### 配置 (`.husky/pre-commit`)

```bash
#!/bin/sh
npx lint-staged
```

### lint-staged 配置

```json
{
  "lint-staged": {
    "*.{css,scss,less}": [
      "stylelint --fix"
    ]
  }
}
```

## 4. CSS 变量规范

### 定义设计 Token

```css
:root {
  /* 颜色 */
  --color-primary: #1890ff;
  --color-secondary: #52c41a;
  --color-text: #333333;
  --color-text-secondary: #666666;
  --color-bg: #ffffff;
  --color-bg-secondary: #f5f5f5;

  /* 间距 */
  --spacing-xs: 4px;
  --spacing-sm: 8px;
  --spacing-md: 16px;
  --spacing-lg: 24px;
  --spacing-xl: 32px;

  /* 圆角 */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-full: 9999px;

  /* 阴影 */
  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1);

  /* 字体 */
  --font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  --font-size-sm: 12px;
  --font-size-md: 14px;
  --font-size-lg: 16px;
  --font-size-xl: 20px;

  /* 过渡 */
  --transition-fast: 150ms ease;
  --transition-normal: 250ms ease;
  --transition-slow: 350ms ease;
}
```

### 使用变量

```css
.button {
  background-color: var(--color-primary);
  color: var(--color-bg);
  padding: var(--spacing-sm) var(--spacing-md);
  border-radius: var(--radius-md);
  transition: all var(--transition-fast);
}
```

## 5. 响应式设计规范

### 断点约定

```css
/* 移动优先 */
:root {
  --breakpoint-sm: 640px;
  --breakpoint-md: 768px;
  --breakpoint-lg: 1024px;
  --breakpoint-xl: 1280px;
}
```

### 使用示例

```css
.container {
  width: 100%;
  padding: 0 var(--spacing-md);
}

@media (min-width: 768px) {
  .container {
    max-width: 768px;
    margin: 0 auto;
  }
}
```

## 6. 性能优化规范

### 动画性能

```css
/* ✅ 推荐 - 使用 transform 和 opacity */
.animate {
  transform: translateY(-10px);
  opacity: 0;
  transition: transform 0.3s, opacity 0.3s;
}

/* ❌ 避免 - 动画 layout 属性 */
.bad-animation {
  /* 避免动画 top, left, width, height 等 */
}
```

### 选择器性能

```css
/* ✅ 高效 */
.card__title { }

/* ❌ 低效 */
div.container .card .title { }
```

## 7. 浏览器兼容性

### Autoprefixer 配置

```json
{
  "browsers": [
    "> 1%",
    "last 2 versions",
    "not dead",
    "not ie 11"
  ]
}
```

### 特性检测

```css
.container {
  display: flex;
  display: -ms-flexbox; /* IE10 */
}
```

或使用 `@supports`：

```css
.container {
  display: grid;
}

@supports not (display: grid) {
  .container {
    display: flex;
  }
}
```

## 8. 代码审查清单

### 功能性

- [ ] 样式是否正确实现设计稿
- [ ] 响应式布局是否正常
- [ ] 浏览器兼容性是否测试

### 代码质量

- [ ] 是否遵循 BEM 命名规范
- [ ] 是否使用 CSS 变量
- [ ] 是否有重复的样式代码
- [ ] 选择器是否简洁高效

### 性能

- [ ] 是否避免使用 `!important`
- [ ] 动画是否使用 transform/opacity
- [ ] 是否有未使用的 CSS 代码

## 相关资源

- [Stylelint 文档](https://stylelint.io/)
- [BEM 命名规范](http://getbem.com/)
- [CSS 变量 MDN](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties)