"use-client"

import {ReactNode} from 'react'



function MainContent(props: {children: ReactNode}) {
  return (
    <main className='flex relative flex-col items-center w-full'>
        {props.children}
    </main>
  )
}


export default MainContent
