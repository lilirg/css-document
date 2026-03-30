# box-shadow

该属性向元素添加一个或多个阴影效果。

## 语法

```css
box-shadow: none | [<offset-x> <offset-y> <blur-radius> <spread-radius> <color> && inset]
```

| 语法特性     | 说明           |
| :----------- | :------------- |
| 初始值       | `none`         |
| 适用 HTML 元素 | 所有元素     |
| 动画         | 是             |

## 值

### `none`

不添加阴影。

### `<offset-x>`

水平偏移量，可以是正值或负值。

### `<offset-y>`

垂直偏移量，可以是正值或负值。

### `<blur-radius>`

模糊半径，值越大阴影越模糊。

### `<spread-radius>`

扩散半径，正值扩大阴影，负值缩小阴影。

### `<color>`

阴影颜色。

### `inset`

内阴影（默认是外阴影）。

## 注意

- 可以添加多个阴影，用逗号分隔
- 阴影不会触发滚动条
- 阴影会影响性能

## 示例

```css
/* 简单阴影 */
.simple-shadow {
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
}

/* 内阴影 */
.inset-shadow {
  box-shadow: inset 5px 5px 10px rgba(0, 0, 0, 0.3);
}

/* 多阴影 */
.multi-shadow {
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3), -5px -5px 10px rgba(255, 255, 255, 0.5);
}

/* 彩色阴影 */
.colored-shadow {
  box-shadow: 0 0 20px #007bff;
}
```

```html
<!-- 盒子阴影示例 -->
<div class="shadow-box">阴影盒子</div>
```

## 使用场景

```css
/* 卡片阴影 */
.card {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

/* 按钮阴影 */
.button {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

/* 模态框阴影 */
.modal {
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

/* 悬浮阴影 */
.hover-effect {
  transition: box-shadow 0.3s;
}

.hover-effect:hover {
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}
```
