int(input())
arr = [int(i) for i in input().split()]
for a in range(len(arr)):
    if a % 2 == 0: print(arr[a])