/// <reference types="@rsbuild/core/types" />

/**
 * Imports the SVG file as a React component.
 * @requires [@rsbuild/plugin-svgr](https://npmjs.com/package/@rsbuild/plugin-svgr)
 */
declare module '*.svg?react' {
  import type React from 'react';
  const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  export default ReactComponent;
}

declare module 'cowork_chat/App' {
  import type { ComponentType } from 'react';
  const App: ComponentType<{ basepath?: string }>;
  export default App;
}

declare module 'cowork_profile/App' {
  import type { ComponentType } from 'react';
  const App: ComponentType<{ basepath?: string }>;
  export default App;
}

declare module 'cowork_issue/App' {
  import type { ComponentType } from 'react';
  const App: ComponentType<{ basepath?: string }>;
  export default App;
}
