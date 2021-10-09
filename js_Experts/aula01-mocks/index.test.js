const { error } = require('./src/constants')
const File = require('./src/file')
const { rejects, deepStrictEqual } = require('assert')
;
(async () => {
    
   {
       const filePath = './mocks/emptyFile-invalid.csv'
       const rejection = new Error(error.FILE_LENGTH_ERROR_MESSAGE)
       const result = File.csvToJson(filePath)
       await rejects(result, rejection)
    }

    { 
        const filePath = './mocks/fourItems-invalid.csv'
        const rejection = new Error(error.FILE_LENGTH_ERROR_MESSAGE)
        const result = File.csvToJson(filePath)
        await rejects(result, rejection)        
    }
    {
        Date.prototype.getFullYear = () => 2021
        const filePath = './mocks/threeItems-valid.csv'
        const result = await File.csvToJson(filePath)
        const expected = [
            {
              "name": "Lucas Santos",                
              "id": 123,
              "profession": "Javascript Estudent",
              "birthDay": 1997
            },
            {
              "name": "Leonardo Santos",
              "id": 321,
              "profession": "Front-End Especialist",
              "birthDay": 1997
            },
            {
              "name": "Nicolas Carvalho",
              "id": 231,
              "profession": "Python Estudent",
              "birthDay": 1999
            }
          ]
        deepStrictEqual(JSON.stringify(result), JSON.stringify(expected))
    }
})()