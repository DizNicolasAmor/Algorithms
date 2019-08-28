/*

### Question 5 - Blood mixer

    In a starship with N passengers intended to be humans,
    you know that exactly one of them is an android pretending to be a passenger,
    and you have to discover it as soon as possible.
    An android is almost indistinguishable from a human,
    the only way to distinguish them is by running a blood test that takes many hours,
    and there is only one machine in the ship to run it.
    Fortunately, a blood test can mix the blood of various subjects,
    and the result will be positive if and only if one of the subjects is an android.

	Input Format

    - An integer N, the number of passengers.
    - A Test Machine object that performs the blood test with a given set of passengers.
    - Each passenger is represented as a number between 0 and N-1.

	Constraints

    - 1 ≤ N ≤ 10^6

    Your objective is to run a series of blood tests over subsets of passengers
    to discover the android in the shortest amount of time.
    Implementing an inefficient strategy would timeout,
    since each test run suspends the execution for a while.

    Output Format

    - The function must return an integer, the number representing the android.

*/

const getAndroidIndex = (n, set ) => {
    const values = Object.values(set);
    const target = 'Android';

    const checkSubgroup = (start, stop, secondStop) => {
        if (start >= stop) throw new Error('Wrong subgroup creation.')

        const subgroup = values.slice(start, stop);

        if (subgroup.length === 1) {
            if (values[start] === target) return start;
            else if (values[stop] === target) return stop;
            else return checkSubgroup(stop, Math.floor((stop + secondStop) / 2), secondStop)
        } else if (subgroup.includes('Android')) return checkSubgroup(start, Math.floor(stop / 2), stop)
        else return checkSubgroup(stop, Math.floor((stop + secondStop) / 2), secondStop)
    };

    const initialStart = 0;
    const initialStop = Math.floor(n / 2);
    const initialSecondStop = n;

    return checkSubgroup(initialStart, initialStop, initialSecondStop);
};

/* TESTS */
const set1 = { 0: 'Human', 1: 'Human', 2: 'Human', 3: 'Human', 4: 'Android', 5: 'Human' };
const set2 = { 0: 'Human', 1: 'Human', 2: 'Android' };
const set3 = { 0: 'Android', 1: 'Human', 2: 'Human' };
const set4 = { 0: 'Human', 1: 'Android', 2: 'Human' };

console.log(`Expect ${getAndroidIndex(6, set1)} to be 4`)
console.log(`Expect ${getAndroidIndex(3, set2)} to be 2`)
console.log(`Expect ${getAndroidIndex(3, set3)} to be 0`)
console.log(`Expect ${getAndroidIndex(3, set4)} to be 1`)
