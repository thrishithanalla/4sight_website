import EditJobClient from "./EditJobClient";

interface Job {
    _id: string;
}

// export async function generateStaticParams() {
//     return [];
// }

export default function Page() {
    return <EditJobClient />;
}
