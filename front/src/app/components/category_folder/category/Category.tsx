import Link from 'next/link';
import PropTypes from 'prop-types';

function Category({ category } : {category : any}) {
  return (
    <div>
      <h2><Link href="/">{category.name}</Link></h2>
      {/* <img src={Category.image} alt={Category.name} /> */}
    </div>
  )
}

Category.propTypes = {
  category: PropTypes.shape({
    name: PropTypes.string.isRequired,
    // image: PropTypes.string.isRequired,
  }).isRequired,
}

export default Category;