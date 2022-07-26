const { Builder, Capabilities } = require("selenium-webdriver")

require('chromedriver')

//const {addMovie} = require('././index.js')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()
beforeAll(async () => {
    await driver.get('http://127.0.0.1:5501/movie-list/index.html')
})

afterAll(async () => {
    await driver.quit()
})

test('Heading', async () => {
    expect(document.getElementsByTagName('h1')).toBe('Movie List')
})