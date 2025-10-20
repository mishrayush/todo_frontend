import { useDispatch, useSelector } from "react-redux";
import { startLoading, finishLoading } from "../../components/loaderSlice";
import Navigation from "@/components/Navigation";

export default function ReduxVisualDemo() {
    const dispatch = useDispatch();
    const { loading, message } = useSelector((state) => state.loader);

    const handleDispatch = () => {
        dispatch(startLoading());

        // Simulate async operation (e.g., API call)
        setTimeout(() => {
            dispatch(finishLoading());
        }, 2000);
    };

    return (
        <>
            <Navigation />
            <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">

                <h1 className="text-3xl font-bold text-blue-600 mb-8">
                    Redux Action Flow Demo
                </h1>

                <div className="bg-white shadow-md rounded-lg p-8 flex flex-col items-center space-y-6">
                    <button
                        onClick={handleDispatch}
                        disabled={loading}
                        className={`px-6 py-3 rounded-md text-white font-semibold transition ${loading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
                            }`}
                    >
                        {loading ? "Processing..." : "Dispatch Redux Action"}
                    </button>

                    <div className="text-lg font-medium text-gray-700 flex items-center gap-2">
                        {loading && (
                            <span className="animate-spin h-5 w-5 border-2 border-blue-600 border-t-transparent rounded-full"></span>
                        )}
                        {message}
                    </div>
                </div>
            </div>
        </>
    );
}
