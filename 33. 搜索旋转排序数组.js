var search = function(nums, target) {
    let mid = parseInt(nums.length / 2)
    return rotateSearch(nums, target , 0, mid, nums.length - 1)
};

const rotateSearch = (arr, t, l, m, r) => {
  if (!(l <= m && m <= r && l <= r)) {
    return -1
  }
  if (arr[l] === t) return l
  if (arr[m] === t) return m
  if (arr[r] === t) return r
  
  if (arr[l] < arr[m]) {
    if (arr[l] < t && t < arr[m]) {
      return binarySearch(arr, t, l, m)
    } else {
      return rotateSearch(arr, t, m + 1, m + 1 + parseInt((r - m - 1) / 2), r)
    }
  } else if (arr[m] < arr[r]) {
    if (arr[m] < t && t < arr[r]) {
      return binarySearch(arr, t, m, r)
    } else {
      return rotateSearch(arr, t, l, l + parseInt((m - 1 - l) / 2), m - 1)
    }
  }
  return -1
}

const binarySearch = (arr, t, l, r) => {
  while (l <= r) {
    let m = parseInt(l + (r - l) / 2)
    if (arr[m] === t) {
      return m
    } else if (t < arr[m]) {
      r = m - 1
    } else {
      l = m + 1
    }
  }
  return -1
}

function search(a, target, start = 0, end = a.length - 1) {
    let mid = Math.floor((start + end)/2);

    if (start > end) return -1;

    else if (target === a[mid]) return mid;
    
    else if ((target < a[mid] && a[start] <= target) || (a[start] > a[mid] && (a[start] <= target || target < a[mid]))) {
      return search(a, target, start, mid - 1);
    } else {
      return search(a, target, mid + 1, end);
    }
  }