import React from 'react'

const Checkbox = React.forwardRef(({ indeterminate, ...rest }: any, ref) => {
  const defaultRef = React.useRef()
  const resolvedRef: any = ref || defaultRef

  React.useEffect(() => {
    resolvedRef.current.indeterminate = indeterminate
  }, [resolvedRef, indeterminate])

  return (
    <>
      <input type='checkbox' ref={resolvedRef} {...rest} />
    </>
  );
})

export default Checkbox;