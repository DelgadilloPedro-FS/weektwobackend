const { catService} = require("./catServices")
jest.mock("./catServices")
describe('Cat Services Tests', ()=>{
    test('as a user I should return 10 cat facts', async() => { 
        const result = await catService()
        const fact = result.data.data[3]
        expect(fact.fact).toEqual(`A group of cats is called a “clowder.”`);
        expect(fact.length).toEqual(38);
     })
})



