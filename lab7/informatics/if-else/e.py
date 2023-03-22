def isBigger(num1, num2):
    if num1 > num2: return 1
    elif num2 > num1: return 2
    return 0


print(isBigger(int(input()), int(input())))