import Image from 'next/image';

export const Navigation = () => {
    return (
        <div className="sticky top-0 left-0 right-0 px-4 py-4 bg-gray-800 z-50">
            <div className="flex items-center">
                <div className=" text-white font-bold px-5">
                    <Image
                        src="/logo-transparent.png"
                        alt="Rusetada Logo"
                        width={60}
                        height={60}
                    ></Image>
                </div>
                <div className="align-middle text-white text-3xl font-bold">
                    Rusetada
                </div>
            </div>
        </div>
    )
}