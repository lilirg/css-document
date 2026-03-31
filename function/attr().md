# attr()

`attr()` 函数用于从被选元素中获取属性值，并将其用作 CSS 属性的值。

## 语法

```css
/* 基本语法 */
attr(attribute-name)

/* 带类型和默认值 */
attr(attribute-name type-or-unit, fallback-value)
```

| 语法特性 | 说明 |
| :--- | :--- |
| 默认值 | 无 |
| 适用HTML元素 | 所有元素 |
| 动画 | 不适用 |

## 属性值

- `attribute-name`：必需。要获取的属性名称（如 `content`、`data-*`、`title` 等）
- `type-or-unit`：可选。指定属性值的类型（如 `string`、`url`、`integer`、`number`、`length`、`angle`、`time`、`frequency`、`color`、`percentage`）
- `fallback-value`：可选。当属性不存在或无法解析时使用的默认值

## 示例

### 基本用法

```css
/* 从 data-tooltip 属性获取值 */
[data-tooltip]:hover::before {
  content: attr(data-tooltip);
  position: absolute;
  background: #333;
  color: #fff;
  padding: 4px 8px;
  border-radius: 4px;
}
```

```html
<button data-tooltip="点击提交">提交</button>
```

### 带类型和默认值

```css
/* 从 data-size 属性获取长度值，如果没有则使用 16px */
.resizable {
  font-size: attr(data-size length, 16px);
}
```

```html
<div class="resizable" data-size="20px">文本</div>
```

### 使用自定义属性

```css
/* 从 data-color 属性获取颜色值 */
.color-block {
  background-color: attr(data-color color, #000);
}
```

```html
<div class="color-block" data-color="red">红色块</div>
<div class="color-block" data-color="#00ff00">绿色块</div>
```

### 获取 title 属性

```css
/* 在伪元素中显示 title 属性 */
a::after {
  content: " (" attr(title) ")";
}
```

```html
<a href="https://example.com" title="访问示例网站">链接</a>
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 备注 |
| :--- | :--- | :--- |
| Chrome | 4+ | 完全支持 |
| Firefox | 1+ | 完全支持 |
| Safari | 1+ | 完全支持 |
| Edge | 12+ | 完全支持 |
| IE | 6+ | 完全支持 |

## 相关链接

- [MDN: attr()](https://developer.mozilla.org/zh-CN/docs/Web/CSS/attr)
- [W3C: CSS Values and Units Module Level 3 - attr()](https://www.w3.org/TR/css-values-3/#attr)
