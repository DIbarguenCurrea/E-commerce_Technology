import { categoriesToPreLoad } from "@/utils/preLoadData"
import { ICategory } from "@/types"
import Image from "next/image"
// import { CategoryContainer } from "./Categories.styles"

function Categories() {
  return (
    <div className="p-4">
      <h1 className="text-4xl font-semibold text-[#3F375C]">
        Categories
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-9">
        {categoriesToPreLoad.map((category: ICategory, index: number) => (
          <div key={index} className=" bg-white p-1 rounded-xl flex flex-col items-center transform transition duration-300 scale-75 hover:scale-95 max-xl:hover:scale-75">
            <Image src={category.image}
              alt={category.name}
              width={500}
              height={500}
              className="object-cover w-full h-full" />
            <h2 className="text-[#3F375C] text-lg font-normal mt-2">{category.name}</h2>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Categories