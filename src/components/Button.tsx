type Props = {
  runFunction: any
}

function Button({ runFunction }: Props) {
  return (
    <button
      onClick={runFunction}
      className="trasition-all duration-600 border border-gray-200 px-4 py-12 w-full rounded-xl bg-indigo-500 text-white hover:bg-indigo-600"
    >
      Place Bet
    </button>
  )
}

export default Button
