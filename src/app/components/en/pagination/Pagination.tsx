import Link from 'next/link';

export function Pagination({baseUrl, page, perPage, total}: { baseUrl: string; page: number; perPage: number; total: number }) {
    return (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-8 px-2">
            <div>
                {page !== 1 ? (
                    <Link href={`${baseUrl}/${page - 1}`} rel="prev" className="btn btn-outline btn-accent w-full">
                        Previous page
                    </Link>
                ) : (
                    <span></span>

                )}
            </div>
            <div className="hidden lg:block"></div>
            <div className="hidden lg:block"></div>
            <div>
                {perPage * page < total ? (
                    <Link href={`${baseUrl}/${page + 1}`} rel="next" className="btn btn-outline btn-accent w-full">
                        Next
                    </Link>
                ) : (
                    <span></span>
                )}
            </div>
        </div>
    );
}