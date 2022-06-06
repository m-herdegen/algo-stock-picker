from cgitb import small


def picker(prices):

    difference_tracker = {}

    for i,value1 in enumerate(prices):
        for j,value2 in enumerate(prices):
            if i < j:
                difference_tracker[value1 - value2] = [i, j]

    temp = min(difference_tracker.keys())
    smallest_key = [key for key in difference_tracker if int(key) == temp]

    return(difference_tracker[int(str(smallest_key[0]))])

picker([17,3,6,9,15,8,6,1,10]) # => [1,4] )