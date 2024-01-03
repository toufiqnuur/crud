"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { api } from "~/service/api";

const table_header = [
  "Id",
  "Tahun masuk",
  "Semester masuk",
  "Nama",
  "Nik",
  "Alamat",
  "Telepon",
  "Tanggal Lahir",
  "Created at",
  "Action",
];

export default function Home() {
  const router = useRouter();
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      const data_student = await api.get("/servis/students");
      if (data_student.data) setData(data_student.data);
    })();
  });

  const deleteData = (id) => {
    const res = api.post("/servis/delete-student", {
      data: { id },
    });
    console.log(res);
  };

  return (
    <>
      <div className="container py-12">
        <div className="flex justify-end">
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            onClick={() => router.push("/add")}
          >
            Add students
          </button>
        </div>

        <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-12">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                {table_header.map((menu) => (
                  <th scope="col" className="px-6 py-3" key={menu}>
                    {menu}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data?.students?.map((data) => (
                <tr className="odd:bg-white even:bg-gray-50" key={data.id}>
                  <td className="px-6 py-4" key={data.id}>
                    {data.id}
                  </td>
                  <td className="px-6 py-4">{data.tahun_masuk}</td>
                  <td className="px-6 py-4">{data.semester_masuk}</td>
                  <td className="px-6 py-4">{data.nama}</td>
                  <td className="px-6 py-4">{data.nik}</td>
                  <td className="px-6 py-4">{data.alamat}</td>
                  <td className="px-6 py-4">{data.telepon}</td>
                  <td className="px-6 py-4">{data.tanggal_lahir}</td>
                  <td className="px-6 py-4">{data.created_at}</td>
                  <td className="px-6 py-4">
                    <button
                      type="button"
                      className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                      onClick={() => deleteData(data.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
