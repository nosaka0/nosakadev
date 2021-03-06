
const Education = (props: any) => {
    // props
    //      .institution
    //      .degreeType
    //      .degreeField
    //      .location
    //      .graduation
    //      .info (array)

    return (
        <div className="grid grid-cols-5 my-4">
            <h1 className="order-1 col-span-5 text-base md:col-span-4 md:text-xl font-bold tracking-tight ">{props.institution}</h1>
            <p className="order-4 col-span-2 lg:order-2 lg:col-span-1 lg:text-right tracking-tight">{props.location}</p>
            <p className="order-2 lg:order-3 col-span-4 lg:col-span-4 text-chestnut">{props.degreeType} in {props.degreeField}</p>
            <p className="order-3 lg:order-4 col-start-5 text-right font-extralight tracking-tight text-jet">{props.graduation}</p>
            <ul className="order-5 col-span-4 pt-2">
            {
                props.info.map(
                    function(info: any, idx: number) {
                        return info.includes(":") ? (
                            <li key={idx} className="font-light text-sm sm:text-base">
                                <p className="inline font-semibold">{info.split(":")[0]}:</p>
                                <p className="inline">{info.split(":")[1]}</p>
                            </li>
                        ) : (
                            <li key={idx} className="font-light text-sm sm:text-base">
                                <p className="inline font-semibold italic">{info}</p>
                            </li>
                        )
                    }
                )
            }

            </ul>
        </div>
    )
}

const Skills = (props: any) => {
    return (
        <div className="grid my-4 gap-2">
            {Object.entries(props.skills).map(
                function(ditem: any, idx: number) {
                    return (
                        <div className="grid lg:grid-cols-12 gap-0" key={idx}>
                            <h2 className="lg:col-span-3 text-base font-bold sm:text-xl">{ditem[0]}</h2>
                            <p className="lg:col-start-5 lg:col-end-13 text-sm font-thin sm:text-base lg:font-light tracking-tight lg:tracking-normal break-words">
                                {ditem[1]}
                            </p>
                        </div>
                    )
                }
            )}
        </div>
    )
}

const Work = (props: any) => {
    // props
    //      .title
    //      .employer
    //      .location
    //      .date (range)
    //      .info (array)

    return (
        <div className="grid grid-cols-5 my-4">
        <h1 className="order-1 col-span-5 text-base md:col-span-4 md:text-xl font-bold tracking-tight">{props.title}</h1>
        <p className="order-2 col-span-2 lg:col-span-1 lg:text-right tracking-tight">{props.location}</p>
        <p className="order-4 lg:order-3 col-span-4 lg:col-span-3 text-chestnut">{props.employer}</p>
        <p className="order-3 lg:order-4 col-span-3 lg:col-span-2 font-extralight tracking-tight text-right text-jet">{props.date}</p>
        <ul className="order-5 col-span-4 pt-2 list-disc list-inside">
        {
            props.info.map(
                function(info: any, idx: number) {
                    return (
                        <li key={idx} className="font-light text-sm sm:text-base tracking-tight mt-1">
                            <p className="inline">{info}</p>
                        </li>
                    )
                }
            )
        }

        </ul>
    </div>

    )
}

const Research = (props: any) => {
    // props
    //      .title
    //      .employer
    //      .location
    //      .date (range)
    //      .info (array)

    return (
        <div className="grid grid-cols-4 my-4">
        <h1 className="order-1 col-span-4 text-base lg:col-span-3 tracking-tight md:text-xl font-bold">{props.title}</h1>
        <p className="order-4 lg:order-3 col-span-4 lg:col-span-3 text-chestnut">{props.lab}</p>
        <p className="order-5 lg:order-5 col-span-4 text-chestnut">{props.supervisor}</p>
        <p className="order-2 lg:order-2 col-span-2 lg:col-span-1 tracking-tight lg:text-right">{props.location}</p>
        <p className="order-3 lg:order-4 col-span-2 lg:col-span-1 font-extralight tracking-tight text-right text-jet">{props.date}</p>
        <ul className="order-6 col-span-4 mt-3 list-disc list-inside">
        {
            props.info.map(
                function(info: any, idx: number) {
                    return (
                        <li key={idx} className="font-light text-sm sm:text-base tracking-tight mt-1">
                            <p className="inline">{info}</p>
                        </li>
                    )
                }
            )
        }

        </ul>
    </div>

    )
}

const Honors = (props: any) => {
    return (
        <div className="grid my-4 gap-1">
            {Object.entries(props.skills).map(
                function(ditem: any, idx: number) {
                    return (
                        <div className="grid xl:grid-cols-8 gap-0" key={idx}>
                            <h2 className="xl:col-span-3 text-base font-bold sm:text-xl">{ditem[0]}</h2>
                            <p className="xl:col-span-5 text-sm font-thin sm:text-base items-start lg:font-light tracking-tight lg:tracking-normal break-words">
                                {ditem[1]}
                            </p>
                        </div>
                    )
                }
            )}
        </div>
    )
}



export {Education, Skills, Work, Research, Honors}
