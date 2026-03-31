# 弹性格式化上下文（FFC）

弹性格式化上下文（Flex Formatting Context, FFC）是 Flexbox 布局的格式化上下文。

## FFC 概念

FFC 是由 `display: flex` 或 `display: inline-flex` 创建的布局环境。

### FFC 特性

1. **主轴和交叉轴** - 定义布局方向
2. **flex-item 排列** - 沿主轴排列
3. **对齐控制** - 支持对齐和分布
4. **弹性增长** - 支持 flex-grow

## 创建 FFC 的条件

```css
.flex {
  display: flex;  /* 或 inline-flex */
}
```

## FFC 属性

### 容器属性

#### flex-direction

```css
.flex {
  flex-direction: row;      /* 水平（默认） */
  flex-direction: row-reverse;  /* 水平反向 */
  flex-direction: column;   /* 垂直 */
  flex-direction: column-reverse;  /* 垂直反向 */
}
```

#### flex-wrap

```css
.flex {
  flex-wrap: nowrap;        /* 不换行（默认） */
  flex-wrap: wrap;          /* 换行 */
  flex-wrap: wrap-reverse;  /* 换行反向 */
}
```

#### flex-flow

```css
.flex {
  flex-flow: row wrap;      /* flex-direction + flex-wrap */
}
```

#### justify-content

```css
.flex {
  justify-content: flex-start;    /* 起始（默认） */
  justify-content: flex-end;      /* 结束 */
  justify-content: center;        /* 居中 */
  justify-content: space-between; /* 两端对齐 */
  justify-content: space-around;  /* 均匀分布 */
  justify-content: space-evenly;  /* 均匀分布（包括边缘） */
}
```

#### align-items

```css
.flex {
  align-items: stretch;   /* 拉伸（默认） */
  align-items: flex-start;  /* 起始 */
  align-items: flex-end;    /* 结束 */
  align-items: center;      /* 居中 */
  align-items: baseline;    /* 基线 */
}
```

#### align-content

```css
.flex {
  align-content: stretch;   /* 拉伸（默认） */
  align-content: flex-start;  /* 起始 */
  align-content: flex-end;    /* 结束 */
  align-content: center;      /* 居中 */
  align-content: space-between; /* 两端对齐 */
  align-content: space-around;  /* 均匀分布 */
}
```

### 项目属性

#### flex-grow

```css
.item {
  flex-grow: 0;  /* 不增长（默认） */
  flex-grow: 1;  /* 等比例增长 */
  flex-grow: 2;  /* 等比例增长（权重更高） */
}
```

#### flex-shrink

```css
.item {
  flex-shrink: 1;  /* 可收缩（默认） */
  flex-shrink: 0;  /* 不收缩 */
}
```

#### flex-basis

```css
.item {
  flex-basis: auto;  /* 自动（默认） */
  flex-basis: 200px; /* 固定尺寸 */
}
```

#### flex

```css
.item {
  flex: none;        /* flex-grow: 0; flex-shrink: 0; flex-basis: auto; */
  flex: auto;        /* flex-grow: 1; flex-shrink: 1; flex-basis: auto; */
  flex: 1;           /* flex-grow: 1; flex-shrink: 1; flex-basis: 0; */
  flex: 200px;       /* flex-grow: 0; flex-shrink: 1; flex-basis: 200px; */
}
```

#### align-self

```css
.item {
  align-self: auto;      /* 继承 align-items */
  align-self: flex-start;
  align-self: flex-end;
  align-self: center;
  align-self: baseline;
  align-self: stretch;
}
```

## FFC 示例

```html
<div class="container">
  <div class="item">Item 1</div>
  <div class="item">Item 2</div>
  <div class="item">Item 3</div>
</div>
```

```css
.container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  height: 200px;
  background: #f0f0f0;
}

.item {
  flex: 1;
  padding: 10px;
  background: #ddd;
}
```

## FFC 应用场景

### 1. 导航栏

```css
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
```

### 2. 卡片布局

```css
.cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
```

### 3. 居中布局

```css
.center {
  display: flex;
  justify-content: center;
  align-items: center;
}
```

## 最佳实践

1. **理解 FFC** - 正确使用 Flexbox
2. **使用 flex** - 简写属性
3. **避免过度嵌套** - 保持结构简单
4. **考虑响应式** - 使用相对单位

## 相关链接

- [MDN: Flexbox](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Flexible_Box_Layout)
- [W3C: CSS Flexbox](https://www.w3.org/TR/css-flexbox-1/)