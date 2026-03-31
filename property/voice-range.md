# voice-range

`voice-range` 属性用于设置语音合成中的音调范围。

## 语法

```css
voice-range: <percentage> | x-low | low | medium | high | x-high
```

| 语法特性 | 说明 |
| :--- | :--- |
| 初始值 | `medium` |
| 适用 HTML 元素 | 所有元素 |
| 动画 | 是（可动画） |

## 值

| 值 | 说明 |
| :--- | :--- |
| `<percentage>` | 相对于基准音调的百分比 |
| `x-low` | 极低音调范围 |
| `low` | 低音调范围 |
| `medium` | 中等音调范围（默认） |
| `high` | 高音调范围 |
| `x-high` | 极高音调范围 |

## 注意

- 此属性用于 CSS 语音模块（CSS Speech Module）
- 主要用于屏幕阅读器和语音合成场景
- 浏览器支持有限

## 示例

```css
/* 使用关键字 */
.element {
  voice-range: high;
}

/* 使用百分比 */
.element {
  voice-range: 150%;
}

/* 中等音调范围 */
.element {
  voice-range: medium;
}
```

```html
<!-- HTML 示例 -->
<div class="element">语音内容</div>
```

## 使用场景

```css
/* 1. 丰富音调变化 */
.expressive-speech {
  voice-range: high;
}

/* 2. 单调播报 */
.monotone-speech {
  voice-range: low;
}

/* 3. 正常范围 */
.normal-speech {
  voice-range: medium;
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
- [`voice-rate`](voice-rate.md) - 语音速率

## 规范

- [CSS Speech Module](https://drafts.csswg.org/css-speech-1/)