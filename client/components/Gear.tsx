import { Activity } from 'models/models'
import { useGetActivity } from './hooks/useGetActivity'
import { useState } from 'react'
import { useCreateActivity } from './hooks/useCreateActivity'
import { useDeleteActivity } from './hooks/useDeleteActivity'
import { useEditActivity } from './hooks/useEditActivity'
import React from 'react'

export function Gear() {
  const [edit, setEdit] = useState<number | null>()
  const [activityText, setActivityText] = useState<string>('')
  const [editActivityText, setEditActivityText] = useState<string>('')

  const { data, isPending, isError, error } = useGetActivity()
  const createActivityMutation = useCreateActivity()
  const deleteActivityMutation = useDeleteActivity()
  const editActivityMutation = useEditActivity()

  function handleEdit(id: number, data: string) {
    setEdit(null)
    if (editActivityText != '') {
      editActivityMutation.mutate({ id, data })
      setEditActivityText('')
    }
  }

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
            <p className="text-[#e7e9de]">Optimise your gear lists.</p>
            <ul>
              {data.map((element: Activity, index: number) => (
                <React.Fragment key={element.id}>
                  {element.id !== edit ? (
                    <li key={index} className="flex">
                      <h2 className="mr-3">{element.name}</h2>

                      <button
                        className="text-[#e7e9de] mr-3"
                        onClick={() => setEdit(element.id)}
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
                      <li key={index} className="flex">
                        <input
                          defaultValue={element.name}
                          className="placeholder-white bg-[#38473E] text-[#e7e9de]"
                          onChange={(e) => setEditActivityText(e.target.value)}
                        ></input>
                        <button
                          className="text-[#e7e9de] mr-3"
                          onClick={() =>
                            handleEdit(element.id, editActivityText)
                          }
                        >
                          Save
                        </button>

                        <button
                          className="text-[#e7e9de] mr-3"
                          onClick={() => handleDelete(element.id)}
                        >
                          Delete
                        </button>
                      </li>
                    </>
                  )}
                </React.Fragment>
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
