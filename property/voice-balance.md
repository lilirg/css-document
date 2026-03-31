# voice-balance

`voice-balance` 属性用于控制语音合成中声音的左右平衡。

## 语法

```css
voice-balance: left | center | right | <number>
```

| 语法特性 | 说明 |
| :--- | :--- |
| 初始值 | `center` |
| 适用 HTML 元素 | 所有元素 |
| 动画 | 是（可动画） |

## 值

| 值 | 说明 |
| :--- | :--- |
| `left` | 声音偏向左侧 |
| `center` | 声音居中 |
| `right` | 声音偏向右侧 |
| `<number>` | -100（最左）到 100（最右） |

## 注意

- 此属性用于 CSS 语音模块（CSS Speech Module）
- 主要用于屏幕阅读器和语音合成场景
- 浏览器支持有限

## 示例

```css
/* 声音居中 */
.element {
  voice-balance: center;
}

/* 声音偏左 */
.element {
  voice-balance: left;
}

/* 声音偏右 */
.element {
  voice-balance: right;
}

/* 数值控制 */
.element {
  voice-balance: -50;
}
```

```html
<!-- HTML 示例 -->
<div class="element">语音内容</div>
```

## 使用场景

```css
/* 1. 立体声效果 */
.stereo-effect {
  voice-balance: -30;
}

/* 2. 对话场景 */
.left-speaker {
  voice-balance: -50;
}

.right-speaker {
  voice-balance: 50;
}

/* 3. 居中播报 */
.center-announcement {
  voice-balance: center;
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

- [`voice-duration`](voice-duration.md) - 语音持续时间
- [`voice-pitch`](voice-pitch.md) - 语音音调
- [`voice-rate`](voice-rate.md) - 语音速率

## 规范

- [CSS Speech Module](https://drafts.csswg.org/css-speech-1/)