
const MenuItems = ({items}) => {

	return (
		<div className="row d-flex justify-content-center">
		{
			items.map((item) => {
				const {id, title, price, img, desc} = item;
				return (
						<div className="col-5 mb-5" key={id}>
							<div className="row">
								<div className="col-5">
									<img src={img} alt="item-1" className="rounded im-border w-100" height="200" />
								</div>
								<div className="col-7">
									<div className="d-flex justify-content-between">
										<h4>{title}</h4>
										<h4 style={{color : '#c59d5f'}}>${price}</h4>
									</div>
									<div>
										<hr className="bg-primary" style={{height: '2px'}} />
										<p>{desc}</p>
									</div>
								</div>
							</div>
						</div>
					)
			})
		}
		</div>
	)
}
export default MenuItems;