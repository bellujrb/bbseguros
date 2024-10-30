import {Input} from "@/components/ui/input"
import {Button} from "@/components/ui/button"
import {ArrowRight, ArrowUpRight, Construction} from "lucide-react";
import Link from "next/link";

const PersonalizacaoPage = () => {
    return (
        <div className={"flex items-center justify-center h-full"}>
            <div className={"flex flex-col gap-4 justify-center items-center -mt-24"}>
                <Construction size={100} stroke={"#000"} />
                <h1 className={"text-4xl font-bold"}>Esta página ainda está em Construção...</h1>
                <h2 className={"text-xl font-semibold text-gray-500"}>Fique atento as novidades e aos lançamentos que
                    estão por vir!
                </h2>
                <Link href={"/admin/blog"}>
                    <Button className={" flex gap-x-2 "}>
                        Novidades BBCCAI <ArrowUpRight/>
                    </Button>
                </Link>
            </div>
        </div>
    )
}

export default PersonalizacaoPage;