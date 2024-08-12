import { CrossCircledIcon } from '@radix-ui/react-icons'

const FilePill = ({
  name,
  onRemove,
  url
}: {
  name: string
  onRemove: () => void
  url: string
}) => {
  const MAX_LENGTH = 20
  const displayName =
    name.length > MAX_LENGTH ? `${name.substring(0, MAX_LENGTH - 3)}...` : name

  return (
    <div className="mb-2 mr-2 flex items-center rounded-full  bg-gray-300 px-2 py-1 text-sm font-semibold text-gray-700 hover:opacity-80  dark:bg-gray-700 dark:text-white/80">
      <a href={url} target="_blank" rel="noopener noreferrer" className="grow">
        {displayName}
      </a>
      <button type="button" onClick={onRemove} className="ml-2">
        <CrossCircledIcon className="size-4" />
      </button>
    </div>
  )
}

export default FilePill
