function App() {
  return (
    <>
      <div className="flex justify-center items-center">
        <div className="flex justify-center items-center flex-col border-2 rounded-[24px] p-[40px]">
            <h1 className="text-[30px] font-[700]">Virtual DOM</h1>
            <p className="text-[20px]">ვირტუალური DOM არის მეხსიერებაში შენახული რეალური DOM-ის ასლი. React იყენებს მას, რათა სწრაფად შეამოწმოს რომელი ელემენტები შეიცვალა. რეალურ DOM-ში მხოლოდ ეს განსხვავებები იტვირთება, რაც ზრდის აპლიკაციის მუშაობის სისწრაფეს და ეფექტურობას.</p>
            <h1 className="text-[30px] font-[700] mt-[40px]">Render ფუნქცია</h1>
            <p className="text-[20px]">Render ფუნქცია არის კომპონენტის ის ნაწილი, რომელიც განსაზღვრავს რას უნდა გამოჩნდეს ეკრანზე. React იძახებს ამ ფუნქციას, რათა შექმნას UI ელემენტები ვირტუალურ DOM-ში, რომლებიც შემდეგ რეალურ DOM-ში გადადის.</p>
            <h1 className="text-[30px] font-[700] mt-[40px]">JSX (JavaScript XML)</h1>
            <p className="text-[20px]">JSX არის JavaScript-ის სინტაქსის გაფართოება, რომელიც HTML-ის მსგავსი ჩანაწერის საშუალებას იძლევა. JSX გაცილებით უფრო კითხვადი და ვიზუალურად გასაგებია, ვიდრე React.createElement() ფუნქციით დაწერილი კოდი. ბრაუზერი JSX-ს ვერ კითხულობს პირდაპირ, ამიტომ Babel გარდაქმნის JSX-ს ჩვეულებრივ JavaScript კოდად.</p>
          </div>
      </div>
    </>
  )
}
export default App