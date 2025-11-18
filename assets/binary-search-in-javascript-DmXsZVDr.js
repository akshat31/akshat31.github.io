const n=`



**About Binary Search**
In this article, we'll look at the idea behind Binary Search and its implementation. Binary Search is a very simple, intuitive, yet efficient searching algorithm. The only limitation is that it works only with sorted arrays, so some preprocessing on our data in order to sort it is necessary.


**Explanation**


Binary Search is related to and based on divide-and-conquer algorithm, that divides the array roughly in half every time it checks whether the data which we are looking for is match or not


**Implementation**


we can implement it in any programming language to learn linear searching however here we are implementing in javascript
\`\`\`
const binarySearch = (arrayData, key) => {
    let start = 0;
    let end = arrayData.length - 1;


    while (start <= end) {
        let middle = Math.floor((start + end) / 2);


        if (arrayData[middle] === key) {
            // found the key
            return middle;
        } else if (arrayData[middle] < key) {
            // continue searching to the right
            start = middle + 1;
        } else {
            // search searching to the left
            end = middle - 1;
        }
    }
	// if key was not found
    return -1;
}
\`\`\`

`;export{n as default};
