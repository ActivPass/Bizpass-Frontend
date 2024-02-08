let baseUrl

if (import.meta.env.MODE === "development") baseUrl = "http://localhost:5000/api"
else baseUrl = import.meta.env.ACTIVPASS_SERVER_RENDER_URL || "https://activpass-server.onrender.com/api"

export default baseUrl
