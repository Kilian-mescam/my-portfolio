import { twx } from "@/lib/twx";

export const Layout = twx.div(() => [
    `max-w-5xl w-full flex-col py-4 flex gap-4 mx-auto px-4`,
])

export const LayoutTitle = twx.h1(() => [
    `text-4xl font-bold`,
])