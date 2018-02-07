const linkTo = (type) =>{
	var linkto = '';
	linkto = type == 'boss' ? 'boss' : 'genius' ;
	return linkto;
}
export { linkTo };