import AlertBanner from 'components/AlertBanner'
import { Gradient } from "./gradient/Gradient";
import { useEffect } from 'react'
import Header from './BlogHeader';

export default function BlogLayout({
  preview,
  loading,
  children,
}: {
  preview: boolean
  loading?: boolean
  children: React.ReactNode
}) {
  useEffect(() => {
    const initGradient = () => {
      const gradient = new Gradient();
      //@ts-ignore
      gradient.initGradient('#gradient-canvas');
    };
    initGradient();
  })
  return (
    <>
      <Header />
      <div className="min-h-screen">
        <div className='-z-10 w-full h-screen fixed top-0'>
          <canvas id="gradient-canvas" data-transition-in />
        </div>
        <AlertBanner preview={preview} loading={loading} />
        <main>{children}</main>
      </div>
    </>
  )
}
