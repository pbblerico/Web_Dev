int(input())
arr = [int(i) for i in input().split()]

for i in range(len(arr) // 2):
    arr[i] += arr[len(arr) - i - 1]
    arr[len(arr) - 1 - i] = arr[i] - arr[len(arr) - 1 - i]
    arr[i] = arr[i] - arr[len(arr) - 1 - i]

for c in arr:
    print(c, end = ' ')
