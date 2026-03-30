# transition-duration

该属性指定过渡效果完成所需的时间。

## 语法

```css
transition-duration: time
```

| 语法特性 | 说明 |
| :--- | :--- |
| 初始值 | `0s` |
| 适用 HTML 元素 | 所有元素 |
| 动画 | 否 |

## 值

### time
过渡持续时间：
- 时间值（如 `0s`, `200ms`, `1s`）
- 必须为正值（0 表示无过渡）
- 默认值为 `0s`

## 注意
- 值为 `0s` 时，过渡效果不执行
- 可以指定多个持续时间，用逗号分隔，对应多个过渡属性
- 持续时间从过渡开始时计算
- 较长的持续时间会使过渡更平滑但更慢

## 示例

```css
/* 基本用法 - 持续 0.3 秒 */
.box {
  transition-duration: 0.3s;
  transition-property: background-color;
}

/* 多个持续时间 */
.multi {
  transition-duration: 0.2s, 0.4s, 0.3s;
  transition-property: background-color, transform, opacity;
}

/* 使用毫秒 */
.fast {
  transition-duration: 150ms;
}
```

```html
<!-- HTML 示例 -->
<div class="box">悬停我</div>
```

## 使用场景

```css
/* 1. 快速按钮反馈 */
.btn {
  transition-duration: 0.1s;
  transition-property: background-color;
}
.btn:hover {
  background-color: #0066cc;
}

/* 2. 平滑的卡片悬停效果 */
.card {
  transition-duration: 0.3s;
  transition-property: transform, box-shadow;
}
.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

/* 3. 缓慢的淡入淡出 */
.fade {
  transition-duration: 0.5s;
  transition-property: opacity;
}
.fade.hidden {
  opacity: 0;
}

/* 4. 不同属性的不同持续时间 */
.complex {
  transition-duration: 0.2s, 0.4s;
  transition-property: color, transform;
}

/* 5. 模态框动画 */
.modal {
  transition-duration: 0.3s;
  transition-property: opacity, transform;
}
.modal.open {
  opacity: 1;
  transform: scale(1);
}
.modal.closed {
  opacity: 0;
  transform: scale(0.9);
}
