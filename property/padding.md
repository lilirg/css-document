# padding

该属性设置元素的内边距（内容区域与边框之间的空间）。

## 语法

```css
padding: <length> | <percentage> | auto
```

| 语法特性 | 说明 |
| :--- | :--- |
| 初始值 | `0` |
| 适用 HTML 元素 | 所有元素 |
| 动画 | 是 |

## 值

### `<length>`
固定内边距值。

### `<percentage>`
相对于父元素宽度的百分比。

### `auto`
自动计算内边距（通常被忽略，视为 0）。

## 简写规则

| 值数量 | 说明 |
| :--- | :--- |
| 1 个值 | 所有方向相同 |
| 2 个值 | 上下 / 左右 |
| 3 个值 | 上 / 左右 / 下 |
| 4 个值 | 上 / 右 / 下 / 左（顺时针） |

## 注意

- 百分比值相对于父元素宽度计算
- 内边距会增加元素的总尺寸（除非使用 `box-sizing: border-box`）
- 不能设置负值

## 示例

```css
/* CSS 示例 */
.box {
  padding: 20px;
}
```

```html
<!-- HTML 示例 -->
<div class="box">
  内容周围有 20px 内边距
</div>
```

## 使用场景

```css
/* 1. 统一内边距 */
.uniform {
  padding: 15px;
}

/* 2. 卡片内边距 */
.card {
  padding: 20px;
}

/* 3. 按钮内边距 */
.button {
  padding: 10px 20px;
}

/* 4. 响应式内边距 */
.responsive {
  padding: 10px;
}
@media (min-width: 768px) {
  .responsive {
    padding: 30px;
  }
}

/* 5. 导航栏内边距 */
.navbar {
  padding: 15px 30px;
}
