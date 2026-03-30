# animation-name

该属性指定要播放的 `@keyframes` 动画的名称。

## 语法

```css
animation-name: <keyframes-name> | none
```

| 语法特性     | 说明           |
| :----------- | :------------- |
| 初始值       | `none`         |
| 适用 HTML 元素 | 所有元素       |
| 动画         | 是             |

## 值

### `<keyframes-name>`

定义 `@keyframes` 规则的名称。

- 可以是自定义的名称（如 `slide`、`fade`、`bounce`）
- 名称不能以数字开头
- 名称区分大小写

### `none`

没有 `@keyframes` 规则。如果动画有其他属性（如 `animation-duration`），它们将不会影响元素。

## 注意

- 如果指定了多个动画，每个动画的名称用逗号分隔
- 必须与 `@keyframes` 规则配合使用
- 如果指定的名称不存在，该动画将被忽略

## 示例

```css
/* 定义关键帧 */
@keyframes slide {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(100px);
  }
}

@keyframes fade {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* 使用动画名称 */
.el {
  animation-name: slide;
  animation-duration: 2s;
}

.el2 {
  animation-name: fade;
  animation-duration: 1s;
}

/* 多个动画 */
.el3 {
  animation-name: slide, fade;
  animation-duration: 2s, 1s;
}

/* 无动画 */
.el4 {
  animation-name: none;
}
```

```html
<div class="el">滑动动画</div>
<div class="el2">淡入动画</div>
<div class="el3">多个动画</div>
<div class="el4">无动画</div>
