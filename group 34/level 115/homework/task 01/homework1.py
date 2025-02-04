def sum_digits(n):
    if n < 0: # თუ უარყოფითია დადებითად ვაქცევთ
        n = n + (-n * 2)
    result = 0
    while n > 0:
        result += n % 10
        n //= 10 # დავამატე =
    return result

print(sum_digits(123))
print(sum_digits(-123))