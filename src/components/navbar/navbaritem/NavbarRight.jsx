import React, { useEffect } from 'react'
import { BiSearch } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import { SlBasket } from "react-icons/sl";
import { useDispatch, useSelector } from 'react-redux';
import { getCartTotal } from '../../../redux/cartSlice';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../../redux/authSlice'; // Doğru dosya yolunu kullanarak içe aktarın


const NavbarRight = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {itemCount} = useSelector(state => state.carts)
  const { isAuthenticated, user } = useSelector((state) => state.auth);

 

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(getCartTotal());
    }
  }, [dispatch, isAuthenticated]);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };


  return (
    <div className='flex items-center gap-10'>
        <div className='flex items-center border p-3 rounded-full bg-gray-200'>
            <input type='bg-gray-200 outline-none' placeholder='Arama Yapınız...'/>
            <BiSearch size={28}/>
        </div>
        <AiOutlineHeart size={28}/>
        <div onClick={() => navigate("cart")} className='relative'>
            <div className='absolute -top-3 -right-3 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center'>{itemCount}</div>
            <SlBasket size={28}/>
        </div>
        {isAuthenticated ? (
        <div className='flex items-center gap-4'>
          <span>Hoşgeldiniz, {user.username}</span>
          <button onClick={handleLogout} className='border p-2 rounded bg-red-500 text-white'>
            Çıkış Yap
          </button>
        </div>
      ) : (
        <button onClick={() => navigate('/login')} className='border p-2 rounded bg-blue-500 text-white'>
          Giriş Yap
        </button>
      )}
    </div>
  )
}

export default NavbarRight