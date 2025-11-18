const e=`Looping data in javascript is one of the most crucial tasks, if we are making any web application there is most chance that we are looping some data to UI, Array and object are the two main data structures in javascript in that almost all the time we look to do a looping through array or object of the array


looping data to some HTML and CSS is one of the basic levels of tasks at least a beginner should know, looping data the most common problem we face is, how to write code in such a way it takes fewer number lines and is more reliable in logic after loop


If we have to loop single data then without thinking we can go for Array, but if we would have to loop through two-piece of data interlink to each other in such a manner that one is static and another is dynamic or say static then first thing comes in our mind is object since object contains key-value pair so in that perspective if we could iterate both key and value in the loop then that will solve our problem


So there are some ways to iterate through object key-value pair




## **By using for .. in loop**
\`\`\`javascript
const obj = {
    "key1": "value1",
    "key2": "value2",
    "key3": "value3"
}


for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
        console. log(key +" -> "+ obj[key]);
    }
}
\`\`\`
We use the **for-in** loop as shown. However, we need to use hasOwnProperty() method so that the key we get would be an actual property of an object, and doesn't from the prototype






## ES6 way — By using Object.entries


\`\`\`javascript
const obj = {
    "key1": "value1",
    "key2": "value2",
    "key3": "value3"
}


for (let [key, value] of Object.entries(obj)) {
    console. log(\`\${key} -> \${value}\`);
}
\`\`\`




## By using Object.keys


\`\`\`javascript
const obj = {
    "key1": "value1",
    "key2": "value2",
    "key3": "value3"
}


Object.keys(obj).forEach((res) => {
    console. log(res +" -> "+ obj[res]);
})
\`\`\`


## Conclusion


There are a lot more ways to iterate key-value pairs in the loop, above are the most common ways javascript developers use in day-to-day code, being a developer we need to know at least the basics of data structure for handling data with the help of code.`;export{e as default};
