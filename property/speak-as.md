# speak-as

`speak-as` 属性定义元素内容如何通过语音合成器朗读的格式。

## 语法

```css
speak-as: auto | bullet | numeral | digits | spell-out
```

| 语法特性 | 说明 |
| :--- | :--- |
| 初始值 | `auto` |
| 适用 HTML 元素 | 所有元素 |
| 动画 | 否 |

## 值

| 值 | 说明 |
| :--- | :--- |
| `auto` | 根据内容自动判断 |
| `bullet` | 朗读项目符号 |
| `numeral` | 按数字朗读 |
| `digits` | 逐位朗读数字 |
| `spell-out` | 逐字母朗读 |

## 注意

- 仅适用于语音合成（屏幕阅读器）
- 与 `speak` 属性配合使用
- 现代 Web 开发中较少使用

## 示例

```css
/* 逐字母朗读 */
.code {
  speak-as: spell-out;
}

/* 按数字朗读 */
.number {
  speak-as: numeral;
}
```

## 使用场景

```css
/* 序列号逐位朗读 */
.serial-number {
  speak-as: digits;
}

/* 列表项朗读符号 */
li {
  speak-as: bullet;
}
```

## 浏览器兼容性

| 浏览器 | 版本 |
|--------|------|
| Chrome | 不支持 |
| Firefox | 不支持 |
| Safari | 不支持 |
| Edge | 不支持 |

## 相关属性

- [`speak`](speak.md) - 语音
- [`voice-balance`](voice-balance.md) - 语音平衡
- [`voice-duration`](voice-duration.md) - 语音持续时间

## 规范

- [CSS Speech Module](https://www.w3.org/TR/css-speech-1/#speak-as-property)