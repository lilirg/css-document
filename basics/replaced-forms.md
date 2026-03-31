# CSS 替换元素和表单

替换元素（Replaced Elements）和表单元素是 CSS 中特殊的元素类型，它们具有独特的渲染方式和样式行为。

## 替换元素

### 什么是替换元素

替换元素是指其内容不由 CSS 直接控制，而是由外部资源或用户代理控制的元素。这些元素的内容被"替换"为一个外部资源。

### 常见的替换元素

| 元素 | 说明 |
| :--- | :--- |
| `<img>` | 图像元素 |
| `<video>` | 视频元素 |
| `<audio>` | 音频元素 |
| `<iframe>` | 内联框架 |
| `<object>` | 嵌入对象 |
| `<embed>` | 嵌入插件 |
| `<canvas>` | 画布元素 |
| `<input>` | 表单输入元素 |
| `<button>` | 按钮元素 |
| `<textarea>` | 文本域元素 |
| `<select>` | 下拉选择元素 |

### 替换元素的特性

1. **内容不可直接样式化**：替换元素的内容由外部资源决定
2. **固有尺寸**：许多替换元素有固有的宽度和高度
3. **盒模型行为**：替换元素遵循盒模型，但行为可能不同

### 替换元素示例

```html
<!-- 图像替换元素 -->
<img src="image.jpg" alt="示例图像" width="300" height="200">

<!-- 视频替换元素 -->
<video src="video.mp4" width="640" height="360" controls></video>

<!-- iframe 替换元素 -->
<iframe src="https://example.com" width="500" height="300"></iframe>
```

```css
/* 替换元素的样式 */
img {
  max-width: 100%;
  height: auto;
  display: block;
}

video {
  width: 100%;
  aspect-ratio: 16 / 9;
}

iframe {
  border: none;
  width: 100%;
  height: 500px;
}
```

### 替换元素的尺寸控制

```css
/* 保持宽高比 */
img {
  width: 100%;
  height: auto;
}

/* 使用 aspect-ratio */
.box {
  aspect-ratio: 16 / 9;
  width: 100%;
}

/* 使用 padding 技巧 */
.square {
  width: 100%;
  padding-top: 100%; /* 1:1 比例 */
}
```

## 表单元素

### 表单元素概述

表单元素用于收集用户输入，包括文本输入、选择框、按钮等。

### 常见表单元素

| 元素 | 说明 |
| :--- | :--- |
| `<input>` | 输入框（多种类型） |
| `<textarea>` | 多行文本输入 |
| `<select>` | 下拉选择框 |
| `<option>` | 下拉选项 |
| `<button>` | 按钮 |
| `<label>` | 标签 |
| `<fieldset>` | 字段集 |
| `<legend>` | 字段集标题 |

### 输入框类型

```html
<!-- 文本输入 -->
<input type="text" placeholder="请输入文本">

<!-- 密码输入 -->
<input type="password" placeholder="请输入密码">

<!-- 邮箱输入 -->
<input type="email" placeholder="请输入邮箱">

<!-- 数字输入 -->
<input type="number" min="0" max="100" value="50">

<!-- 日期输入 -->
<input type="date">

<!-- 范围滑块 -->
<input type="range" min="0" max="100" value="50">

<!-- 复选框 -->
<input type="checkbox" id="agree">
<label for="agree">同意</label>

<!-- 单选按钮 -->
<input type="radio" name="option" id="opt1">
<label for="opt1">选项 1</label>
```

### 表单元素样式

#### 基础样式

```css
/* 输入框基础样式 */
input[type="text"],
input[type="email"],
input[type="password"],
textarea {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  width: 100%;
  box-sizing: border-box;
}

/* 聚焦状态 */
input:focus,
textarea:focus {
  outline: none;
  border-color: #007bff;
  box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.25);
}

/* 禁用状态 */
input:disabled,
textarea:disabled {
  background-color: #e9ecef;
  cursor: not-allowed;
}

/* 无效状态 */
input:invalid {
  border-color: #dc3545;
}

/* 有效状态 */
input:valid {
  border-color: #28a745;
}
```

#### 按钮样式

```css
/* 基础按钮 */
button {
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  background-color: #007bff;
  color: white;
  transition: background-color 0.3s;
}

/* 悬停状态 */
button:hover {
  background-color: #0056b3;
}

/* 聚焦状态 */
button:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.5);
}

/* 禁用状态 */
button:disabled {
  background-color: #6c757d;
  cursor: not-allowed;
}

/* 不同样式的按钮 */
.btn-primary {
  background-color: #007bff;
}

.btn-success {
  background-color: #28a745;
}

.btn-danger {
  background-color: #dc3545;
}

.btn-outline {
  background-color: transparent;
  border: 2px solid #007bff;
  color: #007bff;
}
```

#### 复选框和单选按钮样式

```css
/* 隐藏原生复选框 */
.checkbox-input,
.radio-input {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}

/* 自定义复选框 */
.checkbox-label {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  padding-left: 30px;
  position: relative;
}

.checkbox-label::before {
  content: "";
  position: absolute;
  left: 0;
  width: 20px;
  height: 20px;
  border: 2px solid #ccc;
  border-radius: 4px;
  background-color: white;
  transition: all 0.3s;
}

.checkbox-input:checked + .checkbox-label::before {
  background-color: #007bff;
  border-color: #007bff;
}

.checkbox-input:checked + .checkbox-label::after {
  content: "✓";
  position: absolute;
  left: 4px;
  top: 0px;
  color: white;
  font-size: 14px;
}

/* 自定义单选按钮 */
.radio-label {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  padding-left: 30px;
  position: relative;
}

.radio-label::before {
  content: "";
  position: absolute;
  left: 0;
  width: 20px;
  height: 20px;
  border: 2px solid #ccc;
  border-radius: 50%;
  background-color: white;
  transition: all 0.3s;
}

.radio-input:checked + .radio-label::before {
  background-color: #007bff;
  border-color: #007bff;
}

.radio-input:checked + .radio-label::after {
  content: "";
  position: absolute;
  left: 5px;
  top: 5px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: white;
}
```

#### 下拉选择框样式

```css
/* 基础下拉框 */
select {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  background-color: white;
  appearance: none; /* 移除默认样式 */
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23333' d='M6 8L1 3h10z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 10px center;
  padding-right: 30px;
}

/* 聚焦状态 */
select:focus {
  outline: none;
  border-color: #007bff;
  box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.25);
}
```

#### 范围滑块样式

```css
/* 范围滑块 */
input[type="range"] {
  -webkit-appearance: none;
  width: 100%;
  height: 8px;
  border-radius: 4px;
  background: #e0e0e0;
  outline: none;
}

/* 滑块轨道 */
input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #007bff;
  cursor: pointer;
  transition: background 0.3s;
}

input[type="range"]::-webkit-slider-thumb:hover {
  background: #0056b3;
}

/* Firefox 样式 */
input[type="range"]::-moz-range-thumb {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #007bff;
  cursor: pointer;
  border: none;
}
```

### 表单布局

```css
/* 表单容器 */
.form-group {
  margin-bottom: 20px;
}

.form-label {
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
  color: #333;
}

.form-input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
}

.form-help {
  font-size: 14px;
  color: #666;
  margin-top: 4px;
}

.form-error {
  font-size: 14px;
  color: #dc3545;
  margin-top: 4px;
}

/* 行内表单 */
.form-inline {
  display: flex;
  gap: 16px;
  align-items: flex-end;
}

.form-inline .form-group {
  margin-bottom: 0;
}

/* 响应式表单 */
@media (max-width: 768px) {
  .form-inline {
    flex-direction: column;
    align-items: stretch;
  }
}
```

### 表单验证样式

```css
/* 必填字段标记 */
input:required::placeholder {
  color: #999;
}

input:required:valid {
  border-color: #28a745;
}

input:required:invalid {
  border-color: #dc3545;
}

/* 验证图标 */
.form-input-wrapper {
  position: relative;
}

.form-input-wrapper::after {
  content: "";
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
  background-repeat: no-repeat;
  background-position: center;
}

.form-input-wrapper.valid::after {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20'%3E%3Cpath fill='%2328a745' d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'/%3E%3C/svg%3E");
}

.form-input-wrapper.invalid::after {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20'%3E%3Cpath fill='%23dc3545' d='M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z'/%3E%3C/svg%3E");
}
```

## 最佳实践

1. **使用语义化标签**：正确使用 `<label>`、`<fieldset>` 等标签
2. **保持可访问性**：确保表单元素可以通过键盘访问
3. **提供清晰的反馈**：使用验证状态和错误消息
4. **响应式设计**：确保表单在不同设备上都能正常使用
5. **避免过度自定义**：保持原生表单元素的可访问性

## 相关链接

- [MDN: 替换元素](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Replaced_element)
- [MDN: 表单选择器](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Forms)
- [W3C HTML Forms](https://www.w3.org/TR/html52/sec-forms.html)