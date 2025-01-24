
import Link from 'next/link';
import { RegisterLink, LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";




const Navbar = async () => {
    const { isAuthenticated, getUser } = getKindeServerSession();
    const isUserAuthenticated = await isAuthenticated();
    const user = await getUser();
    return (

        <div>
            <nav className="container mx-auto mb-10">
                <ul className="text-xl flex gap-6">

                    <li><Link href='/'> Home |</Link></li>
                    
                    <li><Link href='/profile'> Profile |</Link></li>

                    {user && isUserAuthenticated ? <li>
                        <LogoutLink>Log out</LogoutLink>
                    </li>
                        :
                        <li>
                            <LoginLink>Sign in</LoginLink>
                        </li>

                    }








                </ul>
            </nav>
        </div>
    );
};

export default Navbar;