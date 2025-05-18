# 8kyu

# https://www.codewars.com/kata/54fe05c4762e2e3047000add

class Ship:
    def __init__(self, draft, crew):
        self.draft = draft
        self.crew = crew

    def is_worth_it(self):
        actual_weight = self.draft - self.crew * 1.5
        return actual_weight > 20
    

# function App() {
#   return (
#     <>
#       <div className="flex justify-center items-center h-screen gap-[10px]">
#         {Array(10).fill(<div className="w-[40px] h-[40px] rounded-[5px] bg-red-500"></div>)}
#         {Array(10).fill().map((_, i) => <div className="w-[40px] h-[40px] rounded-[5px] bg-green-500"></div>)}
#       </div>
#     </>
#   )
# }
# export default App