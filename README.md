# react-pulsator
react customizable pulsator component

## demo
see **[Demo](https://codesandbox.io/s/react-pulsator-demo-dpysp)** at **[https://codesandbox.io/s/react-pulsator-demo-dpysp](https://codesandbox.io/s/react-pulsator-demo-dpysp)**

## usage
* add package using `yarn`:

```
yarn add react-pulsator
```

* use the render-props component:

```js
import React from 'react'

import Pulsator from 'react-pulsator'

export default function App() {
  return (
    <div>
      <Pulsator
        width="250px"
        height="250px"
        innerColor="green"
        outerColor="green"
      >
        <h1>Hello World</h1>
      </Pulsator>
    </div>
  )
}
```

* available props:

| prop key | type |
|  :---:  | :-: |
| width | string |
| height | string |
| innerColor | string |
| outerColor | string |
| className | string |
