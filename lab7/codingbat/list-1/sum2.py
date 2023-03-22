def sum2(nums):
    if len(nums) < 2: 
        if len(nums) > 0: return nums[0]
        return 0
    
    return nums[0] + nums[1]


print(sum2([2,5]))