int(input())
arr = [int(i) for i in input().split()]

cnt = 0
for i in range(len(arr)):
    if i != 0 and (arr[i] > 0 and arr[i - 1] > 0 or arr[i] < 0 and arr[i - 1] < 0): 
        print("YES")
        cnt += 1
        break

if(cnt == 0): print("NO")