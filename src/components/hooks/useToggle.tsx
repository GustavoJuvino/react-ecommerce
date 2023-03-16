import { useCallback } from 'react'

const useToggle = () => {

    const toggleEffect = useCallback((index: number, element: string, className: string) => {
        const elementArray = document.querySelectorAll(element);

        if(elementArray.length) {
            elementArray.forEach((e) => e.classList.remove(className));
            elementArray[index].classList.add(className);
        }
    }, []);

    return {
        toggleEffect
    }
}

export default useToggle;