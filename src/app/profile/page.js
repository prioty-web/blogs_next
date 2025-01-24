import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from 'next/navigation';
const Profile = async() => {
    const { isAuthenticated, getUser } = getKindeServerSession();
    const isUserAuthenticated = await isAuthenticated();
    const user = await getUser();
    if (user && isAuthenticated) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className=" p-10 rounded-lg shadow-md text-center">
                    <h1 className="text-4xl font-bold mb-4">Welcome !</h1>
                   
                </div>
            </div>
        );
    }
    redirect('/api/auth/login?post_login_redirect_url=/profile')
};

export default Profile;