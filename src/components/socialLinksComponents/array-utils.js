export function removeItem(arr, item) {
    const newArr = [...arr];
    const index = newArr.indexOf(item);
    if (index > -1) {
      newArr.splice(index, 1);
    }
    return newArr;
  }
  
  export function closestItem(arr, item) {
    const index = arr.indexOf(item);
    if (index === -1) {
      return arr[0];
    } else if (index === arr.length - 1) {
      return arr[arr.length - 2];
    } else {
      return arr[index + 1];
    }
  }
  