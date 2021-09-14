import React from 'react'

const Search = ({onChange}) => {
  const filterBtn=document.querySelector('#filter')
  const filter=()=>{
    filterBtn.classList.toggle('open')
  }
  return (
    <section>
     <div className='container'>
      <input onChange={onChange} className='search' type='text' placeholder='Search a country'></input>
       
       <div className='dropdown' id='filter' onClick={filter}>
        Filter by Region
        <i className='fas fa-chevron-down'></i>
        <ul>
         <li>Africa</li>
         <li>America</li>
         <li>Asia</li>
         <li>Europe</li>
         <li>Ocenia</li>
        </ul>
       </div>
      </div>      
    </section>
  )
}

export default Search
