"use client";
import { useEffect, useState } from "react";

export default function NoticeList() {
  const [notices, setNotices] = useState<any[]>([]);
  const [filteredNotices, setFilteredNotices] = useState<any[]>([]);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  useEffect(() => {
    const fetchNotices = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/v1/notices");
        const data = await response.json();
        setNotices(data);
        setFilteredNotices(data); // Initially, show all notices
      } catch (error) {
        console.error("Error fetching notices:", error);
      }
    };

    fetchNotices();
  }, []);

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedDate = event.target.value;
    setSelectedDate(selectedDate);

    // Filter notices based on selected date
    const filtered = notices.filter(
      (notice) =>
        new Date(notice.uploadedAt).toLocaleDateString() ===
        new Date(selectedDate).toLocaleDateString()
    );
    setFilteredNotices(filtered);
  };

  const handleSeeAll = () => {
    setFilteredNotices(notices);
    setSelectedDate(null); // Reset the selected date
  };

  return (
    <div className="flex flex-col container mx-auto p-4 py-16">
      <h1 className="text-4xl font-bold mb-4 text-center uppercase">
        Our <span className="text-primary">Notices</span>
      </h1>

      <p className="text-lg mb-4 text-gray-700 text-center">
        Browse through our latest notices and updates. You can filter notices by
        date or view all available notices.
      </p>

      <div className="mb-6 flex flex-col sm:flex-row items-center justify-center gap-4">
        <input
          type="date"
          value={selectedDate || ""}
          onChange={handleDateChange}
          className="input input-bordered w-full sm:w-auto mb-2 sm:mb-0"
          aria-label="Filter notices by date"
        />
        <button onClick={handleSeeAll} className="btn btn-primary">
          See All Notices
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
        {filteredNotices.length > 0 ? (
          filteredNotices.map((notice) => (
            <div
              key={notice._id}
              className="card bg-base-100 w-full shadow-lg p-4"
            >
              <div className="card-body">
                <h2 className="card-title text-xl font-semibold mb-2">
                  {notice.title}
                </h2>
                <p className="text-gray-600 font-medium mb-4">
                  Uploaded on:{" "}
                  {new Date(notice.uploadedAt).toLocaleDateString()}
                </p>
                <a
                  href={`http://localhost:5000/api/v1/notices/${notice.fileName}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  View PDF
                </a>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-center col-span-full">
            No notices available for the selected date. Please try a different
            date or click &quot;See All Notices&quot; to view all notices.
          </p>
        )}
      </div>
    </div>
  );
}
