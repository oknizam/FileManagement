1. Example reading file 50 mb causes memory usage more at server level, beacuse server having less memory 
what happens when we read file of size 50 mb at a time read file and store at server (RAM) first and then send it browser 
2. so if  1000 or more clients make same request memory usage will increase chances of crashing application

3. We use streams to read file not at single pass, using stream read file by chunks
4. fs -> package provide createReadStream , createWriteStream  so we can read and file by chunks
5. When we are reading file by chunks server don't know content length so in response header res.write will add one header called Transfer-encoding :  chunks 
6. So browser will not close request until all data get read
7. Pipe feature we use to pipeline other task one after other 

EX : task1.pipe(task2.pipe(task3....))