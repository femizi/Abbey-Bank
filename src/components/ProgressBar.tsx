import React from 'react'

const ProgressBar = ({page}) => {
 
 const initialWidth = "progressbar-fill | bg-gradient-to-r from-green-400 to-blue-500 | w-1/3 | h-1 | rounded-full | transition-all | duration-500";
 const secondWidth = "progressbar-fill | bg-gradient-to-r from-green-400 to-blue-500 | w-2/3 | h-1 | rounded-full transition-all | duration-500"
 const LastWidth = "progressbar-fill | bg-gradient-to-r from-green-400 to-blue-500 | w-full | h-1 | rounded-full transition-all | duration-500"
 const ProgressBarWidth =[initialWidth, secondWidth, LastWidth]

    return (
        <div className="progressbar | h-1 py-3">
            <div className={ProgressBarWidth[page]}></div>
        </div>
    )
}

export default ProgressBar