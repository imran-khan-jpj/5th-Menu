import {useState} from 'react';
import menu from './data';
import Categories from './Categories'
import MenuItems from'./MenuItems'



const App = () => {
	const [items, setItems] = useState(menu);


	const showItems = (category) => {
		// console.log(category)
		if(category === 'All'){
			return setItems(menu);
		}

		const filteredItems = menu.filter((item) => {
			return item.category === category;
		});

		setItems(filteredItems);
		// console.log(filteredItems);
	}
	return (
		<div className="container-fluid">
			<div className="row mt-5">
				<div className="offset-3 col-6">
					<h1 className="text-center w-100">Our Menu</h1>
					<hr className="" style={{height : '5px', width: '100px', backgroundColor : '#c59d5f'}} />
				</div>
			</div>
			<Categories showItems={showItems} />
			<MenuItems items={items} />
		</div>
	)
}
export default App;