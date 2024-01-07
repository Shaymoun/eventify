import Button from "../ui/Button"

const ProfilePage = () => {
	return (
		<>
			<div className='flex flex-col justify-center items-center py-4 px-2 '>
				<div className='p-6'>
					<img
						src='https://source.unsplash.com/random/300x300'
						alt='Profile picture'
						className='rounded-full h-40'
					/>
				</div>
				<div className="my-8 *:py-2 text-xl text-center">
					<h2>John Doe</h2>
					<p>Kraków, Poland</p>
					<p>Age: 30</p>
					<p>Created events: 23</p>
				</div>
				<Button>Edit Profile</Button>
			</div>
		</>
	)
}

export default ProfilePage
