// Type definitions for react-voice-pulsator 1.0.0
// Project: https://github.com/ammoradi/react-pulsator
// Definitions by: TingYuLC <https://github.com/ammoradi>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.9.6

import { FC, ReactNode } from 'react'

interface IReactPulsatorProps {
  children?: ReactNode
  width?: string
  height?: string
  innerColor?: string
  outerColor?: string
  className?: string
}

declare const ReactPulsator: FC<IReactPulsatorProps>

export default ReactPulsator
