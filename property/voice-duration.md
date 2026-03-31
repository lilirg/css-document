# voice-duration

`voice-duration` 属性用于设置语音合成中文本的播放持续时间。

## 语法

```css
voice-duration: <time> | auto
```

| 语法特性 | 说明 |
| :--- | :--- |
| 初始值 | `auto` |
| 适用 HTML 元素 | 所有元素 |
| 动画 | 是（可动画） |

## 值

| 值 | 说明 |
| :--- | :--- |
| `<time>` | 持续时间（如 `2s`、`500ms`） |
| `auto` | 根据内容自动计算 |

## 注意

- 此属性用于 CSS 语音模块（CSS Speech Module）
- 主要用于屏幕阅读器和语音合成场景
- 浏览器支持有限

## 示例

```css
/* 设置播放时长 */
.element {
  voice-duration: 2s;
}

/* 使用毫秒 */
.element {
  voice-duration: 500ms;
}

/* 自动计算 */
.element {
  voice-duration: auto;
}
```

```html
<!-- HTML 示例 -->
<div class="element">语音内容</div>
```

## 使用场景

```css
/* 1. 慢速播报 */
.slow-speech {
  voice-duration: 5s;
}

/* 2. 快速播报 */
.fast-speech {
  voice-duration: 1s;
}

/* 3. 精确控制 */
.precise-timing {
  voice-duration: 3.5s;
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