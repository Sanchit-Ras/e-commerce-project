import { FaMagnifyingGlass } from "react-icons/fa6";

export default function NoResults() {
  return (
    <div className="flex flex-col items-center justify-center p-16 bg-white rounded-xl border-2 border-dashed border-gray-300">
      <FaMagnifyingGlass className="w-16 h-16 text-gray-400 mb-4" />

      <h3 className="text-xl font-semibold text-gray-800">No Results Found</h3>
      <p className="mt-1 text-sm text-gray-500">
        We couldn't find anything that matched your search.
      </p>
    </div>
  );
}