num = int(input())

for d in range(2, num + 1):
    if num % d == 0: 
        print(d)
        break