//1
let x ="javascript";
let y ;
function reverse(oldtext){
    let newtext = "";
    for(let index = oldtext.length - 1 ; index >=0 ; index--){
         newtext = newtext + oldtext[index];
    }
    return newtext;

}  y = reverse(x);
console.log(y);
//2
let a ="hello";
let b;
function palindrome(text){
    let count = 0;
    for(let i =0 ; i < text.length ; i++) {
        if(i == ( text.length -1 - i)){break}
        if ( text[i] != text[ text.length -1 -i]) { count++}
    }
    if(count >0){ return false}
    else { return true}
} b = palindrome(a);
console.log(b);
//3
 function findmax(arr){
    let max = arr[0] ;
    for( let i =1; i <arr.length ; i++){
        if (arr[i] > max){
            max = arr[i];
        }
    } return max;
 } console.log(findmax([1, 5, 3, 9, 2]));
 //4 
 function  factorial(n){
    if ( n ===0 || n ===1){
        return 1 ;
    } return n * factorial(n-1);
 } console.log (factorial(5));
 //5
 function isprime(n) {
    if (n <= 1){
        return false;
    } 
    for( let i = 2 ; i < n ; i++ )
        {
        if( n % i === 0) {
            return false;
        }
    } return true ;
 } 
 console.log(isprime(7));
 console.log(isprime(10));



//6
function uniqueElements(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        
        let isDuplicate = false;
        for (let j = 0; j < result.length; j++) {
            if (arr[i] === result[j]) {
                isDuplicate = true;
                break;
            }
        }
        if (isDuplicate === false) {
            result[result.length] = arr[i]; 
        }
    }
    return result;
}
console.log(uniqueElements([1, 2, 2, 3, 4, 4, 5]));

//7
function findMissingNumber(arr) {
    for (let i = 1; i <= 100; i++) {
        let found = false;
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] === i) {
                found = true;
                break; 
            }
        }
        if (!found) {
            return i; 
        }
    }
}
let numbers = [];
for (let i = 1; i <= 100; i++) {
    if (i !== 55) {
        numbers[numbers.length] = i;
    }
}
console.log(findMissingNumber(numbers));
       

 //8
 function capitalize(sentence){
    let result ="";
    for(let i =0 ;i <sentence.length ; i++){
        if ( i=== 0|| sentence[i-1] ===" "){
            result+= sentence[i] .toUpperCase();
        } else{
            result += sentence[i];
        }
    }

  return result;
} console.log(capitalize("hello world from javascript"));


 //9
  function checkAnagram(str1, str2) {
    let sortedStr1 = str1.split("").sort().join("");
    let sortedStr2 = str2.split("").sort().join("");
    return sortedStr1 == sortedStr2 ;
  } 
  console.log(checkAnagram ("Listen", "siLent"));
  console.log (checkAnagram ("hello" ,"world") );
  //10
  function chunckArray (arr, size){
    let result =[];
    for( let i = 0 ;i< arr.length ; i +=size ){
        let chunk = arr.slice(i , i+size)
    result .push(chunk)}
    return result;
  } console.log(chunckArray ([1,2,3,4,5,6,7], 3))
  //11 
  function findPair( arr , target){
    for( let i=0 ; i< arr.length; i++){
        for(let j=i+1; j< arr.length ; j++){
            if(arr[i]+ arr[j] === target){
                return[arr[i],arr[j]];
            }
        }
    } return [];
  } 
  console.log(findPair([10,5,2,7,8,3],10));
  //12  
  function rotaleft(arr,n){
    let onepart = arr.slice(0,n);
    let  twopart  = arr.slice(n) ;
    return twopart.concat(onepart);
  } console.log(rotaleft([1 , 2 , 3, 4, 5] , 2));
 //13
 function Intersection (arr1 , arr2){
    let result =[];
    for(let i=0; i <arr1.length ; i++){
        if( arr2.includes(arr1[i])){
            result.push(arr1[i]);
        }
    } return result;
 } console.log(Intersection([1,2,3,4],[3,4,5,6]));

 //14 
function countCharacters(str) {
    let result = {}; 
    for (let i = 0; i < str.length; i++) {
        let char = str[i]; 

        if (result[char]) {
            result[char] += 1;
        } else {
            result[char] = 1;
        }
    }
    return result; 
}
 console.log(countCharacters("hello")); 
 //15
 
   function flattenArray(arr) {
    let result = []; 
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            let flatSubArray = flattenArray(arr[i]);
            for (let j = 0; j < flatSubArray.length; j++) {
                result[result.length] = flatSubArray[j];
            }
            
        } else {
            result[result.length] = arr[i];
        }
    }
    return result;
}

console.log(flattenArray([1, 2, [3, 4], [5, 6]])); 








