n = int(input())
student_marks = {}
for _ in range(n):
    name, *line = input().split()
    scores = list(map(float, line))
    student_marks[name] = scores
query_name = input()
    
sum = 0
for p in student_marks[query_name]:
    sum += p
print(sum / len(student_marks[query_name]))