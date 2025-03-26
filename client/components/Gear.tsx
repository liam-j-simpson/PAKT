import { Activity } from 'models/models'
import { useGetActivity } from './hooks/useGetActivity'
import { useState } from 'react'
import { useCreateActivity } from './hooks/useCreateActivity'
import { useDeleteActivity } from './hooks/useDeleteActivity'

export function Gear() {
  const [activityText, setActivityText] = useState<string>()
  const { data, isPending, isError, error } = useGetActivity()
  const [edit, setEdit] = useState<number | null>()
  const createActivityMutation = useCreateActivity()
  const deleteActivityMutation = useDeleteActivity()

  function handleEdit(id: number) {
    setEdit(id)
  }

  function handleSave(e) {}

  function handleDelete(index: number) {
    deleteActivityMutation.mutate(index)
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    createActivityMutation.mutate({ name: activityText })
    setActivityText('')
  }

  if (isPending) {
    ;<h1>Loading...</h1>
  }
  if (isError) {
    ;<h1>{`Error: ${error}`}</h1>
  }
  if (data) {
    return (
      <>
        <main className="mx-8 mb-8">
          <div className="p-8 mb-8  bg-[#38473E] rounded-[20px]">
            <p className="text-[#e7e9de]">Optimse your gear lists.</p>
            <ul>
              {data.map((element: Activity, index: number) => (
                <>
                  {element.id !== edit ? (
                    <li key={index} className="flex">
                      <h2 className="mr-3">{element.name}</h2>

                      <button
                        className="text-[#e7e9de] mr-3"
                        onClick={() => handleEdit(element.id)}
                      >
                        Edit
                      </button>
                      <button
                        className="text-[#e7e9de] mr-3"
                        onClick={() => handleDelete(element.id)}
                      >
                        Delete
                      </button>
                    </li>
                  ) : (
                    <>
                      <input
                        placeholder={element.name}
                        className="placeholder-white bg-[#38473E] text-[#e7e9de] "
                      ></input>
                      <button className="text-[#e7e9de] mr-3">Save</button>
                      <button
                        className="text-[#e7e9de] mr-3"
                        onClick={() => handleDelete(element.id)}
                      >
                        Delete
                      </button>
                    </>
                  )}
                </>
              ))}
            </ul>
            <form onSubmit={handleSubmit}>
              <input
                className="placeholder-white bg-[#38473E] text-[#e7e9de] focus:outline-none focus:bg-[#495a4f] focus:shadow-lg focus:shadow-[#495a4f]"
                placeholder="New Activity"
                value={activityText}
                onChange={(e) => setActivityText(e.target.value)}
              ></input>
              <button className="text-[#e7e9de] mr-3">Submit</button>
            </form>
          </div>
        </main>
      </>
    )
  }
}
