import { useQuery } from "@tanstack/react-query";

interface ICompany {
  readonly id: string;
  name: string;
  city: string;
  address: string;
}
const getDataCompanies = async () => {
  const res = await fetch("https://gwi-sstc.afiind.com/master/companies", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const result = await res.json();
  return result.data.data;
};
export default function Companies({setSession}: {setSession: React.Dispatch<React.SetStateAction<string | null>>}) {
  const { data, isLoading } = useQuery({
    queryKey: ["companies"],
    queryFn: getDataCompanies,
  });

  return (
    <div className="container w-full mx-auto py-12 space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="font-bold text-xl">Company Data</h1>
        <button onClick={() => setSession(null)} className="bg-rose-500 px-6 py-2 rounded-md text-slate-200 text-xs font-semibold cursor-pointer hover:bg-rose-600">
          Logout
        </button>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {isLoading ? (
          <>
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={`skeleton-${i}`}
                className="w-full h-64 bg-gray-200 animate-pulse border border-gray-200 rounded-lg"
              />
            ))}
          </>
        ) : (
          <>
            {data?.map((company: ICompany) => (
              <div
                key={company.id}
                className="flex flex-col  rounded-lg border border-gray-200 p-4 pt-6"
              >
                <img
                  src="https://assets-a1.kompasiana.com/items/album/2021/11/08/tata-ruang-kerja-6188f7db06310e589b6d4142.jpg"
                  className="rounded-lg" loading="lazy"
                  alt={company.name}
                />
                <p className="w-full mt-4 text-sm text-center truncate">
                  {company.name}
                </p>
                <p className="w-full text-xs text-center truncate">
                  {company.address}
                </p>
                <hr className="w-full my-4 border-gray-200" />
                <div className="flex justify-end">
                  <p className="text-xs text-right text-teal-500 font-semibold ">{company.city}</p>
                </div>
                
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
}
