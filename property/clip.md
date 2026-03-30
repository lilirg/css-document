# clip

该属性定义绝对定位元素的可见区域。

## 语法

```css
clip: rect(<top>, <right>, <bottom>, <left>) | auto
```

| 语法特性 | 说明 |
| :--- | :--- |
| 初始值 | `auto` |
| 适用 HTML 元素 | 绝对定位元素 |
| 动画 | 是 |

## 值

### `auto`
默认值。元素不被裁剪。

### `rect(<top>, <right>, <bottom>, <left>)`
定义一个矩形裁剪区域。

| 参数 | 说明 |
| :--- | :--- |
| `<top>` | 矩形上边，相对于元素框的上边 |
| `<right>` | 矩形右边，相对于元素框的左边 |
| `<bottom>` | 矩形下边，相对于元素框的上边 |
| `<left>` | 矩形左边，相对于元素框的左边 |

**注意**：参数顺序固定为 `top, right, bottom, left`，不能用逗号分隔以外的方式。

## 注意

- `clip` 属性只适用于 `position: absolute` 或 `position: fixed` 的元素
- 已被 `clip-path` 属性取代，建议使用 `clip-path`
- 裁剪区域不能超出元素框，超出部分会被忽略

## 示例

```css
/* CSS 示例 */
.cropped {
  position: absolute;
  clip: rect(0px, 100px, 100px, 0px);
}
```

```html
<!-- HTML 示例 -->
<div class="cropped">
  这段文字只有一部分可见
</div>
```

## 使用场景

```css
/* 1. 显示元素左上角 100x100 区域 */
.crop-top-left {
  position: absolute;
  clip: rect(0px, 100px, 100px, 0px);
}

/* 2. 显示元素上半部分 */
.crop-top {
  position: absolute;
  clip: rect(0px, 200px, 100px, 0px);
}

/* 3. 隐藏元素（旧方法） */
.hidden {
  position: absolute;
  clip: rect(0px, 0px, 0px, 0px);
}

/* 4. 显示元素中间部分 */
.crop-middle {
  position: absolute;
  clip: rect(50px, 150px, 150px, 50px);
}
