'use client'

import { Suspense, lazy, CSSProperties } from 'react'
const Spline = lazy(() => import('@splinetool/react-spline'))

interface SplineSceneProps {
  scene: string
  className?: string
  style?: CSSProperties
}

export function SplineScene({ scene, className, style }: SplineSceneProps) {
  return (
    <div className={className} style={{ width: '100%', height: '100%', ...style }}>
      <Suspense 
        fallback={
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-8 h-8 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
          </div>
        }
      >
        <Spline
          scene={scene}
          style={{ width: '100%', height: '100%' }}
        />
      </Suspense>
    </div>
  )
}
