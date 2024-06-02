// import { CategoryListContainer } from "./CategoryList.styles";
import Category from "../category/Category";
import { categoriesToPreLoad } from "@/utils/preLoadData";

function CategoryList() {
  return (
    <div className="bg-[#3F375C] font-sans">
      <hr className="border-[#BC8034] border-2 mx-3"/>
      <div className="flex flex-wrap gap-1 justify-around text-[#D9CAB3] my-3 text-lg font-normal max-md:hidden">
        {categoriesToPreLoad.map((category, index) => {
          return <Category key={index} category={category} />
        })}
      </div>
      <hr className="border-[#BC8034] border-1"/>
    </div>
  );
} 

export default CategoryList;