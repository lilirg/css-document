# grid-area

`grid-area` 属性用于设置网格项目的区域，可以指定项目占据的行和列，或引用预定义的区域名称。

## 语法

```css
grid-area: <grid-template-areas> | <row-start> / <column-start> / <row-end> / <column-end>
```

| 语法特性 | 说明 |
| :--- | :--- |
| 初始值 | `none` |
| 适用 HTML 元素 | 网格项目 |
| 动画 | 是（可动画） |

## 值

### 区域名称

| 值 | 说明 |
| :--- | :--- |
| `<name>` | 引用 `grid-template-areas` 中定义的区域 |

### 网格线位置

| 组合 | 说明 |
| :--- | :--- |
| `row-start / column-start / row-end / column-end` | 完整四值语法 |
| `row-start / column-start / row-end` | 三值，列结束自动计算 |
| `row-start / column-start` | 两值，占据单个单元格 |

## 注意

- 区域名称必须与 `grid-template-areas` 中定义的一致
- 网格线可以使用数字或名称
- 负数从末尾开始计数

## 示例

```css
/* 使用区域名称 */
.container {
  display: grid;
  grid-template-areas: 
    "header header"
    "sidebar main"
    "footer footer";
}

.header {
  grid-area: header;
}

.sidebar {
  grid-area: sidebar;
}

.main {
  grid-area: main;
}

.footer {
  grid-area: footer;
}

/* 使用网格线 */
.item {
  grid-area: 1 / 1 / 3 / 3;
}
```

```html
<!-- HTML 示例 -->
<div class="container">
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
  grid-template-areas:
    "header header header"
    "nav main sidebar"
    "footer footer footer";
  grid-template-columns: 200px 1fr 200px;
  grid-template-rows: auto 1fr auto;
}

.header { grid-area: header; }
.nav { grid-area: nav; }
.main { grid-area: main; }
.sidebar { grid-area: sidebar; }
.footer { grid-area: footer; }

/* 2. 仪表盘布局 */
.dashboard {
  display: grid;
  grid-template-areas:
    "stats stats chart"
    "table table chart"
    "log log log";
  grid-template-columns: 1fr 1fr 300px;
  grid-template-rows: 150px 300px 200px;
}

.stats { grid-area: stats; }
.chart { grid-area: chart; }
.table { grid-area: table; }
.log { grid-area: log; }

/* 3. 跨越多行多列 */
.featured {
  grid-area: 1 / 1 / 3 / 3;
}

/* 4. 使用网格线名称 */
.named-grid {
  display: grid;
  grid-template-columns: [start] 1fr [middle] 1fr [end];
}

.item {
  grid-area: start / start / middle / end;
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

- [`grid-template-areas`](grid-template-areas.md) - 模板区域
- [`grid-column`](grid-column.md) - 列位置
- [`grid-row`](grid-row.md) - 行位置
- [`grid-template`](grid-template.md) - 模板简写

## 规范

- [CSS Grid Layout Module Level 1](https://www.w3.org/TR/css-grid-1/)