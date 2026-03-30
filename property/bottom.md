# bottom

该属性用于定位元素的底部边缘。

## 语法

```css
bottom: <length> | <percentage> | auto
```

| 语法特性     | 说明           |
| :----------- | :------------- |
| 初始值       | `auto`         |
| 适用 HTML 元素 | 定位元素     |
| 动画         | 是             |

## 值

### `<length>`

使用长度值指定底部距离。可以是 `px`、`em`、`rem` 等单位。

### `<percentage>`

使用百分比值，相对于包含块的高度。

### `auto`

浏览器自动计算底部位置。

## 注意

- 仅对定位元素（`position: relative`、`absolute`、`fixed`、`sticky`）有效
- 与 `top`、`left`、`right` 配合使用
- `auto` 值表示元素在正常文档流中的位置

## 示例

```css
/* 固定位置 */
.fixed-bottom {
  position: fixed;
  bottom: 20px;
}

/* 相对定位 */
.relative-bottom {
  position: relative;
  bottom: 50px;
}

/* 绝对定位 */
.absolute-bottom {
  position: absolute;
  bottom: 0;
}

/* 自动计算 */
.auto-bottom {
  position: absolute;
  bottom: auto;
}
```

```html
<!-- 底部定位示例 -->
<div class="container">
  <div class="fixed-element">固定底部</div>
  <div class="relative-element">相对底部</div>
</div>
```

## 使用场景

```css
/* 固定底部导航 */
.fixed-footer {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 60px;
}

/* 悬浮按钮 */
.floating-button {
  position: fixed;
  bottom: 20px;
  right: 20px;
}

/* 模态框底部 */
.modal-footer {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
}
```
