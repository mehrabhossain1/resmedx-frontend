"use client";

interface NoticeTableProps {
  notices: any[];
  setNotices: React.Dispatch<React.SetStateAction<any[]>>;
}

const NoticeTable: React.FC<NoticeTableProps> = ({ notices, setNotices }) => {
  const handleDelete = async (id: string) => {
    const confirmed = confirm("Are you sure you want to delete this notice?");
    if (confirmed) {
      try {
        const response = await fetch(
          `http://localhost:5000/api/v1/notices/${id}`,
          {
            method: "DELETE",
          }
        );
        if (response.ok) {
          setNotices(notices.filter((notice) => notice._id !== id));
        } else {
          console.error("Failed to delete notice");
        }
      } catch (error) {
        console.error("Error deleting notice:", error);
      }
    }
  };

  return (
    <div className="overflow-x-auto">
      {notices.length > 0 ? (
        <table className="table w-full">
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {notices.map((notice, index) => (
              <tr key={notice._id}>
                <th>{index + 1}</th>
                <td>{notice.title}</td>
                <td>
                  <button
                    className="btn btn-error btn-xs"
                    onClick={() => handleDelete(notice._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className="text-center text-gray-500 text-2xl">
          There are no notices at the moment. Add One By Form Above.
        </div>
      )}
    </div>
  );
};

export default NoticeTable;
