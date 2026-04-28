# AGENTS.md - CSS 参考文档项目指南

## 项目概述

这是一个基于 [VitePress](https://vitepress.dev/) 构建的 CSS 参考文档网站，旨在提供全面、结构化的 CSS 学习资料和参考手册。

## 技术栈

- **框架**: [VitePress 1.x](https://vitepress.dev/)
- **构建工具**: Vite
- **UI 框架**: Vue 3
- **代码高亮**: Prism.js
- **部署**: GitHub Pages / Cloudflare Pages / Vercel

## 目录结构

```
css-document/
├── AGENTS.md              # 本文件 - 项目指南
├── ARCHITECTURE.md        # 架构文档
├── README.md              # 项目README
├── package.json           # 包配置
├── .gitignore             # Git 忽略规则
├── .vitepress/            # VitePress 配置
│   ├── config.js          # 站点配置
│   ├── theme/             # 主题定制
│   │   ├── index.js       # 主题入口
│   │   └── custom.css     # 自定义样式
│   └── dist/              # 构建输出（gitignore）
└── docs/                  # 文档目录
    ├── index.md           # 首页
    ├── intro.md           # 入门文档
    ├── basics/            # 基础知识
    ├── concepts/          # 核心概念
    └── reference/         # 参考文档
        ├── data-types/    # 数据类型
        ├── functions/     # 函数
        ├── properties/    # 属性
        ├── pseudo-class/  # 伪类
        └── rules/         # 规则
```

## 文档分类

### 首页 (`docs/index.md`)
- CSS 简介
- 快速开始
- 文档分类导航

### 基础知识 (`docs/basics/`)
- [`whatisCSS.md`](docs/basics/whatisCSS.md) - 什么是 CSS
- [`compatibility.md`](docs/basics/compatibility.md) - 兼容性
- [`composition.md`](docs/basics/composition.md) - 组合
- [`devtools.md`](docs/basics/devtools.md) - 开发者工具
- [`layout.md`](docs/basics/layout.md) - 布局基础
- [`performance.md`](docs/basics/performance.md) - 性能
- [`replaced-forms.md`](docs/basics/replaced-forms.md) - 替换表单
- [`responsive.md`](docs/basics/responsive.md) - 响应式设计
- [`selector.md`](docs/basics/selector.md) - 选择器
- [`values-units.md`](docs/basics/values-units.md) - 值与单位

### 核心概念 (`docs/concepts/`)
- [`intro.md`](docs/concepts/intro.md) - 概念简介
- [`animation-timing.md`](docs/concepts/animation-timing.md) - 动画时间函数
- [`blend-mode.md`](docs/concepts/blend-mode.md) - 混合模式
- [`block-formatting-context.md`](docs/concepts/block-formatting-context.md) - BFC
- [`box-model.md`](docs/concepts/box-model.md) - 盒模型
- [`cascade.md`](docs/concepts/cascade.md) - 层叠
- [`color-models.md`](docs/concepts/color-models.md) - 颜色模型
- [`color-space.md`](docs/concepts/color-space.md) - 颜色空间
- [`containing-block.md`](docs/concepts/containing-block.md) - 包含块
- [`easing-function.md`](docs/concepts/easing-function.md) - 缓动函数
- [`flex-formatting-context.md`](docs/concepts/flex-formatting-context.md) - Flex 上下文
- [`formatting-context.md`](docs/concepts/formatting-context.md) - 格式化上下文
- [`grid-formatting-context.md`](docs/concepts/grid-formatting-context.md) - Grid 上下文
- [`inheritance.md`](docs/concepts/inheritance.md) - 继承
- [`layout-context.md`](docs/concepts/layout-context.md) - 布局上下文
- [`normal-flow.md`](docs/concepts/normal-flow.md) - 正常流
- [`opacity.md`](docs/concepts/opacity.md) - 透明度
- [`specificity.md`](docs/concepts/specificity.md) - 优先级
- [`stacking-context.md`](docs/concepts/stacking-context.md) - 层叠上下文
- [`transform-origin.md`](docs/concepts/transform-origin.md) - 变换原点

### 参考文档 (`docs/reference/`)

#### 数据类型 (`docs/reference/data-types/`)
- [`angle.md`](docs/reference/data-types/angle.md) - 角度
- [`color.md`](docs/reference/data-types/color.md) - 颜色
- [`integer.md`](docs/reference/data-types/integer.md) - 整数
- [`length.md`](docs/reference/data-types/length.md) - 长度
- [`number.md`](docs/reference/data-types/number.md) - 数字
- [`percentage.md`](docs/reference/data-types/percentage.md) - 百分比
- [`string.md`](docs/reference/data-types/string.md) - 字符串
- [`time.md`](docs/reference/data-types/time.md) - 时间
- 更多...

#### 函数 (`docs/reference/functions/`)
- [`attr().md`](docs/reference/functions/attr().md)
- [`calc().md`](docs/reference/functions/calc().md)
- [`hsl().md`](docs/reference/functions/hsl().md)
- [`linear-gradient().md`](docs/reference/functions/linear-gradient().md)
- 更多...

#### 属性 (`docs/reference/properties/`)
- [`animation.md`](docs/reference/properties/animation.md)
- [`border.md`](docs/reference/properties/border.md)
- [`color.md`](docs/reference/properties/color.md)
- [`display.md`](docs/reference/properties/display.md)
- [`position.md`](docs/reference/properties/position.md)
- [`typography.md`](docs/reference/properties/typography.md)

#### 伪类 (`docs/reference/pseudo-class/`)
- [`active.md`](docs/reference/pseudo-class/active.md)
- [`focus.md`](docs/reference/pseudo-class/focus.md)
- [`hover.md`](docs/reference/pseudo-class/hover.md)
- [`nth-child.md`](docs/reference/pseudo-class/nth-child.md)
- 更多...

#### 规则 (`docs/reference/rules/`)
- [`charset.md`](docs/reference/rules/charset.md)
- [`document.md`](docs/reference/rules/document.md)
- [`font-face.md`](docs/reference/rules/font-face.md)
- [`keyframes.md`](docs/reference/rules/keyframes.md)
- [`media.md`](docs/reference/rules/media.md)
- [`supports.md`](docs/reference/rules/supports.md)

## 开发指南

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

### 构建生产版本

```bash
npm run build
```

### 预览构建结果

```bash
npm run preview
```

## 文档编写规范

### 文件命名
- 使用小写字母和连字符：`font-weight.md`
- 文件名应与 CSS 属性/伪类/函数名称一致

### 文件结构
每个文档文件应包含：
1. **标题**：使用 `#` 作为文档标题
2. **简介**：简要说明用途
3. **语法**：使用代码块展示语法
4. **属性说明**：表格形式列出属性值
5. **示例**：提供代码示例
6. **浏览器兼容性**：如有必要，添加兼容性信息

### 代码示例
- 使用 `css` 标记代码块以实现语法高亮
- 示例应简洁明了，展示核心用法

### 链接规范
- 内部链接使用相对路径（VitePress 会自动处理）
- 外部链接使用完整 URL

## 部署

### GitHub Pages
```bash
npm run build
# 将 dist 目录部署到 GitHub Pages
```

### Cloudflare Pages
```bash
npm run build
# 将 dist 目录部署到 Cloudflare Pages
```

### Vercel
通过 Vercel 控制台连接 GitHub 仓库自动部署。

## 贡献指南

1. Fork 本仓库
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 提交 Pull Request

## 许可证

本项目采用 [MIT](LICENSE) 许可证。