# Copyer.JS
### Simple , Clipboard javascript library for copying things easily with ease.

## How To Use 

inlcude javascript file `copyer.js` from `dist` folder to your html.

```html
<script src="copyer.min.js"></script>
```

then use the `copyer` function as below,

```javascript
copyer("id-name");
```

you can use button or other methods to call the function,

```html
<p id="copy-me">Hello World</p>
<button onclick="copy-text()">Copy Above Text</button>
<script>
    function copy-text(){
        copyer("copy-me");
    }
</script>
```

## Build Yourself

execute these commands,

```sh
npm install or yarn
npm start or yarn run start
```

<hr>

Crafted with Love by [Palash Bauri](https://palash.tk) | Licensed Under MIT
