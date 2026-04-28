# :fullscreen

:fullscreen 伪类匹配处于全屏模式的元素。

## 语法

```css
selector:fullscreen {
  property: value;
}
```

## 示例

```css
/* 匹配全屏元素 */
:fullscreen {
  width: 100vw;
  height: 100vh;
}

/* 匹配全屏视频 */
video:fullscreen {
  width: 100%;
  height: 100%;
}

/* 匹配全屏元素（特殊样式） */
div:fullscreen {
  background-color: #000;
}

/* 匹配全屏元素（边框） */
:fullscreen {
  border: none;
}
```

## 相关资源

- [MDN Web Docs: :fullscreen](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:fullscreen)
- [CSS-Tricks: :fullscreen](https://css-tricks.com/almanac/selectors/f/fullscreen/)