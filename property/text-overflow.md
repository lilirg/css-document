# text-overflow

该属性用于设置当文本溢出容器时如何显示。

## 语法

```css
text-overflow: clip;
text-overflow: ellipsis;
text-overflow: "...";
```

| 语法特性 | 说明 |
| :--- | :--- |
| 初始值 | `clip` |
| 适用 HTML 元素 | 块级容器元素 |
| 动画 | 是 |

## 值

### `clip`
默认值。裁剪溢出的文本，不显示任何指示。

### `ellipsis`
显示省略号（...）表示文本被裁剪。

### `"..."`
使用指定的字符串替换溢出的文本。

## 注意
- 需要配合 `overflow: hidden` 和 `white-space: nowrap` 使用
- 继承属性
- 仅对块级元素有效

## 示例
```css
.ellipsis {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.clip {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: clip;
}
```

```html
<p class="ellipsis">
  这是一个很长的文本，当它超出容器宽度时会显示省略号
</p>

<p class="clip">
  这是一个很长的文本，当它超出容器宽度时会被直接裁剪
</p>
```

## 使用场景
```css
/* 1. 单行文本省略 */
.single-line-ellipsis {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

/* 2. 自定义省略符号 */
.custom-ellipsis {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: "...";
}

/* 3. 多行文本省略（需要配合 -webkit-line-clamp） */
.multi-line-ellipsis {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* 4. 标题截断 */
.truncated-title {
  max-width: 200px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
