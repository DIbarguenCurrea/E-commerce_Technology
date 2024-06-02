import CategoryList from "../category_folder/category_list/CategoryList"
import NavBar from "./navbar/NavBar"



function Header() {
  return (
    <>
      <div>
        <NavBar />
        <CategoryList />
      </div>
    </>
  )
}

export default Header