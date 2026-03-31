# frequency

`frequency` 数据类型表示频率值，主要用于 `@media` 查询中的 `audio` 媒体特性。

## 语法

```css
/* 赫兹 */
@media (audio: 440Hz) {
  /* CSS 规则 */
}

/* 千赫兹 */
@media (audio: 1kHz) {
  /* CSS 规则 */
}
```

| 语法特性 | 说明 |
| :--- | :--- |
| 默认值 | 无 |
| 适用HTML元素 | 所有元素 |
| 动画 | 不适用 |

## 单位

| 单位 | 描述 |
| :--- | :--- |
| `Hz` | 赫兹（每秒周期数） |
| `kHz` | 千赫兹（1kHz = 1000Hz） |

## 示例

### 媒体查询

```css
/* 低频音频 */
@media (audio: 20Hz) {
  .audio-element {
    /* 样式 */
  }
}

/* 高频音频 */
@media (audio: 20kHz) {
  .audio-element {
    /* 样式 */
  }
}
```

### 音频设备

```css
/* 440Hz（标准音高 A4） */
@media (audio: 440Hz) {
  .tuner {
    /* 样式 */
  }
}
```

## 浏览器兼容性

| 浏览器 | 支持版本 |
| :--- | :--- |
| Chrome | 6+ |
| Firefox | 6+ |
| Safari | 5+ |
| Edge | 12+ |
| IE | 9+ |

## 相关链接

- [MDN Web Docs: frequency](https://developer.mozilla.org/zh-CN/docs/Web/CSS/frequency)
- [CSS Values and Units Module Level 3](https://www.w3.org/TR/css-values-3/#frequency)
