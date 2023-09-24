"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import useDebounce from "@/hooks/useDebounce"
import queryString from "query-string"
import Input from "./Input"

const SearchInput = () => {
    const router = useRouter();
    const [value, setValue] = useState("");
    const debouncedValue = useDebounce<string>(value, 500);
    useEffect(() => {
        const query = {
            title: debouncedValue,
        }
        const url = queryString.stringifyUrl({
            url: "/search",
            query: query
        })
        router.push(url);
    }, [debouncedValue, router])

    return (
        <Input 
            placeholder="What do you want to listen to ?"
            value={value}
            onChange={(e) => setValue(e.target.value)}
        />
    )
}

export default SearchInput