def reverse3(nums):
    arr = []
    for i in range(len(nums) - 1, -1, -1):
        arr.append(nums[i])
    
    return arr


print(reverse3([1,2,3]))