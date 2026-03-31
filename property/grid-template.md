# grid-template

`grid-template` 属性是 `grid-template-rows`、`grid-template-columns` 和 `grid-template-areas` 的简写属性。

## 语法

```css
grid-template: none | <'grid-template-rows'> / <'grid-template-columns'> | <'grid-template-areas'>
```

| 语法特性 | 说明 |
| :--- | :--- |
| 初始值 | 详见各简写属性 |
| 适用 HTML 元素 | 网格容器 |
| 动画 | 否 |

## 值

### 关键字值

| 值 | 说明 |
| :--- | :--- |
| `none` | 重置所有网格模板属性为初始值 |

### 简写组合

| 组合 | 设置的内容 |
| :--- | :--- |
| `grid-template: 100px 200px / 100px 200px` | 设置行和列 |
| `grid-template: "a a" "b b" / 1fr 1fr` | 使用区域名称 |
| `grid-template: repeat(3, 1fr) / repeat(4, 1fr)` | 使用 repeat |

## 注意

- 简写属性会重置 `grid-auto-rows`、`grid-auto-columns` 和 `grid-auto-flow` 为初始值
- 使用 `/` 分隔行和列定义
- 区域名称使用引号包裹

## 示例

```css
/* 简单行列定义 */
.grid-container {
  display: grid;
  grid-template: 100px 200px / 100px 200px;
}

/* 使用区域名称 */
.grid-container {
  display: grid;
  grid-template:
    "header header" 100px
    "sidebar main" 1fr
    "footer footer" 100px
    / 200px 1fr;
}

/* 使用 repeat */
.grid-container {
  display: grid;
  grid-template: repeat(3, 1fr) / repeat(4, 1fr);
}

/* 重置网格 */
.grid-container {
  grid-template: none;
}
```

```html
<!-- HTML 示例 -->
<div class="grid-container">
  <div class="header">头部</div>
  <div class="sidebar">侧边栏</div>
  <div class="main">主内容</div>
  <div class="footer">底部</div>
</div>
```

## 使用场景

```css
/* 1. 经典三栏布局 */
.layout {
  display: grid;
  grid-template:
    "header header header" 80px
    "nav main sidebar" 1fr
    "footer footer footer" 60px
    / 200px 1fr 200px;
}

.header { grid-area: header; }
.nav { grid-area: nav; }
.main { grid-area: main; }
.sidebar { grid-area: sidebar; }
.footer { grid-area: footer; }

/* 2. 等分布局 */
.equal-grid {
  display: grid;
  grid-template: repeat(2, 1fr) / repeat(3, 1fr);
  gap: 20px;
}

/* 3. 响应式网格 */
.responsive-grid {
  display: grid;
  grid-template: repeat(auto-fit, minmax(200px, 1fr)) / repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
}

/* 4. 固定行高 */
.fixed-rows {
  display: grid;
  grid-template: 100px 200px 100px / 1fr 1fr;
}
```

## 浏览器兼容性

| 浏览器 | 版本 |
|--------|------|
| Chrome | 57+ |
| Edge | 16+ |
| Firefox | 52+ |
| Safari | 10.1+ |
| Opera | 44+ |

## 相关属性

- [`grid-template-rows`](grid-template-rows.md) - 模板行
- [`grid-template-columns`](grid-template-columns.md) - 模板列
- [`grid-template-areas`](grid-template-areas.md) - 模板区域
- [`grid`](grid.md) - 完整网格简写

## 规范

- [CSS Grid Layout Module Level 1](https://www.w3.org/TR/css-grid-1/)