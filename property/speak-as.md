# speak-as

`speak-as` 属性定义屏幕阅读器如何朗读文本内容，指定文本的朗读方式和格式。

## 语法

```css
speak-as: auto | spell | digits | literal-punctuation | no-punctuation | number;
```

### 值

| 值 | 说明 |
| --- | --- |
| `auto` | 根据上下文自动决定（默认） |
| `spell` | 逐字母拼读 |
| `digits` | 逐位朗读数字 |
| `literal-punctuation` | 朗读标点符号名称 |
| `no-punctuation` | 跳过标点符号 |
| `number` | 按数字方式朗读 |

## 示例

### 基本用法

```css
.spelled-text {
  speak-as: spell;
}

.number-text {
  speak-as: number;
}

.digits-text {
  speak-as: digits;
}
```

### 标点处理

```css
.literal-punctuation {
  speak-as: literal-punctuation;
}

.no-punctuation {
  speak-as: no-punctuation;
}
```

### HTML 示例

```html
<div class="spelled-text">ABC123</div>
<div class="number-text">123456</div>
<div class="digits-text">2024</div>
<div class="literal-punctuation">Hello, world!</div>
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
2. **屏幕阅读器**：控制屏幕阅读器的朗读方式
3. **配合 speak**：通常与 `speak` 属性配合使用
4. **浏览器支持**：浏览器支持有限且不一致
5. **替代方案**：现代开发中更推荐使用 ARIA 属性

## 相关属性

- [`speak`](speak.md) - 朗读
- [`aria-label`](aria-label.md) - ARIA 标签
- [`aria-describedby`](aria-describedby.md) - ARIA 描述

## 规范链接

- [CSS Speech Module](https://www.w3.org/TR/css-speech-1/#speak-as)