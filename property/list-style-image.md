# list-style-image

该属性用于设置自定义图像作为列表项的标记符号。

## 语法

```css
list-style-image: url("bullet.png");
list-style-image: none;
```

| 语法特性 | 说明 |
| :--- | :--- |
| 初始值 | `none` |
| 适用 HTML 元素 | `ul`, `ol` |
| 动画 | 否 |

## 值

### `url()`
指定用作列表项标记的图像文件路径。

### `none`
不使用图像标记，使用 `list-style-type` 指定的标记类型。

## 注意
- 如果图像无法加载，浏览器会回退到 `list-style-type` 指定的标记
- 图像尺寸由浏览器自动调整
- 通常与 `list-style-position` 配合使用
- 继承属性，会影响所有子元素

## 示例
```css
ul {
  list-style-image: url("icons/bullet.png");
}
```

```html
<ul>
  <li>使用自定义图像的列表项</li>
  <li>第二项</li>
</ul>
```

## 使用场景
```css
/* 1. 自定义项目符号 */
.feature-list {
  list-style-image: url("icons/check.svg");
  list-style-position: inside;
}

/* 2. 回退方案 */
.custom-bullets {
  list-style-image: url("bullet.png");
  list-style-type: square;
}

/* 3. 禁用图像标记 */
.no-image {
  list-style-image: none;
  list-style-type: disc;
}

/* 4. 嵌套列表不同图像 */
ul ul {
  list-style-image: url("icons/sub-bullet.svg");
}
