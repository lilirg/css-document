# grid-template-areas

`grid-template-areas` 属性用于定义网格区域，通过可视化方式设置网格布局。

## 语法

```css
grid-template-areas: none | <string>
```

| 语法特性 | 说明 |
| :--- | :--- |
| 初始值 | `none` |
| 适用 HTML 元素 | 网格容器 |
| 动画 | 否 |

## 值

| 值 | 说明 |
| :--- | :--- |
| `none` | 不定义区域 |
| `<string>` | 每行一个字符串，用空格分隔区域名称 |

### 区域名称规则

- 使用字母、数字、连字符
- 不能以数字开头
- 使用 `.` 表示空单元格
- 每个区域必须有唯一的名称

## 注意

- 每行的区域数量必须相同
- 区域必须形成矩形
- 与 `grid-template-rows` 和 `grid-template-columns` 配合使用

## 示例

```css
/* 简单区域定义 */
.grid-container {
  display: grid;
  grid-template-areas:
    "header header"
    "sidebar main"
    "footer footer";
  grid-template-columns: 200px 1fr;
  grid-template-rows: auto 1fr auto;
}

.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main { grid-area: main; }
.footer { grid-area: footer; }
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
/* 1. 经典布局 */
.layout {
  display: grid;
  grid-template-areas:
    "header header header"
    "nav main sidebar"
    "footer footer footer";
  grid-template-columns: 200px 1fr 200px;
  grid-template-rows: 80px 1fr 60px;
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

/* 3. 带空格的布局 */
.spaced-layout {
  display: grid;
  grid-template-areas:
    ". header ."
    "sidebar main sidebar"
    ". footer .";
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: auto 1fr auto;
}

/* 4. 响应式区域 */
@media (max-width: 768px) {
  .layout {
    grid-template-areas:
      "header"
      "nav"
      "main"
      "sidebar"
      "footer";
    grid-template-columns: 1fr;
  }
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

- [`grid-template`](grid-template.md) - 模板简写
- [`grid-template-rows`](grid-template-rows.md) - 模板行
- [`grid-template-columns`](grid-template-columns.md) - 模板列
- [`grid-area`](grid-area.md) - 区域

## 规范

- [CSS Grid Layout Module Level 1](https://www.w3.org/TR/css-grid-1/)