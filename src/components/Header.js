import React from 'react'

const Header = () => {
  let darkmode=localStorage.getItem('darkmode')

  const enableddarkmode=()=>{
    document.body.classList.add('dark')
    localStorage.setItem('darkmode','enabled')
  }

  const deletedarkmode=()=>{
    document.body.classList.remove('dark')
    localStorage.setItem('darkmode',null)
  }

  if(darkmode==='enabled'){
    enableddarkmode()
  }

  const toggle=()=>{
    darkmode=localStorage.getItem('darkmode')
    if(darkmode!=='enabled'){
      enableddarkmode()
    }
    else{
      deletedarkmode()
    }
  }

  return (
    <header>
      <div className='container'>
       <h1>Whaere in the world?</h1>
       <button className='btn-toggle' onClick={toggle}>
        <i className='far fa-moon'></i>
        <i className='fas fa-moon'></i>
        {enableddarkmode? 'Dark Mode': 'Light Mode'}
        </button>
      </div>
    </header>
  )
}

export default Header
