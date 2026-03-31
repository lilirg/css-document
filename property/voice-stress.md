# voice-stress

`voice-stress` 属性用于设置语音合成中的重音级别。

## 语法

```css
voice-stress: strong | moderate | none | reduced
```

| 语法特性 | 说明 |
| :--- | :--- |
| 初始值 | `moderate` |
| 适用 HTML 元素 | 所有元素 |
| 动画 | 是（可动画） |

## 值

| 值 | 说明 |
| :--- | :--- |
| `strong` | 强重音 |
| `moderate` | 中等重音（默认） |
| `none` | 无重音 |
| `reduced` | 减弱重音 |

## 注意

- 此属性用于 CSS 语音模块（CSS Speech Module）
- 主要用于屏幕阅读器和语音合成场景
- 浏览器支持有限

## 示例

```css
/* 强重音 */
.element {
  voice-stress: strong;
}

/* 中等重音 */
.element {
  voice-stress: moderate;
}

/* 无重音 */
.element {
  voice-stress: none;
}

/* 减弱重音 */
.element {
  voice-stress: reduced;
}
```

```html
<!-- HTML 示例 -->
<div class="element">语音内容</div>
```

## 使用场景

```css
/* 1. 强调内容 */
.important {
  voice-stress: strong;
}

/* 2. 正常播报 */
.normal-speech {
  voice-stress: moderate;
}

/* 3. 平静语调 */
.calm-speech {
  voice-stress: reduced;
}

/* 4. 无强调 */
.neutral-speech {
  voice-stress: none;
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