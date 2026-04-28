# 响应式设计

响应式设计使网页能够在不同设备上正常显示。

## 响应式设计原则

### 流式布局

```css
/* 流式布局 */
.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}
```

### 弹性图片

```css
/* 弹性图片 */
img {
  max-width: 100%;
  height: auto;
}
```

### 媒体查询

```css
/* 媒体查询 */
@media (max-width: 768px) {
  .container {
    padding: 10px;
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  .container {
    padding: 20px;
  }
}

@media (min-width: 1025px) {
  .container {
    padding: 30px;
  }
}
```

## 常用断点

```css
/* 超小屏幕（手机） */
@media (max-width: 576px) { }

/* 小屏幕（平板） */
@media (min-width: 577px) and (max-width: 768px) { }

/* 中等屏幕（桌面） */
@media (min-width: 769px) and (max-width: 992px) { }

/* 大屏幕（大桌面） */
@media (min-width: 993px) and (max-width: 1200px) { }

/* 超大屏幕（超大桌面） */
@media (min-width: 1201px) { }
```

## 响应式图片

```css
/* 响应式图片 */
img {
  src: url(image.jpg);
  srcset: image-320.jpg 320w,
          image-480.jpg 480w,
          image-800.jpg 800w;
  sizes: (max-width: 320px) 280px,
         (max-width: 480px) 440px,
         800px;
}
```

## 响应式排版

```css
/* 响应式排版 */
html {
  font-size: 16px;
}

@media (max-width: 768px) {
  html {
    font-size: 14px;
  }
}

@media (min-width: 1200px) {
  html {
    font-size: 18px;
  }
}
```

## 相关资源

- [MDN Web Docs: 响应式设计](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Responsive_Designs)
- [CSS-Tricks: Responsive Design](https://css-tricks.com/snippets/css/media-queries-for-standard-devices/)