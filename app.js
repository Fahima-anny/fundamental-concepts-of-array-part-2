let arr = [1,2,3,4,5]
// for(let i of arr){
//     console.log(i)
// }

// for(let i=0 ; i<arr.length ; i++){
//     console.log(arr[i])
// }

// console.log(arr.reverse())

// let revArr = []
// for(let i of arr){
//     revArr.unshift(i)
// }
// console.log(revArr)
// let revArr2 = []
// for(let i=arr.length-1 ; i>=0 ; i--){
// revArr2.push(arr[i])
// }
// console.log(revArr2)

// let friends = ['jakir', 'akib', 'monir', 'babul']
// console.log(friends.sort())

// let num = [43,12,6,8,7,1,4]
// // ascending
// let numAsc = [...num].sort( (a,b) => a-b )
// console.log(numAsc)
// // descending
// let numDes = [...num].sort( (a,b) => b-a )
// console.log(numDes)

// hw 

// const colors = ['red', 'blue', 'green', 'yellow', 'orange']

// let revColors = []
// for(let i=colors.length-1 ; i>=0 ; i--){
// revColors.push(colors[i])
// }
// console.log(revColors)

// var numbers = ['Tom', 'Tim', 'Tin', 'Tik']
// let newString = '' ;
// for(let num of numbers){
//     // console.log(num)
// newString = newString.concat(num)

// }
// console.log(newString)


const statement = 'I am a hard working person'
let statementArray = statement.split(' ')
// console.log(statementArray)
let reversed = []
for(let i=statementArray.length-1 ; i>=0 ; i--){
    reversed.push(statementArray[i])
}
// console.log(reversed)
let output = reversed.join(' ')
console.log(output)






























