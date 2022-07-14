import { motion } from 'framer-motion'


const Footer = ({setpages, pages, submitHandler}) => {
function buttonVariant (pages){
  if(pages === 0){
    return   <motion.button
    className='bg-gradient-to-r from-green-400 to-blue-500 | hover:from-pink-500 hover:to-yellow-500 | box-xs | rounded-md | step--2'
    onClick={() => setpages(pages + 1)}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
  >Next</motion.button>
  }
  else if (pages === 1){
    return   <motion.button
    className='bg-gradient-to-r from-green-400 to-blue-500 | hover:from-pink-500 hover:to-yellow-500 | box-xs | rounded-md | step--2'
    onClick={() => submitHandler()}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
  >Next</motion.button>
  } else {
    return   <motion.button
    className='bg-gradient-to-r from-green-400 to-blue-500 | hover:from-pink-500 hover:to-yellow-500 | box-xs | rounded-md | step--2'
    onClick={() => setpages(pages + 1)}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
  >Submit</motion.button>
  }
}
  return (
    <footer className="form-footer | flex | justify-evenly | box-small">
          <motion.button
            disabled={pages === 0}
            className='border-blue-500 | border-2 | hover:from-pink-500 hover:to-yellow-500 | box-xs | rounded-md | step--2
          | disabled:border-slate-700 disabled:opacity-50 '
            onClick={() => setpages(pages - 1)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Prev</motion.button>
         {buttonVariant(pages)}
        </footer>
  )
}

export default Footer