/*
MEDALLIA 2015 - QUESTION 7
IP Address Validation

    IPv4 was the first publicly used Internet Protocol. It used4-byte
addresses and permitted 2 distinct values. The typical format
for an IPv4 address is A.B.C.D where A, B, C, and D are integers
in the inclusive range between 0 and 255.
    IPv6, with 128 bits, was developed to permit the expansion of
the address space. These addresses are represented by eight
colon-separated sixteen-bit groups, where each sixteen-bit group
is written using 1 to 4 hexadecimal digits. Leading zeroes in a
section are often omitted from an address, meaning that the
groups 0 is identical to 0000 and group 5 is identical to 0005.

Some examples of valid IPv6 addresses are
2001:0db8:0000:0000:0000:ff00:0042:8329 and
3:0db8:0:01:F:ff0:0042:8329 .

Given n strings of text thatmay or may not bevalid Internet
Protocol (IP) addresses, we want to determine whether each
string of text is:
    An IPv4 address.
    An IPv6 address.
    Neither an IPv6 address nor anIPv4 address.

Complete the checkIPs function in the editor below. It has one
parameter: an array of strings, ip_array, where each elementi
denotes a string of text to be checked. It must return an array of
strings where each element i contains the answer for ip ; each
answer must be whichever of the following case-sensitive terms
is appropriate:
    IPv4 if the string is a validIPv4 address.
    IPv6 if the string is a validIPv6 address.
    Neither if the string is not a validIPv4 or IPv6 address.
    
Input Format
Locked stub code in the editor reads the following input from
stdin and passes it to the function:
The first line contains an integer,n, denoting the number of
elements in ip_array.
Each line i of the n subsequent lines (where 0 ≤ i < n) contains a
string describing ip .

Constraints
1 ≤ n ≤ 50
1 ≤ ip ≤ 500
It is guaranteed that any string containing a validIPv4 or
IPv6 address has no leading or trailing whitespace.

Output Format
The function must return an array of strings where each element
i contains the string IPv4 , IPv6 , or Neither , denoting thatip
was an IPv4 address, an IPv6 address, or Neither (i.e., not an
address at all). This is printed to stdout by locked stub code in
the editor.

Sample Input ['This line has junk text', '121.18.19.20']
Sample Output ['Neither', 'IPv4']

Explanation 0
We must check the followingn = 2 strings:
1. ip = "This line has junk text." is not a validIPv4 or IPv6
address, so we return Neither in index 0 of our return array.
2. ip = "121.18.19.20" is a valid IPv4 address, so we return
IPv4 in index 1 of our return array.


Sample Input ['2001:0db8:0000:0000:0000:ff00:0042:8329']
Sample Output ['IPv6']

Explanation 1
We only have n = 1 value to check. Becauseip =
"2001:0db8:0000:0000:0000:ff00:0042:8329" is a valid IPv6
address, we return IPv6 in index 0 of our return array.
*/

function checkIPs(ip_array) {
  const isIPv4 = (str) => {
    const fragments = str.split('.');
    let answer = false;
    
    if (fragments.length !== 4)
      return answer;

    fragments.forEach((fragment) => {
      if( Number.isInteger(Number(fragment))
         && Number(fragment) > 0 && Number(fragment) < 255)
        answer = true;
    });

    return answer;
  }

  const isIPv6 = (str) => {
    const isHex = (strNumber) => {
      if (strNumber.length > 4)
        return false;
      for (let i=0; i<strNumber.length; i++) {
        if (isNaN(parseInt(strNumber.charAt(i), 16)))
          return false;
      }
      return true;
    };
    const fragments = str.split(':');
    let answer = true;

    if (fragments.length !== 8)
      answer = false;

    fragments.forEach((fragment) => {
      if( !isHex(fragment))
        answer = false;
    });

    return answer;
  }


  return ip_array.map((ip) => {
    if (isIPv4(ip))
      return 'IPv4';
    else if (isIPv6(ip))
      return 'IPv6';
    return 'Neither';
  });
}


const input1 = ['This line has junk text', '121.18.19.20'];
const input2 = ['2001:0db8:0000:0000:0000:ff00:0042:8329',
                '3:0db8:0:01:F:ff0:0042:8329',
                'qwerty:0db8:0:01:F:ff0:0042:8329'];

console.log('OUTPUT 1', checkIPs(input1));
console.log('OUTPUT 2', checkIPs(input2));

