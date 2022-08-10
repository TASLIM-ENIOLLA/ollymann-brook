const dev = process.env.NODE_ENV !== 'production'

export const server = {
	frontend: {
		url: (
			(dev)
			? 'http://localhost:3000/'
			: 'https://bareminds.oracleblocksdapp.xyz/'
		)
	},
	backend: {
		url: (
			(dev)
			? 'http://localhost:80/ollymann-group/php/processes/brook/'
			: 'https://ollymann-group'
		)
	}
}

