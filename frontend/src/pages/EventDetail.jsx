import { useParams } from "react-router-dom"


const EventDetailPage = () => {
	const params = useParams()

	return <div>Product {params.id}</div>
}

export default EventDetailPage
