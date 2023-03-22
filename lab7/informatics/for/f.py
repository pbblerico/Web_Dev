num = input()

reversedNum = 0
for i in range(len(num) - 1, -1, -1):
    reversedNum = reversedNum * 10 + int(num[i])

print(reversedNum)