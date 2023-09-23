"use client"
import { useState, useEffect } from "react"
import AuthModal from "@/components/AuthModal";

const ModelProvider = () => {
    const [isMounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!isMounted) {
        return null
    }

    return (
        <>
            <AuthModal />
        </>
    )
}

export default ModelProvider