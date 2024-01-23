function padIt(str,n){
    let answer = str;
     while(n){
       if (~n&1) answer += '*'
       else answer = '*' + answer
       n-=1
     }
     return answer; 
   }
   
   