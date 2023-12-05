const { boredServiceByKey} = require("./boredServices")
jest.mock("./boredServices")
describe('bored Services Tests', ()=>{
    test('as a user I should return 10 cat facts', async() => { 
      const key = 5881028;
        const result = await boredServiceByKey(key);
        expect(result.data)
        expect(result.data.activity).toEqual('Learn a new programming language');
        expect(result.data.type).toEqual("education");
        expect(result.data.participants).toEqual(1);
        expect(result.data.price).toEqual(0.1);
        expect(result.data.link).toEqual("");
        expect(result.data.accessibility).toEqual(0.25);
     })
})