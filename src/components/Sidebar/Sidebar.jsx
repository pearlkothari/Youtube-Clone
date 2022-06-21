import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
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

const auth=require('../../redux-files/actions/auth.js');

function Sidebar({sidebar}) {
  const dispatch=useDispatch();
  const accessToken=useSelector(state=>state.auth.accessToken);

  const icons=[
    {icon:Home,value:'Home'},
    {icon:Subscriptions,value:'Trending'},
    {icon:Subscriptions,value:'Subscriptions'},
    {icon:Like,value:'Like Videos'},
    {icon:Explore,value:'Explore'},
    {icon:Shorts,value:'Shorts'},
    {icon:History,value:'History'},
    {icon:Library,value:'Library'},
  ];
  function performLogout(){
    dispatch(auth.Logout())
  }
  return (
    <div className={sidebar===0?'sidebar open':'sidebar closed'}>
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
          {accessToken!=null && <li onClick={performLogout}>
            <img src={Logout} alt={'Logout'}/>
            <span>{'Logout'}</span>
          </li>}
        </ul>
    </div>
  )
}

export default Sidebar