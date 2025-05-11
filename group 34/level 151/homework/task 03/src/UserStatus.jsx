export default function UserStatus({loggedIn}){
    return (
        <>
            <p className="text-[75px] font-[500]">{loggedIn ? 'Welcome back!' : 'Please Register'}</p>
        </>
    )
}