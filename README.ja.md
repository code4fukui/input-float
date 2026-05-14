# input-float

浮動小数点数のみを受け付ける入力フィールドのカスタム要素です。

## デモ
https://code4fukui.github.io/input-float/

## 機能
- **入力制限**: 浮動小数点数として有効な文字（`0-9`、`.`、`-`）のみを許可します。
- **文字の正規化**: 全角の数字、小数点、マイナス記号（`０-９`、`．`、`−`）を対応する半角文字に変換します。
- **無効文字の除去**: 入力値から無効な文字を自動的に削除します。
- **標準属性のサポート**: `maxlength` などの標準属性をサポートします。

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
MIT License — 詳細は[LICENSE](LICENSE)を参照してください。
