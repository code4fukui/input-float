# input-float
  
https://code4fukui.github.io/input-float/

## usage

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
