"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MagnifyingGlassIcon } from '@radix-ui/react-icons';

function SearchBar() {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Handle search logic here
    };

    return (
        <form onSubmit={handleSubmit} className="flex border border-solid border-slate-400 rounded overflow-hidden relative w-10/12 m-auto">
            <Input type="text" placeholder="Search..." className="flex-1 p-2 border-none outline-none" />
            <Button type="submit" className="py-2 px-4 border-none" variant="ghost"><MagnifyingGlassIcon /></Button>
        </form>
    );
}

export default SearchBar;