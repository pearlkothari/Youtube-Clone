import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
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
    {icon:Home,value:'Home',route:'home'},
    {icon:Subscriptions,value:'Trending',route:'trending'},
    {icon:Subscriptions,value:'Subscriptions',route:'subscriptions'},
    {icon:Like,value:'Like Videos',route:'likevideos'},
  ];
  const navigate=useNavigate();

  function performLogout(){
    dispatch(auth.Logout());
    dispatch({type:'RESET_LIKE_STATE'});
    dispatch({type:'RESET_SUBSCRIPTION_ALL'});
    navigate('/');
  }
  function performLogin(){
    dispatch(auth.Login());
  }
  function performTask(type){
    if(accessToken!=null){
      dispatch({type:'RESET_STATE'});
      navigate(`/${type}`);
    }else{
      performLogin();
    }
  }
  return (
    <div className={sidebar===0?'sidebar open':'sidebar closed'}>
        <ul className='all-nav'>
          {icons.map((key,idx)=>{
            return (
              <li key={idx} onClick={() => performTask(key.route)}>
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