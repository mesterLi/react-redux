const linkTo = (data) =>{
	var linkto = '';
	const str = 'info';
	console.log(!data.icon)
	linkto = data.type == 'boss' ? '/boss' : '/genius' ;
	if(!data.icon){
		return linkto+str;
	}
	return linkto;
}
export { linkTo };