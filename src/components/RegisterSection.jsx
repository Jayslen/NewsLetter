import icon from '../assets/icon-list.svg'
import ilustrationDesktop from '../assets/illustration-sign-up-desktop.svg'
import ilustrationMobile from '../assets/illustration-sign-up-mobile.svg'

import { LiElm } from './ListElm'
import { Btn } from './Button'

export function RegisterSection ({ changeState, checkEmail, email }) {
  return (
    <section className='flex flex-col-reverse items-center gap-4  h-auto bg-white rounded-3xl font-poppins text-[#36384e] md:flex-row md:p-4 md:max-w-3xl'>
      <article className='flex flex-col gap-3 text-sm p-4 md:p-0'>
        <h1 className='text-4xl font-bold text-[#242742] md:text-5x'>
          Stay Updated!
        </h1>
        <p>Join 60,000+ products managers receiving monthly update on :</p>

        <ul className='flex flex-col gap-1'>
          <LiElm
            text='Product discovery and building what matters'
            logo={icon}
          />
          <LiElm text='Mesuaring to endure updates are a success' logo={icon} />
          <LiElm text='And much more' logo={icon} />
        </ul>

        <div className='flex flex-col gap-2'>
          <label htmlFor='email' className='font-bold text-xs text-[#242742]'>
            Email address
          </label>
          <input
            type='email'
            id='email'
            placeholder='example@gmail.com'
            className={`border-[1px] ${
              !email ? 'border-gray-300' : 'border-red-500 bg-red-100'
            } rounded-md p-3 font-poppins text-sm`}
            onInput={checkEmail}
          />
        </div>
        <Btn text='Subscribe to monthly newsletter' event={changeState} />
      </article>
      <figure>
        <img
          className='hidden md:block'
          src={ilustrationDesktop}
          alt='ilustration-sing-up'
        />
      </figure>
      <figure className='md:hidden w-full'>
        <img
          src={ilustrationMobile}
          alt='ilustration-sing-up'
          className=' w-full rounded-t-xl'
        />
      </figure>
    </section>
  )
}
