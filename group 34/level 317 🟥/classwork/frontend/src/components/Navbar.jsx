import { Link } from "react-router";

export default function Navbar(){
    return (
        <div className="mt-2 mx-3">
            <div className="flex gap-5">
                <Link to={'/sign_in'} className="text-xl font-medium hover:underline">Sign In</Link>
                <Link to={'/sign_up'} className="text-xl font-medium hover:underline">Sign Up</Link>
            </div>
        </div>
    )
}