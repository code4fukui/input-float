# input-float

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

A custom element for input fields that only accept floating-point numbers.

## Demo
https://code4fukui.github.io/input-float/

## Features
- **Restricts input** to characters valid for floating-point numbers: `0-9`, `.`, and `-`.
- **Normalizes characters** by converting full-width (zenkaku) Japanese numerals, decimal points, and minus signs (`０-９`, `．`, `−`) to their half-width (hankaku) equivalents.
- **Strips invalid characters** from the input value automatically.
- **Supports standard attributes** like `maxlength`.

## Usage
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

## License
MIT License — see [LICENSE](LICENSE).