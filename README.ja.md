# input-float

浮動小数点数の入力に特化したカスタム要素です。

## デモ
https://code4fukui.github.io/input-float/

## 機能
- 浮動小数点数のみ入力可能
- `maxlength`属性でサイズ制限可能

## 使い方

```html
<script type="module" src="https://code4fukui.github.io/input-float/input-float.js"></script>
<input-float id=inp maxlength=5></input-float>

<script type="module">
onload = () => {
  inp.onchange = () => {
    console.log(inp.value);
  };
};
</script>
```

## ライセンス
MIT License