"use client"
import { useState, useEffect } from "react"
import AuthModal from "@/components/AuthModal";
import UploadModal from "@/components/UploadModal";

const ModalProvider = () => {
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
            <UploadModal />
        </>
    )
}

export default ModalProvider