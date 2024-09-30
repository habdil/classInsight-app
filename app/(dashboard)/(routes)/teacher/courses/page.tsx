import { Button } from "@/components/ui/button";
import Link from "next/link";

const CoursesPage = () => {
    return ( 
        <div className="p-6">
            <Link href="/teacher/create">
                <Button className="bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded">
                    New Course
                </Button>
            </Link>
        </div>
     );
}
 
export default CoursesPage;