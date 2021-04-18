// Generic helper/wrapper class for dealing with APIs.
// This makes it easier to add something like caching later.
export default class Api {
	// GET request.
	get( url, headers = {} ) {
		// Make API call.
		return fetch( url, {
			method: 'GET',
			headers,
		} );
	}

	// POST request.
	post( url, headers, body, convertToFormData = false ) {
		let encodedBody = JSON.stringify( body );
		return fetch( url, {
			method: 'POST',
			headers,
			body: encodedBody,
		} );
	}

	// DELETE request.
	delete( url, headers, body ) {
		const encodedBody = JSON.stringify( body );
		return fetch( url, {
			method: 'DELETE',
			headers,
			body: encodedBody,
		} );
	}

	// PUT request.
	put( url, headers, body, convertToFormData = false ) {
		let encodedBody = JSON.stringify( body );

		return fetch( url, {
			method: 'PUT',
			headers,
			body: encodedBody,
		} );
	}
}
