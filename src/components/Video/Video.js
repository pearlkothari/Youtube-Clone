import React from 'react'
import './Video.scss'

function Video() {
  return (
    <div className='video'>
      <div className='thumbnail'>
        <img src="https://i.ytimg.com/vi/G4JuopziR3Q/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAQX_KX_cqFiL-YyjuDc8iA6i3cnQ" alt=""></img>
        <span>05:43</span>
      </div>
      <div className='channel'>
          <img src='https://yt3.ggpht.com/fGvQjp1vAT1R4bAKTFLaSbdsfdYFDwAzVjeRVQeikH22bvHWsGULZdwIkpZXktcXZc5gFJuA3w=s68-c-k-c0x00ffffff-no-rj' alt=''></img>
          <div className='title'>
              <span className="Description">Exclusive Clip | Loki | Disney+</span>
              <div className='details'>
                  <span>Marvel Entertainment</span>
                  <span>5M Views • 5 days ago</span>
              </div>
          </div>
      </div>
    </div>
  )
}

export default Video