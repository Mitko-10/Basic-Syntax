function sortDescending(a, b, c) {
  const nums = [a, b, c];
  nums.sort((x, y) => y - x);
  nums.forEach(n => console.log(n));
}


sortDescending(-2, 1, 3);
