# animation-play-state

该属性指定动画是运行还是暂停。

## 语法

```css
animation-play-state: running | paused
```

| 语法特性     | 说明           |
| :----------- | :------------- |
| 初始值       | `running`      |
| 适用 HTML 元素 | 所有元素       |
| 动画         | 是             |

## 值

### `running`

默认值。动画正在运行。

### `paused`

动画暂停。当动画恢复运行时，它会从暂停的位置继续播放。

## 注意

- 如果指定了多个动画，每个动画的播放状态用逗号分隔
- 可以通过 JavaScript 动态修改此属性来控制动画的播放和暂停
- 常用于鼠标悬停时暂停动画等交互场景

## 示例

```css
/* 动画运行（默认值） */
.el {
  animation-play-state: running;
}

/* 动画暂停 */
.el2 {
  animation-play-state: paused;
}

/* 鼠标悬停时暂停动画 */
.el3:hover {
  animation-play-state: paused;
}

/* 多个动画，不同的播放状态 */
.el4 {
  animation-name: slide, fade;
  animation-play-state: running, paused;
}
```

```html
<div class="el">运行中</div>
<div class="el2">已暂停</div>
<div class="el3">悬停暂停</div>
<div class="el4">多个动画</div>
```

## 与 JavaScript 配合使用

```javascript
// 暂停动画
element.style.animationPlayState = 'paused';

// 恢复动画
element.style.animationPlayState = 'running';
