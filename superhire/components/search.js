import React from "react";
import SearchBar, {LongSearchButton} from '@bit/lekanmedia.shared-ui.search-bar';

const style = {
	margin: '40px',
	display: 'block',
	justifyContent: 'center',
	alignItem: 'center',
	width: 400,
	height: 40,
	textAlign: 'center'
}; 


export default Search (
 <section>
 
 <div style={style}>
    <LongSearchButton  text="Search Button" />
</div>
<div style={style}>
    <SearchBar placeholder="Search Bar" />
</div>
</section>
)