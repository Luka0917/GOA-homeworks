export default function ProfileCard({name, lastname, img, description}){
    return (
        <>
            <div className="flex justify-center items-center gap-[50px] border-2 rounded-[44px] p-[20px]">
                <div className="flex justify-center items-center flex-col gap-[10px]">
                    <img src={img} alt="Photo of me" className="rounded-[24px]" />
                    <p>{name} {lastname}</p>
                </div>
                <p className="w-[500px]">{description}</p>
            </div>
        </>
    )
}