# ruby-position

`ruby-position` 属性用于控制 ruby 注释（注音）的位置。

## 语法

```css
ruby-position: over | under | inter-character
```

| 语法特性 | 说明 |
| :--- | :--- |
| 初始值 | `over` |
| 适用 HTML 元素 | ruby 元素 |
| 动画 | 否 |

## 值

| 值 | 说明 |
| :--- | :--- |
| `over` | 注释显示在基线文本上方 |
| `under` | 注释显示在基线文本下方 |
| `inter-character` | 注释显示在字符之间（垂直书写模式） |

## 注意

- 此属性用于 ruby 标注（如中文拼音、日文假名）
- `over` 是默认值，也是最常见的用法
- `inter-character` 主要用于垂直书写模式

## 示例

```css
/* 注释在上方 */
ruby {
  ruby-position: over;
}

/* 注释在下方 */
ruby {
  ruby-position: under;
}

/* 字符之间 */
ruby {
  ruby-position: inter-character;
}
```

```html
<!-- HTML 示例 -->
<ruby>
  汉 <rt>hàn</rt>
  字 <rt>zì</rt>
</ruby>
```

## 使用场景

```css
/* 1. 中文拼音 - 上方 */
.pinyin {
  ruby-position: over;
}

/* 2. 日文假名 - 上方 */
.kanji {
  ruby-position: over;
}

/* 3. 垂直书写 - 字符之间 */
.vertical-ruby {
  writing-mode: vertical-rl;
  ruby-position: inter-character;
}

/* 4. 底部注释 */
.bottom-note {
  ruby-position: under;
}
```

## 浏览器兼容性

| 浏览器 | 版本 | 前缀 |
|--------|------|------|
| Chrome | 不支持 | - |
| Edge | 不支持 | - |
| Firefox | 38+ | 无 |
| Safari | 不支持 | - |
| Opera | 不支持 | - |

## 相关属性

- [`ruby-align`](ruby-align.md) - ruby 对齐方式
- [`ruby-merge`](ruby-merge.md) - ruby 合并方式

## 规范

- [CSS Ruby Layout Module Level 1](https://drafts.csswg.org/css-ruby-1/)