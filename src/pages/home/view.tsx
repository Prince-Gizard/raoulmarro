import type { NextPage } from "next/types"

import { Card } from "../../shared/ui"
import { VoxelMain } from "../../shared/ui/voxel"

import { titleData } from "./data"

export const Home: NextPage = () => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz"

  const randomCharacter = alphabet[Math.floor(Math.random() * alphabet.length)]

  const RandomiseLetterForTitle = (props: { title: string }) => {
    const { title } = props

    const splitedTitle = title.split("")

    splitedTitle.splice(
      Math.floor(Math.random() * title.length),
      1,
      randomCharacter as string,
    )

    const joinReplacedLetter = splitedTitle.join("")

    return <span>{joinReplacedLetter}</span>
  }

  return (
    <div className="flex flex-1 justify-between p-3">
      <div className="flex flex-1 flex-col justify-between">
        {titleData?.map(title => {
          return (
            <div key={title?.id} className="text-clamp flex gap-3">
              <div className="flex cursor-default gap-1">
                <span>{"#"}</span>
                <span>{title?.id}</span>
              </div>

              <Card
                suppressHydrationWarning
                className="cursor-pointer hover:text-secondaryLight"
              >
                <RandomiseLetterForTitle title={title?.title} />
              </Card>
            </div>
          )
        })}
      </div>
      <div className="flex flex-1 cursor-grab items-center justify-center">
        <VoxelMain />
      </div>
    </div>
  )
}
