# -webkit-touch-callout

该属性指定 WebKit 浏览器中长按元素时显示的调用菜单。

## 语法

```css
-webkit-touch-callout: default | none
```

| 语法特性 | 说明 |
| :--- | :--- |
| 初始值 | `default` |
| 适用 HTML 元素 | 所有元素 |
| 动画 | 否 |

## 值

### `default`

显示默认的调用菜单（默认）。

### `none`

禁用调用菜单，长按时不显示任何菜单。

## 注意

- 该属性是 WebKit 浏览器特有的属性（主要在 iOS Safari 上）
- 用于控制长按元素时的上下文菜单行为
- 常用于禁用图片保存、链接复制等功能

## 示例

```css
/* 禁用调用菜单 */
.element {
  -webkit-touch-callout: none;
}

/* 显示调用菜单（默认） */
.element {
  -webkit-touch-callout: default;
}
```

## 使用场景

```css
/* 场景 1：禁用图片保存 */
.no-save-image {
  -webkit-touch-callout: none;
  width: 200px;
  height: 200px;
}

/* 场景 2：禁用链接复制 */
.no-copy-link {
  -webkit-touch-callout: none;
  padding: 10px 20px;
  background: #007bff;
  color: white;
}

/* 场景 3：保护内容 */
.protected-content {
  -webkit-touch-callout: none;
  user-select: none;
  -webkit-user-select: none;
}

/* 场景 4：应用界面元素 */
.app-element {
  -webkit-touch-callout: none;
  padding: 15px;
  background: #f5f5f5;
}
