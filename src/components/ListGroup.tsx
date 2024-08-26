import { useState } from 'react';

interface ListGroupProps {
	items: string[];
	heading: string;
	onSelectedItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectedItem }: ListGroupProps) {
	const [selectedIndex, setSelectedIndex] = useState(-1);

	return (
		<>
			<h1>{heading}</h1>
			{items.length === 0 ? (
				<p>No Items Found</p>
			) : (
				<ul className='list-group'>
					{items.map((item, index) => (
						<li
							key={`${item} - ${index}`}
							onClick={() => {
								setSelectedIndex(index);
								onSelectedItem(item);
							}}
							className={selectedIndex === index ? 'list-group-item active' : 'list-group-item'}
						>
							{`${item} - ${index}`}
						</li>
					))}
				</ul>
			)}
		</>
	);
}

export default ListGroup;
