def rotate_left3(nums):
    nums.append(nums[0])
    nums.pop(0)

    return nums

print(rotate_left3([1,2,3]))