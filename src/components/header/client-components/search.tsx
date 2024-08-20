import { SearchIcon } from 'lucide-react'

export const Search = () => {
  return (
    <div className="hover: flex h-[30px] w-10 cursor-pointer items-center rounded-full border border-[#00000034] bg-white px-2 py-5 shadow-lg transition-all duration-300 hover:w-56 hover:rounded-lg">
      <input
        className="w-full border-none text-black outline-none"
        type="text"
        placeholder="Search"
      />
      <a href="">
        <SearchIcon className="text-black" />
      </a>
    </div>
  )
}
