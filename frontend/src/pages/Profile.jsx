import Button from "../ui/Button"

const ProfilePage = () => {
	return (
		<div className='min-h-dvh py-10 rounded-md'>
			<div className='flex flex-col justify-center items-center py-4 px-2 mx-auto bg-white rounded-2xl md:w-4/5 lg:w-96'>
				<div className='p-6'>
					<img
						src='https://i.pinimg.com/280x280_RS/75/3b/cf/753bcfb53ae87ed8f793535b41d96433.jpg'
						alt='Profile picture'
						className='rounded-full h-40'
					/>
				</div>
				<div className='my-8 *:py-2 text-xl text-center'>
					<h2>John Doe</h2>
					<p>Kraków, Poland</p>
					<p>Age: 30</p>
					<p>Created events: 23</p>
				</div>
				<Button>Edit Profile</Button>
			</div>
		</div>
	)
}

export default ProfilePage
