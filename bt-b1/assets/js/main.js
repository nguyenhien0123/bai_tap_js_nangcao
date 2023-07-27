

function remove(arr) {
    let Arr = [];
    arr.forEach((item)=>{
        if(Arr.indexOf(item) === -1){
            Arr.push(item);
        }
    })
    return Arr;
  }
  console.log(remove([1, 1, 2,2, 3, 5, 3, 1, 5, 6, 7, 4,4]))
  
