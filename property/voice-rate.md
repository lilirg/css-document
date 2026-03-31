# voice-rate

`voice-rate` 属性用于设置语音合成中的语速。

## 语法

```css
voice-rate: <percentage> | x-slow | slow | medium | fast | x-fast
```

| 语法特性 | 说明 |
| :--- | :--- |
| 初始值 | `medium` |
| 适用 HTML 元素 | 所有元素 |
| 动画 | 是（可动画） |

## 值

| 值 | 说明 |
| :--- | :--- |
| `<percentage>` | 相对于基准语速的百分比 |
| `x-slow` | 极慢语速 |
| `slow` | 慢语速 |
| `medium` | 中等语速（默认） |
| `fast` | 快语速 |
| `x-fast` | 极快语速 |

## 注意

- 此属性用于 CSS 语音模块（CSS Speech Module）
- 主要用于屏幕阅读器和语音合成场景
- 浏览器支持有限

## 示例

```css
/* 使用关键字 */
.element {
  voice-rate: fast;
}

/* 使用百分比 */
.element {
  voice-rate: 150%;
}

/* 中等语速 */
.element {
  voice-rate: medium;
}
```

```html
<!-- HTML 示例 -->
<div class="element">语音内容</div>
```

## 使用场景

```css
/* 1. 慢速播报 - 便于理解 */
.slow-speech {
  voice-rate: slow;
}

/* 2. 快速播报 - 节省时间 */
.fast-speech {
  voice-rate: fast;
}

/* 3. 正常播报 */
.normal-speech {
  voice-rate: medium;
}

/* 4. 极慢 - 语言学习 */
.learning-speech {
  voice-rate: x-slow;
}
```

## 浏览器兼容性

| 浏览器 | 版本 | 前缀 |
|--------|------|------|
| Chrome | 不支持 | - |
| Edge | 不支持 | - |
| Firefox | 不支持 | - |
| Safari | 不支持 | - |
| Opera | 不支持 | - |

## 相关属性

- [`voice-balance`](voice-balance.md) - 语音平衡
- [`voice-pitch`](voice-pitch.md) - 语音音调
- [`voice-duration`](voice-duration.md) - 语音持续时间

## 规范

- [CSS Speech Module](https://drafts.csswg.org/css-speech-1/)