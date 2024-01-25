# appearance

该属性控制控件的呈现方式。设置`appearance: none`会抑制本地浏览器默认的样式，因此可以使用 CSS 来完全重新设置它们的样式。

这个属性在实践中可能需要添加浏览器前缀，例如 `-webkit-appearance: none;`或者 `-moz-appearance: none;`。因为这个属性在CSS3中才引入，所以浏览器可能还不支持。

通常我们使用`appearance: none`来隐藏原生控件的默认样式，然后使用 CSS 来重新定义它们的样式。例如，我们可以设置`appearance: none;`来隐藏默认的按钮样式，然后使用 CSS 来自定义按钮的外观和行为。

这个属性的仍然在开发阶段，可能在未来会有所变化。

## 语法

```
appearance: none | auto;
```

## 属性值

- `none`：抑制本地浏览器默认的样式。
- `auto`：使用本地浏览器默认的样式。
- Webkit专属：checkbox | radio | push-button | square-button | button | button-bevel | listbox | listitem | menulist | menulist-button | menulist-text | menulist-textfield | scrollbarbutton-up | scrollbarbutton-down | scrollbarbutton-left | scrollbarbutton-right | scrollbartrack-horizontal | scrollbartrack-vertical | scrollbarthumb-horizontal | scrollbarthumb-vertical | scrollbargripper-horizontal | scrollbargripper-vertical | slider-horizontal | slider-vertical | sliderthumb-horizontal | sliderthumb-vertical | caret | searchfield | searchfield-decoration | searchfield-results-decoration | searchfield-results-button | searchfield-cancel-button | textfield | textarea
- Firefox专属：none | button | checkbox | checkbox-container | checkbox-small | dialog | listbox | menuitem | menulist | menulist-button | menulist-textfield | menupopup | progressbar | radio | radio-container | radio-small | resizer | scrollbar | scrollbarbutton-down | scrollbarbutton-left | scrollbarbutton-right | scrollbarbutton-up | scrollbartrack-horizontal | scrollbartrack-vertical | separator | statusbar | tab | tab-left-edge Obsolete | tabpanels | textfield | textfield-multiline | toolbar | toolbarbutton | toolbox | -moz-mac-unified-toolbar | -moz-win-borderless-glass | -moz-win-browsertabbar-toolbox | -moz-win-communications-toolbox | -moz-win-glass | -moz-win-media-toolbox | tooltip | treeheadercell | treeheadersortarrow | treeitem | treetwisty | treetwistyopen | treeview | window

## 示例

```html
<button class="custom-button">Custom Button</button>
```

```css
.custom-button {
  appearance: none;
  background-color: #4CAF50;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
```

## 注意事项

- `appearance: none;` 仅仅是抑制本地浏览器默认的样式，并不会影响到其他样式，例如设置的字体、颜色、边框等。

