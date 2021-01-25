import {useState, useEffect} from 'react';
import items from './data';


const Categories = ({showItems}) => {

	

	const [categories, setCategories] = useState([]);

	useEffect(() => {
		let newCategories = items.map((item) => {
			const {category} = item;
			return category;
		});
		newCategories = ['All', ...new Set(newCategories)];
		setCategories(newCategories);
		// console.log(newCategories);

	}, []);

	return (
		<div className="row mt-4 mb-5">
			<div className="offset-3 col-6 text-center">
			{
				categories.map((category, index) => {
					return <button key={index} className="btn meroon mr-2" onClick={() => showItems(category)}>{category.charAt(0).toUpperCase() + category.slice(1)}</button>
				})
			}
			</div>
		</div>
	)
}

export default Categories;