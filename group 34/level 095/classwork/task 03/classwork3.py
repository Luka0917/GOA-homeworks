def has_same_digits(a, b):
    def get_digits(n):
        return sorted(str(n))

    return sorted(get_digits(a) + get_digits(b)) == get_digits(a * b)

print(has_same_digits(6, 21))
print(has_same_digits(10, 11))