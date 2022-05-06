
________________________________________
|Array          |append     |insert     |
________________________________________
|extra large    |6.2023 ms  |2.1904236 s|
|large          |1.0479 ms  |16.1427 ms |
|medium         |316.8 μs   |266.9 μs   |
|small          |276.2 μs   |120.5 μs   |
|tiny           |193 μs     |72.4 μs    |
________________________________________


The append function uses the .push method to add elements to the back of the results array.  This has a time complexity of O(n), so it scales linearly.  

The insert function uses unshift, which means that each element of the results array must be reassigned as subsequent values are added to the area.  This results in a time complexity of O(n^2), or exponential scaling.

With the smallest arrays, append performs slightly worse than the insert function, but as the size of the array increases, the exponential growth of the .unshift method means that the insert function becomes vastly more inefficient.