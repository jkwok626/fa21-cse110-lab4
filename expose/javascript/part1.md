1) values added: 20
2) final result: 20
3) values added: 20
4) Line 13 returns a ReferenceError which says that result is not defined. This is because result was declared with the let keyword inside an if block. Since line 13 is outside of that block, it cannot use result.
5) Nothing gets printed at line 9 because line 7 gives a Type Error. Since result was declared using the const keyword, it can't be reassigned at line 7. 
6) Nothing gets printed at line 13 because line 7 gives a Type Error. Since result was declared using the const keyword, it can't be reassigned at line 7. 