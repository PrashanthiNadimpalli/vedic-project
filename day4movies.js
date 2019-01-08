var express= require('express')


var app=express()
var request= require('request')

app.set('view engine','ejs')
app.use(express.static('day4ass'))
app.get('/',function(req,res){
	console.log(__dirname)
	res.sendFile(__dirname+'/day4ass/movies.html')
})
 app.get('/movies',function(req,res){
 	request('https://api.themoviedb.org/3/movie/top_rated?api_key=a32331daf62a8b89d04d504680a23db2&language=en-US&page=1',function(error,response,body)

 	
 	{
             res.render('movies',{res:JSON.parse(body)})
 	})

 })

app.listen(4000,function(){
	console.log("i am running")
})