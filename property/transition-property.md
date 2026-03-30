# transition-property

该属性指定应用过渡效果的 CSS 属性名称。

## 语法

```css
transition-property: property | none | all
```

| 语法特性 | 说明 |
| :--- | :--- |
| 初始值 | `all` |
| 适用 HTML 元素 | 所有元素 |
| 动画 | 否 |

## 值

### property
CSS 属性名称：
- 任何可过渡的 CSS 属性（如 `color`, `transform`, `opacity`）
- 可以指定多个属性，用逗号分隔

### none
不应用过渡到任何属性。

### all
过渡所有可过渡的属性（默认值）。

## 注意
- 只有可动画的 CSS 属性才能应用过渡
- 不可过渡的属性包括：`display`, `clip`, `animation` 等
- 使用 `all` 会过渡所有可过渡的属性，但可能影响性能
- 可以指定多个属性，每个属性可以有独立的过渡设置

## 示例

```css
/* 基本用法 - 只过渡背景颜色 */
.box {
  transition-property: background-color;
  transition-duration: 0.3s;
}

/* 过渡多个属性 */
.multi {
  transition-property: background-color, transform, opacity;
  transition-duration: 0.3s;
}

/* 过渡所有属性 */
.all {
  transition-property: all;
  transition-duration: 0.3s;
}

/* 不应用过渡 */
.none {
  transition-property: none;
}
```

```html
<!-- HTML 示例 -->
<div class="box">悬停我</div>
```

## 使用场景

```css
/* 1. 只过渡颜色变化 */
.link {
  transition-property: color;
  transition-duration: 0.2s;
}
.link:hover {
  color: #0066cc;
}

/* 2. 只过渡变换效果 */
.card {
  transition-property: transform;
  transition-duration: 0.3s;
}
.card:hover {
  transform: scale(1.05);
}

/* 3. 同时过渡多个属性 */
.button {
  transition-property: background-color, transform;
  transition-duration: 0.2s;
}
.button:hover {
  background-color: #0066cc;
  transform: translateY(-2px);
}

/* 4. 排除某些属性的过渡 */
.no-border {
  transition-property: background-color, color;
  /* 不过渡 border 属性 */
}

/* 5. 复杂的组合过渡 */
.modal {
  transition-property: opacity, transform, visibility;
  transition-duration: 0.3s;
}
.modal.open {
  opacity: 1;
  transform: scale(1);
  visibility: visible;
}
