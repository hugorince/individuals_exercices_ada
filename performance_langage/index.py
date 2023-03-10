from datetime import datetime


def now():
    return datetime.now()


def add(a, b):
    return a + b


def add_array(arr, b):
    for item in arr:
        item += b

    return arr


def factorial(n):
    if n >= 1:
        return factorial(n-1)
    else:
        return 1


initial_time = now()

factorial(698)


end_time = now()
total_time = end_time - initial_time
print('time ellapsed = ', total_time)
