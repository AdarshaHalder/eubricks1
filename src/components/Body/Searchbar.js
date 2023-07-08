import React from 'react'
import FilterListIcon from '@mui/icons-material/FilterList';
function Searchbar() {
  return (
    <div className='d'>
       
        <form class="flex items-center mb-5 px-5 gap-2">
              <button class=" flex bg-blue-500 shadow hover:shadow-lg hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
 <FilterListIcon/> Filter
</button>  
        <label for="simple-search" class="sr-only">Search</label>
        <div class="relative w-full s">
            <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
            </div>
            <input type="text" id="simple-search" class="shadow hover:shadow-lg bg-white border border-none 
            text-gray-900 text-sm rounded-lg w-full pl-10 p-2.5   " placeholder="Search" required/>
        </div>
        <button type="submit" class="p-2.5 ml-2 shadow hover:shadow-lg text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg></button>
    </form>
    </div>
  )
}

export default Searchbar