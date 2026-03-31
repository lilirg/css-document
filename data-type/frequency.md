# 频率（Frequency）

频率是 CSS 中用于表示声音频率的数据类型。

## 频率单位

### 1. 赫兹（Hz）

```css
/* 声音频率 */
@volume {
  volume: 440Hz;  /* A4 音符 */
}
```

### 2. 千赫兹（kHz）

```css
/* 声音频率 */
@volume {
  volume: 1kHz;   /* 1000Hz */
  volume: 2kHz;   /* 2000Hz */
}
```

## 频率转换

| 赫兹（Hz） | 千赫兹（kHz） |
| :--- | :--- |
| 1000Hz | 1kHz |
| 2000Hz | 2kHz |
| 440Hz | 0.44kHz |

## 频率应用

### 1. volume（已废弃）

```css
/* 已废弃，仅作参考 */
@volume {
  volume: 440Hz;
}
```

### 2. pitch（已废弃）

```css
/* 已废弃，仅作参考 */
@pitch {
  pitch: 440Hz;
}
```

## 频率示例

```css
/* 频率示例（已废弃） */
/* 仅作参考 */
```

## 最佳实践

1. **了解已废弃** - 频率属性已废弃
2. **使用现代方法** - 使用 Web Audio API
3. **避免使用** - 不推荐使用

## 相关链接

- [MDN: 频率](https://developer.mozilla.org/zh-CN/docs/Web/CSS/frequency)
- [W3C: CSS Values and Units Module Level 3](https://www.w3.org/TR/css-values-3/)