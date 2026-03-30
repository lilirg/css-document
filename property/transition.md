# transition

该属性是过渡的速记属性，用于设置四个过渡子属性。

## 语法

```css
transition: property duration timing-function delay
```

| 语法特性 | 说明 |
| :--- | :--- |
| 初始值 | 见各子属性 |
| 适用 HTML 元素 | 所有元素 |
| 动画 | 否 |

## 值

### transition-property
指定应用过渡的 CSS 属性名称：
- 属性名称（如 `color`, `transform`）
- `all`（所有可过渡的属性，默认值）
- `none`（不应用过渡）

### transition-duration
指定过渡效果持续的时间：
- 时间值（如 `1s`, `500ms`）
- 必须为正值

### transition-timing-function
指定过渡的速度曲线：
- `linear`（线性）
- `ease`（缓动，默认值）
- `ease-in`（渐入）
- `ease-out`（渐出）
- `ease-in-out`（渐入渐出）
- `cubic-bezier()`（自定义贝塞尔曲线）

### transition-delay
指定过渡效果开始前的延迟时间：
- 时间值（如 `0s`, `200ms`）
- 可以为负值

## 注意
- 可以指定多个过渡，用逗号分隔
- 每个过渡可以有不同的属性、时长、时间函数和延迟
- 如果时长为 0 或延迟为负，过渡立即执行
- 只有可动画的 CSS 属性才能应用过渡

## 示例

```css
/* 基本用法 */
.box {
  transition: background-color 0.3s ease;
}

/* 多个过渡 */
.multi {
  transition: 
    background-color 0.3s ease,
    transform 0.5s ease-out,
    opacity 0.2s linear;
}

/* 使用 all 过渡所有属性 */
.all {
  transition: all 0.5s ease;
}
```

```html
<!-- HTML 示例 -->
<div class="box">悬停我</div>
```

## 使用场景

```css
/* 1. 按钮悬停效果 */
.btn {
  transition: background-color 0.2s ease, color 0.2s ease;
}
.btn:hover {
  background-color: #0066cc;
  color: white;
}

/* 2. 卡片悬停放大效果 */
.card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

/* 3. 菜单展开/收起效果 */
.menu {
  transition: max-height 0.3s ease-out, opacity 0.3s ease;
}
.menu.open {
  max-height: 500px;
  opacity: 1;
}
.menu.closed {
  max-height: 0;
  opacity: 0;
}

/* 4. 输入框聚焦效果 */
.input {
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}
.input:focus {
  border-color: #0066cc;
  box-shadow: 0 0 0 2px rgba(0, 102, 204, 0.2);
}

/* 5. 淡入淡出效果 */
.fade {
  transition: opacity 0.3s ease;
}
.fade.hidden {
  opacity: 0;
}
