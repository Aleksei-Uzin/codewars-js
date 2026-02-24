/**
 * One Line Task: Are All Pair Sum Equals to 10?
 * https://www.codewars.com/kata/59eaf81cfc3c4907a1000082/train/javascript
 *
 */

sum10 = (s, qMarks, n, isValidS, c) => {
  for ($ of s) {
    if ($ == '?') qMarks++
    else if ($ > 0) {
      if (n && qMarks) {
        ;(qMarks - 3) | (n + +$ - 10) ? (c = 1) : (isValidS = 1)
      }
      ;[n, qMarks] = [+$, 0]
    }
  }

  return !!isValidS && !c
}

sum10 = (s, qMarks, n, isValidS, c) => {
  for ($ of s)
    $ == '?'
      ? qMarks++
      : $ > 0 &&
        (n &&
          qMarks &&
          ((qMarks - 3) | (n + +$ - 10) ? (c = 1) : (isValidS = 1)),
        (n = +$),
        (qMarks = 0))
  return !!isValidS && !c
}

// Final result (101 characters)
sum10=(s,q,n,v,c)=>{for($ of s)$=='?'?q++:$>0&&(n&&q&&(q-3|n+ +$-10?c=1:v=1),n=+$,q=0);return!!v&&!c}
