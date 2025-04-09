import React from 'react'

const ConditionalRendering = () => {
    const isLoading = false
    const isSubmitting = true
    const isError = true

    if (isLoading){
        return <h1>Loading...</h1>
    }

  return (
    <div>
        <h1>MAIN CONTENT</h1>
        <button className='Mybtn'>
            {isSubmitting ? "Submitting..." : "Submit"}
        </button>
        <button>
            {isError && <h1>Error Loading page, try Again</h1>}
        </button>
    </div>
  )
}

export default ConditionalRendering