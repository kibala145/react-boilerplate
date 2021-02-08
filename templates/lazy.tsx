import React, { lazy, Suspense, ComponentProps } from 'react'

const LazyTemplateName = lazy(() => import('./TemplateName'))

const TemplateName = (
  props: JSX.IntrinsicAttributes & { children?: React.ReactNode } & ComponentProps<typeof LazyTemplateName>
) => (
  <Suspense fallback={null}>
    <LazyTemplateName {...props} />
  </Suspense>
)

export default TemplateName
