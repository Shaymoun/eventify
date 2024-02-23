import { Link } from "react-router-dom"
import { useAuth } from "../store/auth-context"
import Button from "../ui/Button"

const ProfilePage = () => {
	const { currentUser } = useAuth()
	return (
		<div className='min-h-dvh py-10 rounded-md'>
			<div className='flex flex-col justify-center items-center py-4 px-2 mx-auto bg-white rounded-2xl md:w-4/5 lg:w-96'>
				<div className='p-6'>
					<img
						src='https://static.vecteezy.com/system/resources/previews/009/292/244/original/default-avatar-icon-of-social-media-user-vector.jpg'
						alt='Profile picture'
						className='rounded-full h-40'
					/>
				</div>
				<div className='my-8 *:py-2 text-xl text-center'>
					<h2>{currentUser.email}</h2>
					<p>Created events: 0</p>
				</div>
				<Button>
					<Link to="/edit-profile">Edit Profile</Link>
				</Button>
			</div>
		</div>
	)
}

export default ProfilePage
