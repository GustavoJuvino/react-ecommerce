import { useCallback } from 'react';

const useClickOutside = () => {
    const clickOutside = useCallback((ref: React.MutableRefObject<any>, method: any) => {
        let handler = (e: MouseEvent) => {
            if (!ref.current?.contains(e.target as Node)) {
                return method(false)
            }
        };
    
        document.addEventListener("mousedown", (e: MouseEvent) => handler(e));
    
        return () => {
          document.removeEventListener("mousedown", (e: MouseEvent) => handler(e));
        }
    }, [])

    return {
        clickOutside
    }
}

export default useClickOutside;