import Image from 'next/image'
import React from 'react'

function Navbar() {
  return (
    <nav
        className='p-3 bg-primary'
    >
       <div>
            <div
            >
                <Image
                    alt='logo'
                    src={"/vercel.svg"}
                    width={120}
                    height={75}
                />
            </div>
            
       </div>
    </nav>
  )
}

export default Navbar