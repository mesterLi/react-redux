var Add = (data) => ({
    type:'ADD',
    data:{
    	isdone:3,
    	text:data
    }
})
var Remove = () => ({
    type:'Remove'
})
var Complate = () => ({
    type:'Complate'
})
var fetchData = () => ({
	type:'fetchData'
})
export { Add, Remove, Complate, fetchData };
