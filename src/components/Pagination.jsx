import { MdArrowLeft, MdArrowRight } from "react-icons/md";
import { useTenantContext } from "../hooks/useTenantContext";

const Pagination = () => {
  const { page, setPage, totalPage, properties, total } = useTenantContext();

  return (
    <div className="flex items-center justify-between py-4 text-sm text-gray-600 layout">
      <span>
        Showing {properties.length} of {total}
      </span>

      <div className="flex items-center space-x-2">
        <span className="px-2">
          Page {page} of {totalPage}
        </span>
        <button
          className="px-2 py-1 border rounded disabled:opacity-30"
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
        >
          <MdArrowLeft size={22} />
        </button>

        <button
          className="px-2 py-1 border rounded disabled:opacity-30"
          onClick={() => setPage(page + 1)}
          disabled={page === totalPage}
        >
          <MdArrowRight size={22} />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
