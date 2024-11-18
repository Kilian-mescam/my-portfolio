import { Layout } from "@/components/layout"
import Image from "next/image"
import Link from "next/link"

export const HeaderHome = async () => {

    return (
        <header className="w-full border-b border-border py-0">
            <Layout className="flex items-center py-0 flex-row gap-4">
                <Link href="/" className="flex-1">
                    <Image
                        src="/kimpossible.png"
                        width={100}
                        height={20}
                        alt="get-testimonials.com logo"
                    />
                </Link>
                <div>Bonjour je design des appli super cool</div>
            </Layout>
        </header>
    )
}