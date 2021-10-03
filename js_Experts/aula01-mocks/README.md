# Class 01 - Mocks

In the concept of tests, we need to know when we need to test and what we should test.
You need to know the scenarios and what validations you need to do before code.

Some rules on the class will be:

- [ ] The file should have ID, name, profession and age fields.
- [ ] The file should not be empty.
- [ ] The file should not be longer than 4 lines including headers

We will create the 3 files with the name of behavior expected and if it it's valid or not on mocks Folder.

Data of emptyFile that its an invalid test:

```
id,name,profession,age

```

Data of invalid header that its an invalid test:
```
id
123,Lucas Santos,Javascript Estudent,24
321,Leonardo Santos,Front-End Especialist,24
231,Nicolas Carvalho, Python Estudent,22

```
Data of four items that its an invalid test:
```
id
123,Lucas Santos,Javascript Estudent,24
321,Leonardo Santos,Front-End Especialist,24
231,Nicolas Carvalho, Python Estudent,22

```

Data of three items that its a valid test:
```
id,name,profession,age
123,Lucas Santos,Javascript Estudent,24
321,Leonardo Santos,Front-End Especialist,24
231,Nicolas Carvalho, Python Estudent,22

```

After that, we will create a src folder in the folder of the class with a new file by the name "file.js".

### Testing the first valid test "threeitems-valid.csv".
```js
    const result = await File.csvToJson('./../mocks/threeItems-valid.csv')
```
Expected result of the test: **Passing all the three items of the csv**
```console
result:  id,name,profession,age
123,Lucas Santos,Javascript Estudent,24
321,Leonardo Santos,Front-End Especialist,24
231,Nicolas Carvalho,Python Estudent,22
312,Amanda Santos, Administração,24
```


```js
const { readFile } = require('fs/promises') // Using a native function of Node.js readFile with promises included.
const { join } = require('path') // Creating the complete path to not occurs erros because of the directory place
```
```js
class File { // Creating the class File
    static async csvToJson(filePath){
        const content = await File.getFileContent(filePath) // Acessing the function of getFileContent
        return content // Getting the content of the csv filePath
    }

    static async getFileContent(filePath){ // Creating function to get the content of the filePath
        const filename = join(__dirname, filePath) // Creating the full path of the filePath
        return (await readFile(filename)).toString("utf8") // Converting the content to uft-8
    }
}

(async () => { // The response of the class File
    const result = await File.csvToJson('./../mocks/threeItems-valid.csv') // Including the CSV that it's will be tested
    console.log('result: ', result)
})();
```
### Now we will test the invalid-header invalid test:
```js
    const result = await File.csvToJson('./../mocks/invalid-header.csv')
```
Expected result of the test: **Showing the error FILE_FIELDS_ERROR_MESSAGE**
```console
C:\Users\Lucas\Desktop\Projetos\Treinamentos\JS\treinamento_JavaScripts\js_Experts\aula01-mocks\src\file.js:14
        if(!validation.valid) throw new Error(validation.error)
                                    ^

Error: The provided properties are invalid!
    at Function.csvToJson (C:\Users\Lucas\Desktop\Projetos\Treinamentos\JS\treinamento_JavaScripts\js_Experts\aula01-mocks\src\file.js:14:37)  
    at async C:\Users\Lucas\Desktop\Projetos\Treinamentos\JS\treinamento_JavaScripts\js_Experts\aula01-mocks\src\file.js:39:20
```


First we will create the Default Object of the validation.

```js
const DEFAULT_OPTION = { 
    maxLines: 3, // Max number of lines
    fields: [ "id","name","profession","age"] // Fields of the csv
}
```

For error messages we created a file named "constants.js" in "src" folder, to get generate defaults errors messages:
```js
const constants = { 
    error: {
        FILE_LENGTH_ERROR_MESSAGE: 'The content length is invalid!',
        FILE_FIELDS_ERROR_MESSAGE: 'The provided properties are invalid!',
    }
}

module.exports = constants;
```

We will import the constants file and use the "error" object, and add on the Class File one static function if is valid or not:
```js
    static isValid(csvString, options = DEFAULT_OPTION){ // Passing the default options of the test
                const [header, ...fileWithoutHeader] = csvString.split('\n') // Destructuring the header and the content on two variables
        const isHeaderValid = header === options.fields.join(',') // Verify if the header is valid
        if(!isHeaderValid){
            return {
                error: error.FILE_FIELDS_ERROR_MESSAGE, // Returning the error message in the constants file
                valid: false // Returning false if the header is not valid
            }
        }
        console.log('lines',lines)
    }
```



