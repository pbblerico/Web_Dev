a = int(input())
b = int(input())

for i in range(a, b + 1):
    sqrt = i ** 0.5
    if(sqrt * sqrt == i): print(i)