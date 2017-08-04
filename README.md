# lite-toast
A lightweight toast component for mobile frontend.

## Demo
[Demo](http://shenfe.github.io/repos/lite-toast/demo.html)

## Usage
```js
Toast('Hello!');
Toast('How are<br>you?', {
    cssText: 'border:1px solid #ccc;text-align:center;color:#000;background:rgba(255,255,255,0.5);',
    delay: 2000,
    callback: function () {
        alert('Fine!');
    }
});
```

## License
MIT
