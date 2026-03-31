# :fullscreen

`:fullscreen` 伪类用于选择处于全屏模式的元素。

## 语法

```css
:fullscreen {
  /* CSS properties */
}
```

## 描述

`:fullscreen` 伪类匹配处于全屏模式的元素。当元素通过 Fullscreen API 进入全屏状态时，它进入 `:fullscreen` 状态。

## 示例

```css
/* 全屏的视频元素 */
video:fullscreen {
  width: 100%;
  height: 100%;
}

/* 全屏的 div */
div:fullscreen {
  background-color: black;
  border: none;
}

/* 全屏的自定义元素*/
.custom-element:fullscreen {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
}
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 备注 |
| :--- | :--- | :--- |
| Chrome | 完全支持 | |
| Firefox | 完全支持 | |
| Safari | 完全支持 | |
| Edge | 完全支持 | |
| IE | 不支持 | IE 不支持 Fullscreen API |

## 相关链接

- [MDN: :fullscreen](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:fullscreen)
- [CSS Selectors Level 4 - :fullscreen](https://www.w3.org/TR/css-selectors-4/#fullscreen)