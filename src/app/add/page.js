export default function Add() {
  return (
    <div className="container py-12 px-3">
      <form className="space-y-6">
        <div>
          <label for="nama" className="block mb-2 text-sm font-medium text-gray-900">
            Nama *
          </label>
          <input
            type="text"
            id="nama"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="John"
            maxLength={200}
            required
          />
        </div>
        <div>
          <label for="tahun_masuk" className="block mb-2 text-sm font-medium text-gray-900">
            Tahun Masuk *
          </label>
          <input
            type="text"
            id="tahun_masuk"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="2022"
            required
          />
        </div>
        <div>
          <label for="semester_masuk" className="block mb-2 text-sm font-medium text-gray-900">
            Semester Masuk *
          </label>
          <input
            type="number"
            id="semester_masuk"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="1"
            required
          />
        </div>

        <div>
          <label for="nik" className="block mb-2 text-sm font-medium text-gray-900">
            NIK *
          </label>
          <input
            type="text"
            id="nik"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            minLength={16}
            maxLength={16}
            placeholder="3404 xxxx xxxx xxxx"
            required
          />
        </div>

        <div>
          <label for="alamat" className="block mb-2 text-sm font-medium text-gray-900">
            Alamat
          </label>
          <input
            type="text"
            id="alamat"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Jl. Street"
            maxLength={200}
          />
        </div>

        <div>
          <label for="tgl_lahir" className="block mb-2 text-sm font-medium text-gray-900">
            Tanggal Lahir *
          </label>
          <input
            type="text"
            id="tgl_lahir"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="2000-01-01"
            required
          />
        </div>

        <div>
          <label for="telepon" className="block mb-2 text-sm font-medium text-gray-900">
            Tanggal Lahir *
          </label>
          <input
            type="text"
            id="telepon"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="0893849723738"
            required
          />
        </div>

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
