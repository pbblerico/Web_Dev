int(input())
arr = [int(i) for i in input().split()]
cnt = 0
for i in range(len(arr)):
    if i != 0 and arr[i] > arr[i - 1]: cnt += 1

print(cnt)