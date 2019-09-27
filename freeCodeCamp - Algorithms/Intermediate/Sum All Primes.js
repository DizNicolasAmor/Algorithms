/* Sum all the prime numbers up to and including the provided number. The provided number may not be a prime. */

const sumPrimes = num => {
    let answer = 0;  
    const isPrime = num => {
        for(let i = 2; i < num; i++) { if (num % i === 0) return false; }
        return num > 1;
    };

    for(let i = 2; i <= num; i +=1) { if (isPrime(i)) answer += i; }

    return answer;
};

console.log(typeof sumPrimes(10) === 'number');
console.log(sumPrimes(10) === 17);
console.log(sumPrimes(977) === 73156);
