'use client'
import { TypeAnimation } from "react-type-animation"

const HomeTyping = () => {
    return (
        <TypeAnimation
            sequence={[
                'Paolo Charca Mamani',
                3000,
                'Frontend Developer',
                3000,
                'Backend Developer',
                3000,
            ]}
            className="text-red-600 font-mono"
            wrapper="span"
            cursor
            repeat={Infinity}
        />
    )
}

export default HomeTyping