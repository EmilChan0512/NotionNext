import FlipCard from '@/components/FlipCard'
import { siteConfig } from '@/lib/config'
import Link from 'next/link'
import CONFIG from '../config'

export default function AsukaCard() {
  if (!JSON.parse(siteConfig('HEO_SOCIAL_CARD', null, CONFIG))) {
    return <></>
  }
  return (
    <div className={'relative h-28 text-white flex flex-col'}>
      <FlipCard
        className='cursor-pointer lg:p-6 p-4 rounded-xl border-2 border-[#ff4081] relative overflow-hidden
        bg-gradient-to-br from-[#ff4081] to-[#f50057]
        before:content-["02"] before:absolute before:right-4 before:top-2 
        before:text-6xl before:font-bold before:text-[#ff80ab] before:opacity-20
        before:font-mono'
        frontContent={
          <div className='h-full relative'>
            <div className='relative z-10'>
              <h2 className='font-bold text-3xl font-mono tracking-wider' 
                style={{ textShadow: '0 0 10px rgba(255,64,129,0.5)' }}>
                ASUKA
              </h2>
              <h3 className='pt-2 text-sm tracking-widest text-[#ffe57f]'>
                EVA-02 // PILOT
              </h3>
            </div>
            <div
              className='absolute left-0 top-0 w-full h-full opacity-40'
              style={{
                background: `linear-gradient(135deg, 
                  rgba(255,64,129,0.2) 0%,
                  rgba(255,64,129,0) 100%
                )`
              }}>
              <div className='absolute right-0 bottom-0 w-24 h-24'
                style={{
                  background: 'url(/images/eva-02-pattern.svg) center/contain no-repeat'
                }}
              />
            </div>
          </div>
        }
        backContent={
          <Link href={siteConfig('ASUKA_URL', null, CONFIG)}>
            <div className='font-mono text-xl h-full flex items-center justify-center
              relative z-10 tracking-wider'
              style={{ textShadow: '0 0 10px rgba(255,64,129,0.5)' }}>
              CONTACT ME
            </div>
          </Link>
        }
      />
    </div>
  )
}