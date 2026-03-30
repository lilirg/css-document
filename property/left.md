# left

该属性指定定位元素的左侧位置。

## 语法

```css
left: auto | <length> | <percentage>
```

| 语法特性 | 说明 |
| :--- | :--- |
| 初始值 | `auto` |
| 适用 HTML 元素 | 定位元素（position 不为 static） |
| 动画 | 是 |

## 值

### `auto`
默认值。使用元素正常流中的位置。

### `<length>`
相对于包含块的左侧偏移量。

### `<percentage>`
相对于包含块宽度的百分比。

## 注意

- 只对 `position: relative`、`absolute`、`fixed`、`sticky` 元素有效
- 与 `right` 同时设置时，行为取决于 `position` 值
- 常用于精确定位元素

## 示例

```css
/* CSS 示例 */
.relative-left {
  position: relative;
  left: 20px;
}

.absolute-left {
  position: absolute;
  left: 0;
}
```

```html
<!-- HTML 示例 -->
<div class="relative-left">向右偏移 20px</div>
<div class="absolute-left">定位到左侧</div>
```

## 使用场景

```css
/* 1. 相对定位偏移 */
.relative {
  position: relative;
  left: 10px;
}

/* 2. 绝对定位左侧 */
.absolute-left {
  position: absolute;
  left: 0;
}

/* 3. 固定定位左侧 */
.fixed-sidebar {
  position: fixed;
  left: 0;
  top: 0;
  width: 200px;
}

/* 4. 百分比定位 */
.percentage {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}

/* 5. 居中定位 */
.centered {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
