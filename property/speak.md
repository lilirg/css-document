# speak

`speak` 属性定义元素内容是否以及如何被屏幕阅读器朗读，控制语音合成行为。

## 语法

```css
speak: auto | none | normal;
```

### 值

| 值 | 说明 |
| --- | --- |
| `auto` | 根据元素类型自动决定（默认） |
| `none` | 不朗读此元素内容 |
| `normal` | 按正常方式朗读 |

## 示例

### 基本用法

```css
.sr-only {
  speak: normal;
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
}
```

### 隐藏内容

```css
.hidden-for-screenshots {
  speak: none;
  display: none;
}
```

### 正常朗读

```css
.visible-text {
  speak: normal;
}
```

### HTML 示例

```html
<div class="sr-only">此内容仅对屏幕阅读器可见</div>
<div class="visible-text">此内容正常显示和朗读</div>
<div class="hidden-for-screenshots">此内容对屏幕阅读器隐藏</div>
```

## 浏览器兼容性

| 浏览器 | 版本 |
| --- | --- |
| Chrome | 部分支持 |
| Firefox | 部分支持 |
| Safari | 部分支持 |
| Edge | 部分支持 |
| Opera | 部分支持 |
| iOS Safari | 部分支持 |
| Android Browser | 部分支持 |

## 注意事项

1. **辅助功能**：主要用于无障碍场景
2. **屏幕阅读器**：控制屏幕阅读器的朗读行为
3. **替代方案**：现代开发中更推荐使用 ARIA 属性
4. **浏览器支持**：浏览器支持有限且不一致
5. **配合使用**：常与 `position: absolute` 配合创建视觉隐藏但可访问的内容

## 相关属性

- [`aria-hidden`](aria-hidden.md) - ARIA 隐藏
- [`display`](display.md) - 显示
- [`visibility`](visibility.md) - 可见性

## 规范链接

- [CSS Speech Module](https://www.w3.org/TR/css-speech-1/#speak)