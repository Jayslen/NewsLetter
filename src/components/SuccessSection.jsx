import icon from '../assets/icon-success.svg'
import { Btn } from './Button'

export function SuccessSection ({ email, changeState }) {
  return (
    <section className='flex items-center gap-4 w-96 h-auto px-8 py-5 bg-white rounded-xl font-poppins text-[#36384e]'>
      <article className='flex flex-col gap-3  text-sm'>
        <img src={icon} alt='success-icon-svg-image' className='w-20' />
        <h1 className='text-5xl font-semibold'>Thanks for subcribing!</h1>
        <p>A confirmation email has been sent to {email}. Please open it and click the button inside to confirm your subscription.</p>
        <Btn text='Dismiss Message' event={changeState} />
      </article>
    </section>
  )
}
