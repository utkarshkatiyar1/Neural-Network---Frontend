import axios from "axios";

export const getAIRecommendations = async (query) => {
    try {
        const res = await axios.post("http://localhost:5000/api/recommendations", { query });
        return res.data.recommendations;
    } catch (error) {
        console.error("AI API Error:", error);
        return "AI service unavailable";
    }
};
