N = int(input())
    
arr = []
for i in range(N):
    req = [i for i in input().split()]
    if(req[0] == 'insert'):
        arr.insert(int(req[1]), int(req[2]))
    elif(req[0] == 'print'): print(arr)
    elif(req[0] == 'append'): arr.append(int(req[1]))
    elif(req[0] == 'remove'): arr.remove(6)
    elif(req[0] == 'sort'): arr.sort()
    elif(req[0] == 'reverse'): arr.reverse()
    elif(req[0] == 'pop'): arr.pop() 
            