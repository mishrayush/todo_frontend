"use client";
import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import throttle from "lodash/throttle";

export default function EventList() {
    const [events, setEvents] = useState([]);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const [loading, setLoading] = useState(false);
    const limit = 20;

    // ✅ Fetch data function
    const fetchEvents = async (currentPage) => {
        if (loading || !hasMore) return;

        setLoading(true);
        try {
            const res = await axios.get(
                `http://localhost:5000/api/event/list?page=${currentPage}&limit=${limit}`
            );
            const { data, total } = res.data;

            if (!data || data.length === 0) {
                setHasMore(false);
            } else {
                setEvents((prev) => {
                    const newEvents = [...prev, ...data];
                    if (newEvents.length >= total) setHasMore(false);
                    return newEvents;
                });
            }
        } catch (err) {
            console.error("Error fetching events:", err);
        } finally {
            setLoading(false);
        }
    };

    // ✅ Fetch first page on mount
    useEffect(() => {
        fetchEvents(1);
    }, []);

    // ✅ Throttled scroll handler
    const handleScroll = useCallback(
        throttle(() => {
            const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

            if (scrollTop + clientHeight >= scrollHeight - 50 && !loading && hasMore) {
                setPage((prev) => prev + 1);
            }
        }, 500), // <-- Throttle time (500ms)
        [loading, hasMore]
    );

    // ✅ Attach scroll listener
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [handleScroll]);

    // ✅ Fetch next page when `page` changes
    useEffect(() => {
        if (page > 1) fetchEvents(page);
    }, [page]);

    return (
        <div className="p-10 bg-gray-50 min-h-screen font-sans">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
                Event List
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {events.map((event) => (
                    <div
                        key={event?._id}
                        className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition duration-300"
                    >
                        <h3 className="text-xl font-semibold mb-2 text-gray-800">
                            {event?.eventType?.toUpperCase()}
                        </h3>
                        <p className="text-gray-600 mb-1">
                            <span className="font-medium">Device:</span> {event?.device}
                        </p>
                        <p className="text-gray-600 mb-1">
                            <span className="font-medium">Country:</span> {event.location?.country}
                        </p>
                        <p className="text-gray-600">
                            <span className="font-medium">City:</span> {event?.location?.city}
                        </p>
                    </div>
                ))}
            </div>

            {loading && (
                <p className="text-center text-gray-500 mt-6">Loading more events...</p>
            )}
            {!hasMore && (
                <p className="text-center text-gray-400 mt-6">No more events.</p>
            )}
        </div>
    );
}
