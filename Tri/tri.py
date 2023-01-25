# Bubble sort:

def bubble(array):
    permuted = True
    while permuted:
        permuted = False
        for i in range(len(array)):
            next_num_index = i + 1
            if (next_num_index < len(array)) and (array[i] > array[next_num_index]):
                new_value = array[i]
                array[i] = array[next_num_index]
                array[next_num_index] = new_value
                permuted = True

    return array


print(bubble([8, -2, 2, 1, 0, 9, 6, 54, 78, 90, 2, -80, 3, 22]))


# Quick sort

def quick_sort(array):
    if not array:
        return []
    else:
        pivot = array[-1]
        array_smaller = [num for num in array if num < pivot]
        array_bigger = [num for num in array if num > pivot]
        return quick_sort(array_smaller) + [pivot] + quick_sort(array_bigger)


print(quick_sort([8, -2, 2, 1, 0, 9, 6, 54, 78, 90, 2, -80, 3, 22]))
