import EventsList from "../components/EventsList"
import Button from "../ui/Button"

const HomePage = () => {
	return (
		<div className='py-8 lg:w-[1000px] lg:mx-auto'>
			<section className="px-4">
				<h2 className='text-3xl font-bold leading-tight '>
					The people platform—Where interests become friendships
				</h2>
				<p className='text-md py-4 leading-relaxed'>
					Whatever your interest, from hiking and reading to networking and
					skill sharing, there are thousands of people who share it on Eventify.
					Events are happening every day—sign up to join the fun.
				</p>
				<Button className='my-2'>Join now</Button>
			</section>
			<section>
				<h3 className='text-2xl font-semibold mt-6 px-4'>Upcoming events:</h3>
				<EventsList />
			</section>
		</div>
	)
}

export default HomePage
