const findSecondLargest = (arr) => {
    // Sắp xếp mảng giảm dần
    const sortedArr = arr.sort((a, b) => b - a);
    
    // Trả về phần tử thứ hai trong mảng đã sắp xếp
    return sortedArr[1];
};
const array = [3, 9, 2, 7, 6, 5];
console.log(findSecondLargest(array),'bai1'); 


//bai2
const array1 = [3, 9, 2, 7, 6, 5];
array1.sort((a, b) => a - b);
console.log("Mảng sau khi sắp xếp tăng dần:", array1);

const array2 = [3, 9, 2, 7, 6, 5];
array2.sort((a, b) => b - a);
console.log("Mảng sau khi sắp xếp giảm dần:", array2);



// bai3
const sumNumber=(arr)=>{
    // const array=[];
    let sum=0;
    arr.forEach((item) => {
        if(item %2 ==0){
            sum += item;
        }                
    });
    return sum;
   
}
console.log(sumNumber([0,1,2,3,4,5,6]),'bai 3');