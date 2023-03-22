int(input())
arr = [int(i) for i in input().split()]
cnt = 0
for a in arr:
    if a > 0: cnt += 1

print(cnt)