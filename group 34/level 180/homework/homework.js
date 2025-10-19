// 8kyu

// https://www.codewars.com/kata/56f8fe6a2e6c0dc83b0008a7

function sumSquares(array) {
  return array.reduce((sum, n) => sum + n ** 2, 0);
}

// https://www.codewars.com/kata/545b342082e55dc9da000051

// def partition(arr, classifier_method):
//     true_group = []
//     false_group = []
//     for item in arr:
//         if classifier_method(item):
//             true_group.append(item)
//         else:
//             false_group.append(item)
//     return (true_group, false_group)

// https://www.codewars.com/kata/542ebbdb494db239f8000046

// def next_item(xs, item):
//     found = False
//     for x in xs:
//         if found:
//             return x
//         if x == item:
//             found = True
//     return None

// https://www.codewars.com/kata/547c71fdc5b2b38db1000098

function NameMe(first, last){
    this.firstName = first;
    this.lastName = last;
    this.name = first + ' ' + last;
}