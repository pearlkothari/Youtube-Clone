import React from 'react'
import { useSelector } from 'react-redux';
import {
  Home,
  Explore,
  History,
  Shorts,
  Subscriptions,
  Like,
  Library,
  Logout
} from '../../icons/AccessFile';
import './Sidebar.scss';

function Sidebar({sidebar}) {
  const accessToken=useSelector(state=>state.auth.accessToken);

  const icons=[
    {icon:Home,value:'Home'},
    {icon:Subscriptions,value:'Subscriptions'},
    {icon:Like,value:'Like Videos'},
    {icon:Explore,value:'Explore'},
    {icon:Shorts,value:'Shorts'},
    {icon:History,value:'History'},
    {icon:Library,value:'Library'},
  ]
  return (
    <div className={sidebar===0?'sidebar open':'sidebar'}>
        <ul className='all-nav'>
          {icons.map((key,idx)=>{
            return (
              <li key={idx}>
                  <img src={key.icon} alt={key.value}/>
                  <span>{key.value}</span>
                  <hr></hr>
              </li>
            )
          })}
          <hr></hr>
          {accessToken!=null && <li>
            <img src={Logout} alt={'Logout'}/>
            <span>{'Logout'}</span>
          </li>}
        </ul>
    </div>
  )
}

export default Sidebar