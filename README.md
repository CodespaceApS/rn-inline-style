# rn-inline-style

rn-inline-style is a react native style library to speed up the development.

## Installation

Install with npm
```bash
npm install rn-inline-style
```

Install with yarn
```bash
yarn add rn-inline-style
```


## Usage
Create a style.js file

#### style.js
```
import React from 'react'
import RN from 'react-native'
import initInline from 'rn-inline-style'
const inline = initInline({})

export const colors = {
  // add your style colors here if you want.
}

export const Text = ({ children, ...props }) => (
  <RN.Text {...(inline(props))} >
    {children}
  </RN.Text>
)

export const Touch = ({ children, ...props }) => (
  <RN.TouchableOpacity {...(inline(props))} >
    {children}
  </RN.TouchableOpacity>
)

export const View = ({ children, ...props }) => (
  <RN.View {...(inline(props))} >
    {children}
  </RN.View>
)
```
#### Example component
```
import React from 'react'
import { View, Text, Touch } from './style'

export default (onTouch = () => console.log('no touch handler')) => (
  <Touch onTouch={onTouch}>
    <View s="bg:green|w:100|h:50|centerCenter|shadow:1">
      <Text>Green button</Text>
    </View>
  </Touch>
)
```

# Two ways
## "s" prop
Its work by splitting a string by (|) and the args by (:).
ex: w:400|h:200  = { width: 400, height: 200 }
```
<View s="w:400|h:200" >
</View>
```
use template string to add variables.
```
<View s={`w:400|h:${height}`} >
</View>
```
## styling props
Works by adding the props to the component, not all props needs an arg, example the row prop.
```
<View w="200" row h="200">
</View>
```

# Extending
In your style.js file you can extend the style functions.

In the example we are adding the style prop green.
```
import initInline from 'rn-inline-style'

const inline = initInline({
  'green': _ => ['backgroundColor', 'green']
})
```
In the example we are adding a multi style prop dp(default padding).
```
import initInline from 'rn-inline-style'

const inline = initInline({
  'dp': _ => [
    ['paddingLeft', 10],
    ['paddingRight', 10]
  ]
})
```

## Contributing
Fell free to add a pull request to add more prestyle props.

[read all the style props here.](https://github.com/CodespaceApS/rn-inline-style/blob/master/styles.js)

## License
[MIT](https://choosealicense.com/licenses/mit/)