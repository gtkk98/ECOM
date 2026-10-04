"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation";

const Filter = () => {
    const searchParams = useSearchParams();
    const router = useRouter();
    const pathname = usePathname();

    const handelFilter = (value: string ) => {
        const params = new URLSearchParams(searchParams);
        params.set("sort", value);
        router.push(`${pathname}?${params.toString()}`, {scroll: false});
    };

    return (
        <div className="flex items-center justify-end gap-2 text-sm text-gray-700 my-6">
            <span>Sort by:</span>
            <select name="sort" id="sort" className="ring-1 ring-gray-200 shadow-md p-1 rounded-sm" onChange={(e)=>handelFilter(e.target.value)}>
                <option value="spicy">Spicy & Savory</option>
                <option value="rice">Rice & Savory</option>
                <option value="creamy">Creamy & Umami</option>
                <option value="hot">Hot & Tangy</option>
                <option value="savory">Savory & Umami</option>
                <option value="sweet">Sweet & Tang</option>
            </select>
        </div>
    )
}

export default Filter;