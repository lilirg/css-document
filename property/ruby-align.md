# ruby-align

`ruby-align` 属性用于控制 ruby 注释（注音）的对齐方式。

## 语法

```css
ruby-align: start | center | space-between | space-around
```

| 语法特性 | 说明 |
| :--- | :--- |
| 初始值 | `space-around` |
| 适用 HTML 元素 | ruby 元素 |
| 动画 | 否 |

## 值

| 值 | 说明 |
| :--- | :--- |
| `start` | 注释与基线文本左对齐 |
| `center` | 注释在基线文本上居中 |
| `space-between` | 注释均匀分布，两端对齐 |
| `space-around` | 注释均匀分布，两端留半格间距 |

## 注意

- 此属性用于 ruby 标注（如中文拼音、日文假名）
- 仅当 ruby 注释长度与基线文本长度不匹配时生效
- 需要配合 `<ruby>`、`<rt>`、`<rp>` 标签使用

## 示例

```css
/* 左对齐 */
ruby {
  ruby-align: start;
}

/* 居中对齐 */
ruby {
  ruby-align: center;
}

/* 两端对齐 */
ruby {
  ruby-align: space-between;
}

/* 均匀分布 */
ruby {
  ruby-align: space-around;
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
/* 1. 中文拼音标注 */
.pinyin {
  ruby-align: space-around;
}

/* 2. 日文假名标注 */
.kanji {
  ruby-align: center;
}

/* 3. 多字符对齐 */
.multi-char {
  ruby-align: space-between;
}

/* 4. 教育材料 */
.education {
  ruby-align: start;
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

- [`ruby-position`](ruby-position.md) - ruby 注释位置
- [`ruby-merge`](ruby-merge.md) - ruby 合并方式

## 规范

- [CSS Ruby Layout Module Level 1](https://drafts.csswg.org/css-ruby-1/)