const express = require('express')
const app = express()
const PORT = 8000

const characters = {
	'harry' : {
		'full name' : 'harry potter',
		'house' : 'gryfindor',
		'wand core' : 'phoenix feather',
		'physical trait' : 'lightening-bolt scar on forehead'
	},
	'hermione' : {
		'full name' : 'hermione granger',
		'house' : 'gryfindor',
		'wand core' : 'dragon heartstring',
		'physical trait' : 'large teeth, until her 4th year they were magically reduced'
	},
	'neville' : {
		'full name' : 'neville longbottom',
		'house' : 'gryfindor',
		'wand core' : 'unicorn hair',
		'physical trait' : 'looks scared all the time'
	}
}




app.get('/', (request, response) => {
	response.sendFile(__dirname + '/index.html')
})


app.get('/api/:name', (request, response) => {
	const characterName = request.params.name.toLowerCase()
	if (characters[characterName]) {
		response.json(characters[characterName])
	}
	response.json(characters['neville'])
})



app.listen(PORT, () => {
	console.log(`Server is now running on PORT ${PORT}`)
})
