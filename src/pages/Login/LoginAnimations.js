export const bg_animation = {
    animate: {
        width: ['10vw', '100vw', '100vw'],
        height: ['10vh', '10vh', '100vh'],
    },
    transition: {
        times: [0, 0.5, 1],
        duration: 1.5,
    }
}

export const from_animation = {
    animate: {
        backdropFilter: ['blur(0px)', 'blur(10px)'],
        border: ['none', '1px solid rgba(255, 255, 255, 0.2)'],
        background: ['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 0.25)'],
        borderRadius: ['0px', '16px'],
    },
    transition: {
        times: [0, 1],
        duration: 1,
        delay: 1.5
    }
}

export const logo_animation = {
    animate: {
        opacity: [0, 1],
        y: [-100, 0]
    },
    transition: {
        times: [0, 1],
        duration: 1,
        delay: 2.5
    }
}

export const title_animation = {
    animate: {
        opacity: [0, 1],
    },
    transition: {
        times: [0, 1],
        duration: 1,
        delay: 3
    }
}

export const inputs_animation = {
    animate: {
        opacity: [0, 1],
        y: [100, 0]
    },
    transition: {
        times: [0, 1],
        duration: 1,
        delay: 2.5
    }
}