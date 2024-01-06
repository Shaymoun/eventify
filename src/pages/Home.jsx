import Button from "../ui/Button"

const HomePage = () => {
	return (
		<header className="pt-8 px-4">
			<div className='w-full mx-auto'>
				<h2 className='text-3xl font-bold leading-tight'>
					The people platform—Where interests become friendships
				</h2>
				<p className='text-md py-4 leading-relaxed'>
					Whatever your interest, from hiking and reading to networking and
					skill sharing, there are thousands of people who share it on Eventify.
					Events are happening every day—sign up to join the fun.
				</p>
			</div>
			<Button className="my-2">Join now</Button>
		</header>
	)
}

export default HomePage
