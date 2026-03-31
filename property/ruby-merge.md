# ruby-merge

`ruby-merge` 属性用于控制 ruby 注释的合并方式。

## 语法

```css
ruby-merge: separate | collapse | auto
```

| 语法特性 | 说明 |
| :--- | :--- |
| 初始值 | `separate` |
| 适用 HTML 元素 | ruby 元素 |
| 动画 | 否 |

## 值

| 值 | 说明 |
| :--- | :--- |
| `separate` | 每个基线字符有独立的注释 |
| `collapse` | 多个基线字符共享一个注释 |
| `auto` | 根据内容自动选择合并方式 |

## 注意

- 此属性用于 ruby 标注（如中文拼音、日文假名）
- 当多个基线字符共享一个注释时，注释会覆盖所有字符
- 浏览器支持有限

## 示例

```css
/* 独立注释 */
ruby {
  ruby-merge: separate;
}

/* 合并注释 */
ruby {
  ruby-merge: collapse;
}

/* 自动合并 */
ruby {
  ruby-merge: auto;
}
```

```html
<!-- HTML 示例 -->
<ruby>
  汉字 <rt>hànzì</rt>
</ruby>
```

## 使用场景

```css
/* 1. 单字注音 */
.single-char {
  ruby-merge: separate;
}

/* 2. 词语注音 */
.word-note {
  ruby-merge: collapse;
}

/* 3. 教育材料 */
.education {
  ruby-merge: separate;
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

- [`ruby-align`](ruby-align.md) - ruby 对齐方式
- [`ruby-position`](ruby-position.md) - ruby 注释位置

## 规范

- [CSS Ruby Layout Module Level 1](https://drafts.csswg.org/css-ruby-1/)