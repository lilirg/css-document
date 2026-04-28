# 替换元素和表单

替换元素是浏览器用外部内容替换元素内容的元素。

## 替换元素

### 常见的替换元素

- `<img>` - 图片
- `<video>` - 视频
- `<audio>` - 音频
- `<iframe>` - 内联框架
- `<input>` - 表单输入
- `<select>` - 下拉选择
- `<textarea>` - 文本区域

### 替换元素特性

- 有固有尺寸
- 可以设置宽高
- 不受内容影响

## 表单元素

### 输入元素

```html
<input type="text" />
<input type="password" />
<input type="email" />
<input type="number" />
<input type="date" />
<input type="checkbox" />
<input type="radio" />
```

### 选择元素

```html
<select>
  <option value="1">选项 1</option>
  <option value="2">选项 2</option>
</select>
```

### 文本区域

```html
<textarea></textarea>
```

### 按钮元素

```html
<button>按钮</button>
<input type="submit" value="提交" />
<input type="reset" value="重置" />
```

## 表单样式

```css
/* 输入框样式 */
input {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

/* 按钮样式 */
button {
  padding: 10px 20px;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background: #0056b3;
}
```

## 相关资源

- [MDN Web Docs: 替换元素](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Reference)
- [CSS-Tricks: Replaced Elements](https://css-tricks.com/almanac/properties/r/replaced/)