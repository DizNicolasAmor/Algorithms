/*

### Question 1 - Getting the third person with best salary


	Given N people with the following features:

	- Id
	- Salary
	- Number of children
	- Civil Status
	- Age

	We want you to return the id of the person with the third best final salary
	between the group of people that fulfill the next conditions:

	- Being single.
	- Having 1 to 3 children.
	- Having between 30 and 40 years old

	where the final salary is obtained with the following formulae:

	- A first discount of15 percent of the salary and after that
	- another discount of max(0, (4 - amount of children))percent of the previous result.

	For example if a person has 3 children and his salary is 100, his final salary will be of 84.15.

	- First step: 100 - 100 * 0.15 = 85
	- Second step: 85 - 85 * 0.01 = 84.15

	You can assume there will always be at least 3 people in the list 
	that fulfill the conditions requested above and there won't be ties.

	#### Input Format

	Input is already parsed by us. The format is only important if you want to use the ‘Custom input’ option.
	The first line contains an integer,n, denoting the number of people.
	For each person there will be 5 lines, one for each feature in the order they appear above.

	#### Constraints

	- 1 ≤ n ≤ 10
	- 1 ≤ salary ≤ 10
	- civil status ∈ {divorced, single, widowed}
	- 0 ≤ number of children ≤ 5
	- 20 ≤ age ≤ 60


	#### Output Format

	The function must return the id of third person with best salary.


	#### Output Format

	The function must return the id of third person with best salary.

	Sample Input 0

	const totalPeopleExample1 = 5;
	const peopleExample1 = [
		{
			id: 1,
			salary: 100,
			children: 2,
			civilStatus: "single",
			age: 32
		}, {
			id: 2,
			salary: 1000,
			children: 2,
			civilStatus: "single",
			age: 30
		}, {
			id: 3,
			salary: 10000,
			children: 3,
			civilStatus: "single",
			age: 40
		}, {
			id: 4,
			salary: 1000000,
			children: 2,
			civilStatus: "single",
			age: 39
		}, {
			id: 5,
			salary: 12,
			children: 1,
			civilStatus: "divorced",
			age: 34
		}
	];
		
	Sample Output

	2

*/


/* ANSWER */

const getSelectedId = (totalPeople, people) => {
	const byCivilStatus = person => person.civilStatus === 'single';
	const byChildren = person => person.children >= 1 && person.children <= 3;
	const byAge = person => person.age >= 30 && person.age <= 40;
	const getFinalSalary = p => p.salary * 0.85 * (100 - p.children);

	const parsedPeople = people
		.filter(byCivilStatus)
		.filter(byChildren)
		.filter(byAge)
		.map(person => ({
				...person,
				finalSalary: getFinalSalary(person)
			})
		);

	parsedPeople.sort((a, b) => b.finalSalary - a.finalSalary);

	return parsedPeople[2].id;
};
