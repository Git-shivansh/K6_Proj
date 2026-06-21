// my first k6 script 

import http from 'k6/http';
import {sleep} from 'k6';

these commands are the imports to run an k6 file 

now export default function contains what user does 

export default function(){
  http.get('http://test.k6.io')
  sleep(1)
}
basic commands to run k6  and you can add any link in it 

this command only has 1 virtual user 1 duration so we can change it too 

// to run the application use --> k6 run first_script.js 

if you want to add multiple virtual  users then k6 run first_script.js vus 3 duration 5s
 check and response new features of k6
