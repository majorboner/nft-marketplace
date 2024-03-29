declare module '*.scss' {
  type IClassNames = Record<string, string>;
  const classNames: IClassNames;
  export = classNames;
}

declare module '*.svg' {
  import type * as React from 'react'

  const ReactComponent: React.FunctionComponent<
    React.ComponentProps<'svg'> & { title?: string }
  >
  export default ReactComponent
}


declare module '*.png' {
  const value: unknown;
  export = value;
}
