const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];
console.log(matrix);

const newMatrix = [
    ...matrix[0],
    ...matrix[1],
    ...matrix[2]
];
console.log('using ...', newMatrix);

const newMatrixConcat = matrix[0].concat(matrix[1], matrix[2]);
console.log('using concat()', newMatrixConcat);