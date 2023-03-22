def make_ends(nums):
    arr = []
    arr.append(nums[0])
    arr.append(nums[-1])

    return arr

print(make_ends([2,4,6]))