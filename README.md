# How To Use It?

You should use NPM to install it:
```
npm i trs-contexts
```

Then you can use it:
```javascript
const config = {
    Silav: "Hello",
    Were: "Come"
} 

const tC = new TrsContexts(config);
tC.do("Silav");
```

And it returns a **string** containing the translation of the context you've specified.