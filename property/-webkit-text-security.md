# -webkit-text-security

该属性指定 WebKit 浏览器中文本的安全显示方式（用于隐藏敏感信息）。

## 语法

```css
-webkit-text-security: none | circle | disc | square
```

| 语法特性 | 说明 |
| :--- | :--- |
| 初始值 | `none` |
| 适用 HTML 元素 | 所有元素 |
| 动画 | 否 |

## 值

### `none`
正常显示文本（默认）。

### `circle`
用圆形符号替换字符。

### `disc`
用圆点符号替换字符。

### `square`
用方块符号替换字符。

## 注意
- 该属性是 WebKit 浏览器特有的属性
- 主要用于隐藏密码等敏感信息
- 类似于 HTML 的 `type="password"`，但可用于任何文本元素

## 示例

```css
/* 使用圆点隐藏文本 */
.secret {
  -webkit-text-security: disc;
}

/* 使用圆形隐藏文本 */
.secret {
  -webkit-text-security: circle;
}

/* 使用方块隐藏文本 */
.secret {
  -webkit-text-security: square;
}
```

## 使用场景

```css
/* 场景 1：密码显示切换 */
.password-view {
  -webkit-text-security: disc;
  font-size: 16px;
}

/* 场景 2：敏感信息隐藏 */
.credit-card {
  -webkit-text-security: square;
  font-size: 18px;
}

/* 场景 3：PIN 码显示 */
.pin-code {
  -webkit-text-security: circle;
  font-size: 24px;
  letter-spacing: 5px;
}

/* 场景 4：隐藏确认 */
.hidden-confirmation {
  -webkit-text-security: disc;
  color: #666;
}