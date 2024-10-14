/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import debounce from "lodash.debounce";

const UserMember = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const limit = 15;
  const apiUrl =
    "http://192.168.0.181:8000/api/atab/user-member/get/all/by/date/zone/status/for-admin";
  const imgUrl = "https://m360ict.s3.ap-south-1.amazonaws.com/haab-storage";

  const fetchData = async (search = "", skip = 0) => {
    const response = await fetch(
      `${apiUrl}?status=active&skip=${skip}&limit=${limit}&searchParams=${search}`
    );
    const result = await response.json();
    setData(result?.data);
    setTotal(result?.total);
  };

  const debouncedFetchData = debounce((search) => {
    fetchData(search, 0);
    setPage(1);
  }, 2000);

  const handleSearch = (e) => {
    const searchValue = e.target.value.trim();
    setSearchTerm(searchValue);
    debouncedFetchData(searchValue);
  };

  useEffect(() => {
    fetchData(searchTerm, (page - 1) * limit);
  }, [page]);

  const totalPages = Math.ceil(total / limit);

  const renderPageNumbers = () => {
    let pages = [];
    const maxVisiblePages = 7;
    const ellipsis = <span className="px-2">...</span>;

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(
          <button
            key={i}
            onClick={() => setPage(i)}
            className={`w-8 h-8 flex items-center justify-center rounded ${
              page === i
                ? "bg-blue-500 text-white"
                : "bg-white text-blue-500 border border-blue-500"
            }`}
          >
            {i}
          </button>
        );
      }
    } else {
      pages.push(
        <button
          key={1}
          onClick={() => setPage(1)}
          className={`w-8 h-8 flex items-center justify-center rounded ${
            page === 1
              ? "bg-blue-500 text-white"
              : "bg-white text-blue-500 border border-blue-500"
          }`}
        >
          1
        </button>
      );

      if (page > 3) {
        pages.push(ellipsis);
      }

      for (
        let i = Math.max(2, page - 1);
        i <= Math.min(page + 1, totalPages - 1);
        i++
      ) {
        pages.push(
          <button
            key={i}
            onClick={() => setPage(i)}
            className={`w-8 h-8 flex items-center justify-center rounded ${
              page === i
                ? "bg-blue-500 text-white"
                : "bg-white text-blue-500 border border-blue-500"
            }`}
          >
            {i}
          </button>
        );
      }

      if (page < totalPages - 2) {
        pages.push(ellipsis);
      }

      pages.push(
        <button
          key={totalPages}
          onClick={() => setPage(totalPages)}
          className={`w-8 h-8 flex items-center justify-center rounded ${
            page === totalPages
              ? "bg-blue-500 text-white"
              : "bg-white text-blue-500 border border-blue-500"
          }`}
        >
          {totalPages}
        </button>
      );
    }

    return pages;
  };

  return (
    <div className="container mx-auto p-4">
      <form onSubmit={(e) => e.preventDefault()} className="flex mb-10">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          className="border p-2 w-full rounded-l mt-5"
          placeholder="Search by phone or company name"
        />
        <button
          type="submit"
          className="bg-green-500 text-white px-4 py-2 mt-5 rounded-r hover:bg-green-600 transition-colors"
        >
          Search
        </button>
      </form>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data?.length > 0 &&
          data?.map((item) => (
            <div key={item.user_member_id}>
              <div className="border rounded-lg shadow-md overflow-hidden">
                <div className="p-4 flex items-center h-[200px]">
                  <div className="flex-grow">
                    <div>
                      <div className="">
                        {" "}
                        <h3 className="text-2xl font-bold text-blue-900">
                          {item.user_member_company_name}
                        </h3>
                      </div>

                      <hr className="my-4 border-0 h-1 bg-gradient-to-r from-green-400  via-gray-300 to-[#e5fe01]" />

                      <div>
                        <h3 className="text-xl font-bold text-gray-800">
                          {item.company_owner_name}
                        </h3>
                        <p className="text-lg font-medium text-green-600">
                          {item.company_owner_designation}
                        </p>
                        <p className="text-base font-medium text-gray-600 mt-1">
                          Hajj License:{" "}
                          {item?.user_member_hajj_license || "N/A"}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="ml-4 ">
                    <img
                      src={`${imgUrl}/${item.company_owner_photo}`}
                      alt={item.user_member_company_name}
                      className="w-[180px] h-[180px] min-h-[150px] object-cover rounded-lg shadow-md"
                    />
                  </div>
                </div>

                <div className="p-0">
                  <InfoRow label="Email" value={item.user_member_email} />
                  <InfoRow
                    label="Status"
                    value={item.user_member_account_status || "N/A"}
                    color="1"
                  />
                  <InfoRow
                    label="Member Phone"
                    value={item.user_member_phone || "N/A"}
                  />
                  <InfoRow
                    label="Company Phone"
                    value={item.member_company_phone || "N/A"}
                    color="1"
                  />
                  <InfoRow
                    label="Owner Phone"
                    value={item.company_owner_phone || "N/A"}
                  />
                  <InfoRow
                    label="Address"
                    value={item.user_member_zone_name}
                    color="1"
                  />
                  <div
                    className={`flex justify-between py-2 border-b last:border-b-0 p-4 bg-[#d9edf7]`}
                  >
                    <span className="font-medium">Website:</span>
                    <a
                      href={item.member_company_website || "N/A"}
                      target="_blank"
                      className="text-blue-800"
                    >
                      {item.member_company_website || "N/A"}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
      <div>
        {data?.length == 0 && (
          <div className="text-center text-2xl my-10 text-red-500">
            No Data Found
          </div>
        )}
      </div>

      <div className="mt-8 flex justify-center items-center space-x-2">
        <button
          onClick={() => setPage(Math.max(1, page - 1))}
          disabled={page === 1}
          className="w-8 h-8 flex items-center justify-center rounded bg-white text-blue-500 border border-blue-500 disabled:opacity-50"
        >
          <ChevronLeft size={16} />
        </button>
        {renderPageNumbers()}
        <button
          onClick={() => setPage(Math.min(totalPages, page + 1))}
          disabled={page === totalPages}
          className="w-8 h-8 flex items-center justify-center rounded bg-white text-blue-500 border border-blue-500 disabled:opacity-50"
        >
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
};

const InfoRow = ({ label, value, color }) => (
  <div
    className={`flex justify-between py-2 border-b last:border-b-0 p-4 ${
      color === "1" ? "bg-[#dff0d8]" : "bg-[#d9edf7]"
    }`}
  >
    <span className="font-medium">{label}:</span>
    <span>{value}</span>
  </div>
);

export default UserMember;
