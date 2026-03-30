# text-shadow

该属性用于为文本添加阴影效果。

## 语法

```css
text-shadow: offset-x offset-y blur-radius color;
text-shadow: offset-x offset-y color;
text-shadow: offset-x offset-y;
```

| 语法特性 | 说明 |
| :--- | :--- |
| 初始值 | `none` |
| 适用 HTML 元素 | 所有元素 |
| 动画 | 是 |

## 值

### `offset-x`
水平偏移量，正值向右，负值向左。

### `offset-y`
垂直偏移量，正值向下，负值向上。

### `blur-radius`（可选）
模糊半径，值越大阴影越模糊。

### `color`（可选）
阴影颜色，不指定则使用浏览器默认颜色。

## 注意
- 可以设置多个阴影，用逗号分隔
- 阴影不会增加元素的大小
- 继承属性
- 性能影响：过多或过大的阴影可能影响性能

## 示例
```css
.simple-shadow {
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.no-blur {
  text-shadow: 1px 1px #000;
}

.multiple-shadows {
  text-shadow: 
    1px 1px 2px black,
    2px 2px 4px rgba(0, 0, 0, 0.5);
}
```

```html
<p class="simple-shadow">
  带有模糊阴影的文本
</p>

<p class="no-blur">
  带有清晰阴影的文本
</p>

<p class="multiple-shadows">
  带有多个阴影的文本
</p>
```

## 使用场景
```css
/* 1. 标题立体效果 */
.styled-title {
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

/* 2. 霓虹灯效果 */
.neon-text {
  text-shadow: 
    0 0 5px #fff,
    0 0 10px #fff,
    0 0 20px #ff00de,
    0 0 30px #ff00de;
}

/* 3. 文字描边效果 */
.outline-text {
  text-shadow: 
    -1px -1px 0 #000,
    1px -1px 0 #000,
    -1px 1px 0 #000,
    1px 1px 0 #000;
}

/* 4. 浅色背景上的深色阴影 */
.light-bg {
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
}
