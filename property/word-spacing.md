# word-spacing

该属性用于设置单词之间的间距。

## 语法

```css
word-spacing: normal;
word-spacing: 10px;
word-spacing: 0.5em;
```

| 语法特性 | 说明 |
| :--- | :--- |
| 初始值 | `normal` |
| 适用 HTML 元素 | 所有元素 |
| 动画 | 是 |

## 值

### `normal`
默认值。使用正常的单词间距。

### `<length>`
指定单词之间的额外间距，可以是正数或负数。

## 注意
- 继承属性
- 只影响空白字符（空格、制表符等）
- 对中文等无空格分隔的语言无影响
- 与 `letter-spacing` 配合使用可精细控制文本间距

## 示例
```css
.wide-spacing {
  word-spacing: 10px;
}

.narrow-spacing {
  word-spacing: -5px;
}

.normal-spacing {
  word-spacing: normal;
}
```

```html
<p class="wide-spacing">
  单词之间有较大间距的文本
</p>

<p class="narrow-spacing">
  单词之间有较小间距的文本
</p>
```

## 使用场景
```css
/* 1. 增加可读性 */
.readable-text {
  word-spacing: 0.2em;
}

/* 2. 紧凑排版 */
.compact-text {
  word-spacing: -2px;
}

/* 3. 标题强调 */
.emphasized-title {
  word-spacing: 0.5em;
  letter-spacing: 2px;
}

/* 4. 正常间距 */
.normal-text {
  word-spacing: normal;
}
