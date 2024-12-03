import { lusitana } from '@/app/ui/fonts';
import { TableRowSkeleton } from '@/app/ui/skeletons';
import { Suspense } from 'react';
import { fetchFormattedCustomers } from '@/app/lib/data';
import { Metadata } from 'next';
import Table from "@/app/ui/customers/table"

export const metadata: Metadata = {
    title: 'Customers',
};

export default async function Page({ searchParams }: {
    searchParams?: {
        query?: string;
        page?: string;
    };
}) {
    const query = searchParams?.query || '';

    return (
        <div className="w-full">
            <Suspense key={query} fallback={<TableRowSkeleton />}>
                <Table query={query} />
            </Suspense>
        </div>
    );
}