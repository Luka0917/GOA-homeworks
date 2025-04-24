export default function Contact(){
    return (
        <>
            <div className="flex justify-center items-center flex-col border-2 rounded-[54px] py-[31px] w-[912px]">
                <p className="text-[30px] font-[600]">Contact me</p>
                <div className="flex justify-center items-center gap-[20px]">
                    <a href="https://github.com/Luka0917" className="text-[40px]"><i class="fa-brands fa-github"></i></a>
                    <a href="https://www.facebook.com/luka.tatuashvili.3" className="text-[40px] text-[#1877f2]"><i class="fa-brands fa-square-facebook"></i></a>
                    <a href="https://www.instagram.com/lukatatuashvili/" className="text-[40px] text-[#e7019b]"><i class="fa-brands fa-instagram"></i></a>
                </div>
            </div>
        </>
    )
}