from turtle import *

speed(30)
width(7)
color("purple")

forward(200)
left(90)

forward(200)
left(90)

forward(200)
left(90)

forward(200)
left(90)

forward(70)
color("yellow")
begin_fill()
left(90)
forward(120)
right(90)
forward(60)
right(90)
forward(120)
end_fill()

penup()
goto(200, 200)
pendown()

color("red")
begin_fill()
right(150)
forward(200)
left(120)
forward(200)
end_fill()

left(30)
color("purple")

#drawing windows

penup()
goto(15, 170)
pendown()

color("brown")

width(4)
forward(70)
left(90)
forward(40)
left(90)
forward(70)   #height of window
left(90)
forward(40)   #width of window

penup()
goto(35, 170)
pendown()

left(90)
forward(70)

penup()
goto(35, 135)
pendown()

left(90)
forward(20)
right(180)
forward(40)

penup()
goto(145, 170)
pendown()

left(90)
forward(70)
left(90)
forward(40)
left(90)
forward(70)   #height of window
left(90)
forward(40)   #width of window

penup()
goto(165, 170)
pendown()

left(90)
forward(70)

penup()
goto(165, 135)
pendown()

left(90)
forward(20)
right(180)
forward(40)

penup()
goto(0, 0)
pendown()

width(7)
color("purple")

exitonclick()