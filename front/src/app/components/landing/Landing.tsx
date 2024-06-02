import Link from 'next/link'
import { Bg_image, LandingPage } from './Landing.styles'

function Landing() {

  return (
    <Bg_image>
      <LandingPage>
        <h1>Welcome to Technology</h1>
        <p>Have fun buying what you want most and why not, give a gift to that special person.</p>
        <div>
          <Link href='/singin' className='mx-4 md:hidden'>
            <button>Login</button>
          </Link>
          <Link href='/home'>
            <button>Discover</button>
          </Link>
          <Link href='/singup' className='mx-4 md:hidden'>
            <button>Register</button>
          </Link>
        </div>
      </LandingPage>
    </Bg_image>
  )
}

export default Landing