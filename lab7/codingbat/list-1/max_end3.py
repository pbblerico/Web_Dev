def max_end3(nums):
    maxNum = max(nums)
    nums = [maxNum for i in nums]

    return nums


print(max_end3([1,2,3]))