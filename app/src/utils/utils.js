const linkTo = (data) =>{
	var linkto = '';
	const str = 'info';
	linkto = data.type == 'boss' ? '/boss' : '/genius' ;
	if(!data.icon){
		return linkto+str;
	}
	return linkto;
}
export { linkTo };