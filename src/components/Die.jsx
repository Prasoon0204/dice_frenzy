const Die = (props) => {
  return (
    <button className={`${props.isFixed ? `bg-green-400`:`bg-white`} flex justify-center items-center w-10 h-10 sm:w-15 sm:h-15 rounded-lg cursor-pointer shadow-lg text-2xl sm:text-3xl font-bold`}
    onClick={() => props.fixed(props.id)}
    >
        {props.value}
    </button>
  )
}

export default Die