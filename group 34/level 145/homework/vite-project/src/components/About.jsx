export default function About(){
    return (
        <>
            <div className="flex justify-center items-center gap-[50px] border-2 rounded-[54px] p-[30px]">
                <div className="flex justify-center items-center flex-col">
                    <img src="./public/me.jpg" alt="Photo of me" className="rounded-[24px]" />
                    <p className="text-[18px]">Luka Tatuashvili</p>
                </div>
                <p className="w-[600px] text-[20px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, voluptate consequatur, ab cumque inventore distinctio nam dolore rerum, asperiores modi earum. Molestiae quia eius ad pariatur animi, dolor ratione tenetur fugit fugiat repudiandae, quos architecto neque minima eaque vitae soluta totam facere et ea, officiis sequi voluptas perspiciatis repellendus. Nostrum?</p>
            </div>
        </>
    )
}