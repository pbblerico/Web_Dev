def common_end(a, b):
  if(a[0] == b[0] or a[-1] == b[-1]): return True
  return False

print(common_end([1, 2, 3], [7, 3]))