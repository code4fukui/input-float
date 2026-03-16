# input-float

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

A custom element for input fields that only accept floating-point numbers.

## Demo
https://code4fukui.github.io/input-float/

## Features
- Validates input to only allow valid floating-point numbers
- Normalizes input to remove invalid characters
- Supports both Arabic and Japanese numerals

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