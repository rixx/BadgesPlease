const chunk = require('lodash/chunk')
const fs = require('fs-extra')
const TextToSVG = require('text-to-svg')
const mustache = require('mustache')

const data = require('./badge_data')
const regularText = TextToSVG.loadSync(data.fontRegular)
const boldText = TextToSVG.loadSync(data.fontHeavy)

const singleTemplate = fs.readFileSync('templates/badge.mustache.svg', 'utf8')
const gridTemplate = fs.readFileSync('templates/grid.mustache.svg', 'utf8')

Promise.all(chunk(data.names, data.columns*data.rows).map((nameList, howmany) => {
	let batch = ""
	nameList.forEach((name, index) => {
		batch += mustache.render(singleTemplate, {
			line1: boldText.getPath(name[0], {fontSize: 12, anchor: "center baseline", x: 55, y: 44}),
			line2: regularText.getPath(name[1], {fontSize: 12, anchor: "center baseline", x: 55, y: 59}),
			xTrans: (index % data.columns) * (65 + 10),
			yTrans: Math.floor(index/data.columns) * (110 + 15)
		})
	})
	let output = mustache.render(gridTemplate, {batch})
	return fs.writeFile(`output/batch_${howmany}.svg`, output)
}))
