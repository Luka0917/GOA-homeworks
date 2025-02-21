# 6kyu

# https://www.codewars.com/kata/5544c7a5cb454edb3c000047

def bouncing_ball(h, bounce, window):
    rebounds = -1
    if 0 < bounce < 1:
        while h > window:
            rebounds += 2
            h *= bounce
    return rebounds