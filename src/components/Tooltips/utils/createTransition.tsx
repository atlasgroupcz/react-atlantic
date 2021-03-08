export const createTransition = (
    duration: number,
    delay: number,
    easing: string
) =>
    `opacity: 1;transition: opacity ${duration}ms ${easing};transition-delay: ${delay}ms;`;
