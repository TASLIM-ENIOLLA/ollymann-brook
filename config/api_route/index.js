import {server} from '../server'

const dev = process.env.NODE_ENV !== 'production'

export const api_routes = {
	contact: `${server.backend.url}/Contact.php`,
	review: `${server.backend.url}/Review.php`
}