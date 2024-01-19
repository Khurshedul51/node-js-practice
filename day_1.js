
// global variables
console.log('filename => ', __filename)
console.log('foldername => ', __dirname)

// define a global variables in node js
global.name = 'Sakibul Alam'
console.log('global variable => ', name)



// os modules
const os = require('os')
const systemUpTime = os.uptime()
console.log('system up time => ', systemUpTime/86400, ' day')

const userInfo = os.userInfo()
console.log('user info => ', userInfo)

console.log('os type: ', os.type())
console.log('os release: ', os.release())
console.log('free memory: ', os.freemem()/Math.pow(10, 9), ' GBs')
console.log('total memory: ', os.totalmem()/Math.pow(10, 9), 'GBs')



// path modules
const path = require('path')

const myPath = __filename

const pathInfo = {
    filename: path.basename(myPath),
    foldername: path.dirname(myPath),
    fileExtension: path.extname(myPath),
    absoluteOrNot: path.isAbsolute(myPath),
    detailInfo: path.parse(myPath)
}
console.log('path info:-> ', pathInfo)

const newPathList = myPath.split(path.sep)

const newPath = path.join(...newPathList)
console.log('new path => ', newPath)
console.log('resolved path => ', path.resolve(...newPathList))


// fs modules

const { ifError } = require('assert')
const { error } = require('console')
const fs = require('fs')

//create folder
fs.mkdir('./myFolder', (err) => {
    if(err) console.log(err)
    else console.log('folder created successfully!')
})

//to create and write to a file asynchronously

const data = 'How to create and write to a file asynchronously using fs.writeFile()'
fs.writeFile(`./myFolder/myFile.txt`, data, {flag:'a'}, (err) => {
    if(err){
        console.log(err)
        return
    }else{
        console.log('file created and written to file successfully!')
    }
})


// to read a file asynchronously using fs.readFile()

fs.readFile('./myFolder/myFile.txt', {encoding: 'latin1'}, (err, data) => {
    if(err){
        console.log(err)
        return
    }else{
        console.log('myFile data => ', data)
    }
})


// Reading and Writing to a File Synchronously

try {
    fs.writeFileSync('./myFolder/myFile.txt', data='hello javascript');
    console.log('write operation successful!')

    fileData = fs.readFileSync('./myFolder/myFile.txt', 'utf-8');
    console.log('file data = ', fileData)
} catch (error) {
    console.log(error)
}


// How to read the contents of a directory using
fs.readdir('./myFolder', (error, files) => {
    if(error){
        console.log(error)
        return
    }
    console.log('files => ', files)
})

// How to rename a file using fs.rename(oldPath, newPath, callback)

fs.rename('./myFolder/myFile.txt', './myFolder/testFile.txt', (error) => {
    if(error){
        console.log(error)
        return
    }
    console.log('file renamed successfully!')
})

// How to delete a file using fs.unlink()
fs.unlink('./myFolder/testFile.txt', (error) => {
    if(error) throw error;
    console.log('file deletion successful!')
})