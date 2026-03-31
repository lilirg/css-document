# voice-pitch

`voice-pitch` 属性用于设置语音合成中的音调。

## 语法

```css
voice-pitch: <percentage> | x-low | low | medium | high | x-high
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
| `x-low` | 极低音调 |
| `low` | 低音调 |
| `medium` | 中等音调（默认） |
| `high` | 高音调 |
| `x-high` | 极高音调 |

## 注意

- 此属性用于 CSS 语音模块（CSS Speech Module）
- 主要用于屏幕阅读器和语音合成场景
- 浏览器支持有限

## 示例

```css
/* 使用关键字 */
.element {
  voice-pitch: high;
}

/* 使用百分比 */
.element {
  voice-pitch: 150%;
}

/* 中等音调 */
.element {
  voice-pitch: medium;
}
```

```html
<!-- HTML 示例 -->
<div class="element">语音内容</div>
```

## 使用场景

```css
/* 1. 儿童声音 */
.child-voice {
  voice-pitch: x-high;
}

/* 2. 成人男性声音 */
.male-voice {
  voice-pitch: low;
}

/* 3. 成人女性声音 */
.female-voice {
  voice-pitch: high;
}

/* 4. 正常播报 */
.normal-speech {
  voice-pitch: medium;
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
- [`voice-duration`](voice-duration.md) - 语音持续时间
- [`voice-rate`](voice-rate.md) - 语音速率

## 规范

- [CSS Speech Module](https://drafts.csswg.org/css-speech-1/)