# speak

`speak` 属性定义元素内容是否以及如何通过语音合成器朗读。

## 语法

```css
speak: auto | none | normal
```

| 语法特性 | 说明 |
| :--- | :--- |
| 初始值 | `auto` |
| 适用 HTML 元素 | 所有元素 |
| 动画 | 否 |

## 值

| 值 | 说明 |
| :--- | :--- |
| `auto` | 根据元素类型决定是否朗读 |
| `none` | 不朗读元素内容 |
| `normal` | 正常朗读元素内容 |

## 注意

- 仅适用于语音合成（屏幕阅读器）
- 与 `speak-as` 属性配合使用
- 现代 Web 开发中较少使用

## 示例

```css
/* 隐藏元素不被朗读 */
.hidden {
  speak: none;
}

/* 正常朗读 */
.visible {
  speak: normal;
}
```

## 使用场景

```css
/* 装饰性元素不朗读 */
.decorative {
  speak: none;
}

/* 导航元素正常朗读 */
nav {
  speak: normal;
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

- [`speak-as`](speak-as.md) - 语音方式
- [`voice-balance`](voice-balance.md) - 语音平衡
- [`voice-duration`](voice-duration.md) - 语音持续时间

## 规范

- [CSS Speech Module](https://www.w3.org/TR/css-speech-1/#speak-property)