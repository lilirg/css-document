# voice-volume

`voice-volume` 属性用于设置语音合成中的音量。

## 语法

```css
voice-volume: <percentage> | silent | x-soft | soft | medium | loud | x-loud
```

| 语法特性 | 说明 |
| :--- | :--- |
| 初始值 | `medium` |
| 适用 HTML 元素 | 所有元素 |
| 动画 | 是（可动画） |

## 值

| 值 | 说明 |
| :--- | :--- |
| `<percentage>` | 相对于基准音量的百分比 |
| `silent` | 静音 |
| `x-soft` | 极轻声 |
| `soft` | 轻声 |
| `medium` | 中等音量（默认） |
| `loud` | 大声 |
| `x-loud` | 极大声音 |

## 注意

- 此属性用于 CSS 语音模块（CSS Speech Module）
- 主要用于屏幕阅读器和语音合成场景
- 浏览器支持有限

## 示例

```css
/* 使用关键字 */
.element {
  voice-volume: loud;
}

/* 使用百分比 */
.element {
  voice-volume: 150%;
}

/* 中等音量 */
.element {
  voice-volume: medium;
}
```

```html
<!-- HTML 示例 -->
<div class="element">语音内容</div>
```

## 使用场景

```css
/* 1. 大声播报 */
.loud-speech {
  voice-volume: loud;
}

/* 2. 轻声播报 */
.soft-speech {
  voice-volume: soft;
}

/* 3. 正常播报 */
.normal-speech {
  voice-volume: medium;
}

/* 4. 静音 */
.muted-speech {
  voice-volume: silent;
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