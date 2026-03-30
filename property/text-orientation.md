# text-orientation

该属性用于设置文本的书写方向，主要用于垂直书写模式。

## 语法

```css
text-orientation: mixed;
text-orientation: upright;
text-orientation: sideways;
```

| 语法特性 | 说明 |
| :--- | :--- |
| 初始值 | `mixed` |
| 适用 HTML 元素 | 所有元素 |
| 动画 | 否 |

## 值

### `mixed`
默认值。根据字符类型自动选择方向：
- CJK 字符垂直排列
- 拉丁字母旋转 90 度

### `upright`
所有字符保持直立，不旋转。

### `sideways`
所有字符旋转 90 度。

## 注意
- 仅当 `writing-mode` 为 `vertical-rl` 或 `vertical-lr` 时生效
- 继承属性
- 主要用于东亚语言（中文、日文、韩文）的垂直排版

## 示例
```css
.vertical-mixed {
  writing-mode: vertical-rl;
  text-orientation: mixed;
}

.vertical-upright {
  writing-mode: vertical-rl;
  text-orientation: upright;
}
```

```html
<p class="vertical-mixed">
  垂直排版示例：中文和英文混合文本
</p>

<p class="vertical-upright">
  直立排版示例：所有字符保持直立
</p>
```

## 使用场景
```css
/* 1. 传统中文竖排 */
.chinese-vertical {
  writing-mode: vertical-rl;
  text-orientation: mixed;
}

/* 2. 日文竖排（保持字符直立） */
.japanese-upright {
  writing-mode: vertical-rl;
  text-orientation: upright;
}

/* 3. 诗歌竖排 */
.poetry {
  writing-mode: vertical-rl;
  text-orientation: upright;
  letter-spacing: 0.5em;
}

/* 4. 侧向排版 */
.sideways-text {
  writing-mode: vertical-lr;
  text-orientation: sideways;
}
