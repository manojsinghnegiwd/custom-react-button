# custom-react-button
A beautiful and simple button component

### Installation
```sh
npm install --save custom-react-button
```
### Usage
```javascript
import Button from 'custom-react-button';
// then in your render function
render() {
    return(
        <div>
            <Button color="#9b59b6" full style={{fontSize: "13px"}}>
                Click Me
            </Button>
        </div>
    );
}
// And that's all for now
```

### Props
#### `style`
You can provide your own inline custom style to Button.
```javascript
<Button style={{fontSize: "13px"}}>
    Click Me
</Button>
```
#### `full`
If button will be a full button .. or a hollow button .. you have to try it out yourself.
```javascript
<Button full>
    Click Me
</Button>
```
#### `color`
Default color of the button ...
```javascript
<Button color="#9b59b6" full>
    Click Me
</Button>
```

It is a work in progress feel free to contribute to it.


### About Me

 * [My website](http://manojsinghnegi.com) (manojsinghnegi.com)
 * [Github](http://github.com/manojsinghnegiwd) (@manojsinghnegiwd)
 * [Twitter](http://twitter.com/manojnegiwd) (@manojnegiwd)