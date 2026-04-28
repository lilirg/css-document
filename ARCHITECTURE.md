# 架构文档 - CSS 参考文档项目

## 概述

本文档详细描述 CSS 参考文档项目的系统架构、技术选型和部署流程。

## 系统架构图

```
┌─────────────────────────────────────────────────────────────────┐
│                         用户浏览器                                │
└─────────────────────────────────────────────────────────────────┘
                                  │
                                  ▼
┌─────────────────────────────────────────────────────────────────┐
│                      部署平台                                     │
│  ┌─────────────┐  ┌──────────────┐  ┌─────────────┐            │
│  │  GitHub Pages│  │ Cloudflare   │  │   Vercel    │            │
│  │             │  │ Pages        │  │             │            │
│  └─────────────┘  └──────────────┘  └─────────────┘            │
└─────────────────────────────────────────────────────────────────┘
                                  │
                                  ▼
┌─────────────────────────────────────────────────────────────────┐
│                     静态文件 (.vitepress/dist/)                  │
│  ┌─────────────────────────────────────────────────────────┐    │
│  │                  VitePress 构建产物                       │    │
│  │  ┌───────────┐ ┌───────────┐ ┌───────────┐             │    │
│  │  │  HTML     │ │   CSS     │ │   JS      │             │    │
│  │  │  页面     │ │  样式     │ │  脚本     │             │    │
│  │  └───────────┘ └───────────┘ └───────────┘             │    │
│  │  ┌───────────┐ ┌───────────┐ ┌───────────┐             │    │
│  │  │   MD      │ │   静态    │ │  元数据   │             │    │
│  │  │  渲染页   │ │  资源     │ │  JSON     │             │    │
│  │  └───────────┘ └───────────┘ └───────────┘             │    │
│  └─────────────────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────────────────┘
```

## 技术栈详情

### 核心框架

| 技术 | 版本 | 用途 |
|------|------|------|
| VitePress | 1.x | 静态站点生成器 |
| Vue 3 | 3.x | UI 组件库 |
| Vite | 5.x | 构建工具 |
| Markdown It | - | Markdown 解析 |

### 代码高亮

| 技术 | 版本 | 用途 |
|------|------|------|
| Prism.js | - | 代码语法高亮 |

## 项目结构

```
css-document/
├── AGENTS.md                    # 项目指南
├── ARCHITECTURE.md              # 架构文档
├── README.md                    # 项目说明
├── package.json                 # 包配置
├── .gitignore                   # Git 忽略规则
├── .vitepress/                  # VitePress 配置
│   ├── config.js                # 站点配置
│   └── theme/                   # 主题定制
│       ├── index.js             # 主题入口
│       └── custom.css           # 自定义样式
└── docs/                        # 文档目录
    ├── index.md                 # 首页
    ├── intro.md                 # 入门页
    ├── basics/                  # 基础知识 (10 篇)
    │   ├── whatisCSS.md
    │   ├── compatibility.md
    │   ├── composition.md
    │   ├── devtools.md
    │   ├── layout.md
    │   ├── performance.md
    │   ├── replaced-forms.md
    │   ├── responsive.md
    │   ├── selector.md
    │   └── values-units.md
    ├── concepts/                # 核心概念 (20 篇)
    │   ├── intro.md
    │   ├── animation-timing.md
    │   ├── blend-mode.md
    │   ├── block-formatting-context.md
    │   ├── box-model.md
    │   ├── cascade.md
    │   ├── color-models.md
    │   ├── color-space.md
    │   ├── containing-block.md
    │   ├── easing-function.md
    │   ├── flex-formatting-context.md
    │   ├── formatting-context.md
    │   ├── grid-formatting-context.md
    │   ├── inheritance.md
    │   ├── layout-context.md
    │   ├── normal-flow.md
    │   ├── opacity.md
    │   ├── specificity.md
    │   ├── stacking-context.md
    │   └── transform-origin.md
    └── reference/               # 参考文档
        ├── intro.md             # 参考简介
        ├── data-types/          # 数据类型 (18 篇)
        │   ├── angle.md
        │   ├── any-value.md
        │   ├── color.md
        │   ├── custom-ident.md
        │   ├── frequency.md
        │   ├── image.md
        │   ├── inherit.md
        │   ├── initial.md
        │   ├── integer.md
        │   ├── length.md
        │   ├── number.md
        │   ├── percentage.md
        │   ├── resolution.md
        │   ├── revert.md
        │   ├── string.md
        │   ├── time.md
        │   ├── unset.md
        │   └── url.md
        ├── functions/           # 函数 (33 篇)
        │   ├── attr().md
        │   ├── calc().md
        │   ├── circle().md
        │   ├── ellipse().md
        │   ├── hsl().md
        │   ├── hsla().md
        │   ├── inset().md
        │   ├── linear-gradient().md
        │   ├── matrix().md
        │   ├── matrix3d().md
        │   ├── polygon().md
        │   ├── radial-gradient().md
        │   ├── repeating-linear-gradient().md
        │   ├── repeating-radial-gradient().md
        │   ├── rgb().md
        │   ├── rgba().md
        │   ├── rotate().md
        │   ├── rotateX().md
        │   ├── rotateY().md
        │   ├── rotateZ().md
        │   ├── scale().md
        │   ├── scale3d().md
        │   ├── scaleX().md
        │   ├── scaleY().md
        │   ├── scaleZ().md
        │   ├── skew().md
        │   ├── skewX().md
        │   ├── skewY().md
        │   ├── translate().md
        │   ├── translate3d().md
        │   ├── translateX().md
        │   ├── translateY().md
        │   └── translateZ().md
        ├── properties/          # 属性 (6 篇)
        │   ├── animation.md
        │   ├── border.md
        │   ├── color.md
        │   ├── display.md
        │   ├── position.md
        │   └── typography.md
        ├── pseudo-class/        # 伪类 (43 篇)
        │   ├── active.md
        │   ├── any-link.md
        │   ├── blank.md
        │   ├── checked.md
        │   ├── default.md
        │   ├── dir().md
        │   ├── disabled.md
        │   ├── empty.md
        │   ├── enabled.md
        │   ├── first-child.md
        │   ├── first-of-type.md
        │   ├── focus.md
        │   ├── fullscreen.md
        │   ├── has().md
        │   ├── hover.md
        │   ├── in-range.md
        │   ├── indeterminate.md
        │   ├── intro.md
        │   ├── invalid.md
        │   ├── is.md
        │   ├── is().md
        │   ├── lang().md
        │   ├── last-child.md
        │   ├── last-of-type.md
        │   ├── left.md
        │   ├── link.md
        │   ├── local-link.md
        │   ├── not.md
        │   ├── not().md
        │   ├── nth-child.md
        │   ├── nth-last-child.md
        │   ├── nth-of-type.md
        │   ├── only-child.md
        │   ├── only-of-type.md
        │   ├── optional.md
        │   ├── out-of-range.md
        │   ├── pattern-mismatch.md
        │   ├── placeholder-shown.md
        │   ├── read-only.md
        │   ├── read-write.md
        │   ├── required.md
        │   ├── right.md
        │   ├── root.md
        │   ├── scope.md
        │   ├── target.md
        │   ├── valid.md
        │   ├── visited.md
        │   └── where().md
        └── rules/               # 规则 (6 篇)
            ├── charset.md
            ├── document.md
            ├── font-face.md
            ├── intro.md
            ├── keyframes.md
            ├── media.md
            └── supports.md
```

## 配置详解

### .vitepress/config.js

```javascript
import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'CSS 参考',
  description: '一个广泛的 CSS 参考',
  lang: 'zh-CN',
  
  themeConfig: {
    nav: [
      { text: '入门', link: '/' },
      { text: '概念', link: '/concepts/intro' },
      { text: '参考', link: '/reference/intro' }
    ],
    
    sidebar: {
      '/': [...],
      '/basics/': [...],
      '/concepts/': [...],
      '/reference/': [...]
    }
  }
})
```

### 侧边栏结构

```
首页 (/)
└── 简介

基础知识 (/basics/)
├── 什么是 CSS
├── 兼容性
├── 组合
├── 开发者工具
├── 布局基础
├── 性能
├── 替换表单
├── 响应式设计
├── 选择器
└── 值与单位

概念 (/concepts/)
├── 简介
├── 动画时间函数
├── 混合模式
├── 块级格式化上下文
├── 盒模型
├── 层叠
├── 颜色模型
├── 颜色空间
├── 包含块
├── 缓动函数
├── Flex 上下文
├── 格式化上下文
├── Grid 上下文
├── 继承
├── 布局上下文
├── 正常流
├── 透明度
├── 优先级
├── 层叠上下文
└── 变换原点

参考 (/reference/)
├── 简介
├── 数据类型 (18 篇)
├── 函数 (33 篇)
├── 属性 (6 篇)
├── 伪类 (43 篇)
└── 规则 (6 篇)
```

## 数据流

```
┌──────────────┐     ┌──────────────┐     ┌──────────────┐
│  Markdown    │────▶│  VitePress   │────▶│   Vue 组件   │
│  文档源文件  │     │  构建处理    │     │   渲染       │
└──────────────┘     └──────────────┘     └──────────────┘
                            │
                            ▼
                     ┌──────────────┐
                     │     Vite     │
                     │   打包构建   │
                     └──────────────┘
                            │
                            ▼
                     ┌──────────────┐
                     │  静态 HTML   │
                     │  / CSS / JS  │
                     └──────────────┘
```

## 构建流程

```
┌─────────────────────────────────────────────────────────────────┐
│                     npm run build                                │
└────────────────────────────┬────────────────────────────────────┘
                             │
                             ▼
┌─────────────────────────────────────────────────────────────────┐
│  Step 1: 读取 docs/ 目录下的所有 .md 文件                        │
└────────────────────────────┬────────────────────────────────────┘
                             │
                             ▼
┌─────────────────────────────────────────────────────────────────┐
│  Step 2: Markdown → Vue 组件树                                   │
└────────────────────────────┬────────────────────────────────────┘
                             │
                             ▼
┌─────────────────────────────────────────────────────────────────┐
│  Step 3: Vite 打包 (JS + CSS + 静态资源)                        │
└────────────────────────────┬────────────────────────────────────┘
                             │
                             ▼
┌─────────────────────────────────────────────────────────────────┐
│  Step 4: 生成静态文件到 .vitepress/dist/ 目录                    │
└────────────────────────────┬────────────────────────────────────┘
                             │
                             ▼
┌─────────────────────────────────────────────────────────────────┐
│  Step 5: 部署到目标平台                                          │
└─────────────────────────────────────────────────────────────────┘
```

## 部署架构

### GitHub Pages

```bash
npm run build
# 将 .vitepress/dist 部署到 GitHub Pages
```

### Cloudflare Pages

```bash
npm run build
# 将 .vitepress/dist 部署到 Cloudflare Pages
```

### Vercel

- 通过 GitHub 仓库自动部署
- 构建命令: `npm run build`
- 输出目录: `.vitepress/dist`

## 文档分类统计

| 分类 | 子分类 | 文档数量 |
|------|--------|----------|
| 首页 | - | 1 |
| 基础知识 | basics/ | 10 |
| 核心概念 | concepts/ | 20 |
| 参考 - 数据类型 | data-types/ | 18 |
| 参考 - 函数 | functions/ | 33 |
| 参考 - 属性 | properties/ | 6 |
| 参考 - 伪类 | pseudo-class/ | 43 |
| 参考 - 规则 | rules/ | 6 |
| **总计** | | **137** |

## 扩展点

### 添加新文档

1. 在 `docs/` 对应目录下创建 `.md` 文件
2. 在 `.vitepress/config.js` 的 sidebar 中添加导航项
3. 遵循文档编写规范

### 自定义主题

1. 修改 `.vitepress/theme/custom.css` 添加自定义样式
2. 在 `.vitepress/theme/index.js` 中扩展主题

### 添加插件

1. 在 `.vitepress/config.js` 中配置 VitePress 插件
2. 安装相应的 npm 包

## 性能优化

### 已实施的优化

- **代码分割**: Vite 自动代码分割
- **缓存策略**: 静态资源长期缓存
- **压缩**: 生产环境 JS/CSS 压缩
- **搜索**: 内置本地搜索功能

### 建议的优化

- 添加全文搜索
- 添加暗色模式切换
- 实现文档版本管理
- 添加性能监控

## 安全考虑

- 静态站点无后端，降低安全风险
- 使用 HTTPS 部署
- 外部链接添加 `rel="noopener noreferrer"`
- 定期更新依赖包版本