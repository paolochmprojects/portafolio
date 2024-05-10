import Image from 'next/image'
import React from 'react'

const OnBuild = () => {
    return (
        <div className="flex flex-col gap-4 justify-center items-center">
            <Image className="invert" src="/icons/onbuild.svg" width={300} height={300} alt="onbuild logo" />
            <p className="text-3xl">
                🏗️ Sección en construcción
            </p>
        </div>
    )
}

export default OnBuild