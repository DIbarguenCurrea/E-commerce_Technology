function SearchBar() {
  return (
    <div className="sm:justify-center">
      <form>
        <div className="relative focus-within:text-orange-500 max-sm:justify-center">
          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <button id='text' name="button" aria-label="Name" type="submit" className="p-1 focus:outline-none focus:shadow-outline">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" className="w-6 h-6 focus-within:text-gray-400 max-sm:hidden"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </button>
          </span>
          <input type="search" name="search" className="py-2 text-sm text-[#3F375C] bg-white rounded-md pl-10 focus:outline-none focus:bg-white focus:text-[#3F375C] max-sm:hidden" placeholder="Search..." autoComplete="off" />
        </div>
      </form>
    </div>
  )
}

export default SearchBar