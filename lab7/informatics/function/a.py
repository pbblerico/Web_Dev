def minFour(a, b, c, d):
    if a > b: a = b
    if c > d: c = d
    if a < c: return a
    return c

print(minFour(int(input()), int(input()), int(input()), int(input())))