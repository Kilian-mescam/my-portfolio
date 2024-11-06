import { Layout } from "@/components/layout"
import { LoggedInButton } from "../auth/LoggedInButton"

export const Header = async () => {
    return (
        <header className="w-full border-b border-border py-1">
            <Layout className="flex items-center py-0 flex-row gap-4">
            <div className="flex-1">
                <h1>LAYOUT DU HEADER</h1>
                </div>
                <div className='flex items-center gap-2'>
                    <LoggedInButton />
                </div>
            </Layout>
        </header>
    )
}