const e=`### About Linear Search


Linear search is the most basic type of search in javascript, searching here is nothing but locating some element or data in any data structure for example, when we log in to any website this search process only validate the user it iterates over the database and search user, so in general, search is almost everywhere and it is one of the most basic task if we deal with any web application so let's proceed to see this one of the most basic algorithm and look at how it works under the hood


### Explanation


So if we look into the implementation of linear search, we are just iterating the full array and checking for the current value if it's matching then it stops finding and return index


### Implementation


We can implement it in any programming language to learn linear searching but here we are implementing in javascript


\`\`\`javascript
const linearSearch => (arr, key) => {
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === key){
            return i
        }
    }
    return null
}
\`\`\``;export{e as default};
