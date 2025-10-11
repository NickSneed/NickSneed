// Worker Entry Point: handles all incoming requests
export default {
    async fetch(request, env) {
        const url = new URL(request.url);

        // --- 1. Handle CORS Pre-flight Requests (REQUIRED for browser compatibility) ---
        if (request.method === 'OPTIONS') {
            return handleCors();
        }

        // --- 2. Construct the Target URL for Tumblr API ---
        // Example: https://my-proxy.workers.dev/api/posts?tag=art
        // The path we want to proxy is everything *after* the base worker URL.

        // This example proxies to a Tumblr "posts" endpoint.
        const TUMBLR_BLOG_URL = 'bobrumbly.tumblr.com';
        const TUMBLR_API_BASE = `https://api.tumblr.com/v2/blog/${TUMBLR_BLOG_URL}/posts`;

        // Pass query parameters (like tag, limit, offset for pagination) from the incoming request.
        const queryParams = url.search;

        // Construct the full URL for the external API, including the secret API key.
        const targetUrl = `${TUMBLR_API_BASE}?api_key=${env.TUMBLR_API_KEY}${
            queryParams ? '&' + queryParams.substring(1) : ''
        }`;

        try {
            // --- 3. Fetch the data from the External API (Tumblr) ---
            const apiResponse = await fetch(targetUrl, {
                method: 'GET'
                // Note: We use the existing headers for standard browser headers, but we do NOT forward
                // authorization headers from the client (since they aren't needed by Tumblr V2).
            });

            // Clone the response so we can modify its headers (for CORS)
            const response = new Response(apiResponse.body, apiResponse);

            // --- 4. Add necessary CORS headers to the response ---
            addCorsHeaders(response);

            return response;
        } catch (error) {
            // Handle any network or API errors
            return new Response(`Error fetching data: ${error.message}`, {
                status: 500,
                headers: {
                    'Content-Type': 'text/plain',
                    // Also include CORS headers for error responses
                    ...getCorsHeaders()
                }
            });
        }
    }
};

// --- Helper Functions for CORS ---

// Set the CORS headers for the final response
function addCorsHeaders(response) {
    response.headers.set('Access-Control-Allow-Origin', '*'); // Allows all origins (like your github.io page)
    response.headers.set('Access-Control-Allow-Methods', 'GET, OPTIONS');
    response.headers.set('Access-Control-Allow-Headers', 'Content-Type');
    // Note: You can lock down 'Access-Control-Allow-Origin' to your specific GitHub Pages URL for better security.
}

// Handle the CORS OPTIONS pre-flight request
function handleCors() {
    return new Response(null, {
        status: 204, // No Content
        headers: getCorsHeaders()
    });
}

// Returns the full set of CORS headers
function getCorsHeaders() {
    return {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Max-Age': '86400' // Cache preflight response for 24 hours
    };
}
