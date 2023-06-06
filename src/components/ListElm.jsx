export function LiElm ({ text, logo }) {
  return (
    <li className='flex gap-2 items-center'>
      <img src={logo} alt='' />
      <p>{text}</p>
    </li>
  )
}
