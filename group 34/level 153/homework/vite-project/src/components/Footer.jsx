import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export default function Footer(){
    return (
        <>
            <div className="flex justify-center items-center flex-col">
                <p className="text-[30px] font-[500] mb-[10px]">Contact me</p>
                <div className="flex justify-center items-center gap-[10px] mb-[10px]">
                    <a href="https://www.facebook.com/luka.tatuashvili.3" className="text-[30px] text-[#1877f2]"><FaFacebookSquare /></a>
                    <a href="https://www.instagram.com/lukatatuashvili/" className="text-[30px] text-[#ff0b60]"><FaInstagram /></a>
                    <a href="https://github.com/Luka0917" className="text-[30px]"><FaGithub /></a>
                </div>
                <p className="text-[20px] font-[500]">Email: <i>tatuashvililuka@gmail.com</i></p>
            </div>
        </>
    )
}