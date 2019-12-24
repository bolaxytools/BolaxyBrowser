import React from 'react'

/**
 * componentDidMount in hook way
 *
 * @export
 * @param {() => any} onMount
 * @returns
 */
export function useOnMount(onMount: (param?: any) => any, param?: any) {
    return React.useEffect(() => {
        if (onMount) {
            onMount(param)
        }
    }, [onMount, param])
}

/**
 * componentWillUnmount in hook way
 *
 * @export
 * @param {() => any} onUnmount
 * @returns
 */
export function useOnUnmount(onUnmount: () => any) {
    return React.useEffect(() => {
        return () => onUnmount && onUnmount()
    }, [onUnmount])
}
