/* eslint-disable react/jsx-no-undef */
import { useState } from "react"
import Image from "next/image"
import type { NextPage } from "next/types"

import defaultPic from "../../../public/Chains.png"
import defaultPic2 from "../../../public/CHAIR.png"
import defaultPic4 from "../../../public/MESSY.png"
import defaultPic3 from "../../../public/WATER.png"
import { VoxelMain } from "../../shared/ui/voxel"

import { titleData } from "./data"

export const BLUR =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8dtvXGAAHQAJTo/saLQAAAABJRU5ErkJggg=="

export const Home: NextPage = () => {
  // const alphabet = "abcdefghijklmnopqrstuvwxyz"

  // const randomCharacter = alphabet[Math.floor(Math.random() * alphabet.length)]

  // const RandomiseLetterForTitle = (props: { title: string }) => {
  //   const { title } = props

  //   const splitedTitle = title.split("")

  //   const randomiseTitle = splitedTitle.splice(
  //     Math.floor(Math.random() * title.length),
  //     1,
  //     randomCharacter as string,
  //   )

  //   setTimeout(() => randomiseTitle, 2000)

  //   const joinReplacedLetter = splitedTitle.join("")

  //   return <span>{joinReplacedLetter}</span>
  // }

  // const uniqueIds = new Set()

  // const interval = (arr: any, delay: number) => {
  //   let index = -1

  //   return setInterval(() => {
  //     index = (index + 1) % arr.length
  //     uniqueIds.add(arr[index])
  //   }, delay)
  // }

  //{performance.now()}

  const [modelName, setModelName] = useState("moon")

  const [name, setName] = useState(0)

  const [currentDate, setCurrentDate] = useState<Date>(new Date())

  //setTimeout(() => setCurrentDate(new Date()), 1000)

  return (
    <div className="flex-col">
      <div className="flex flex-1 justify-between gap-3 px-2">
        <div className="w-1 rounded-full bg-gradient-to-t from-primaryLight to-error" />
        <div className="flex flex-1 flex-col">
          {titleData?.map(title => {
            return (
              <div
                key={title?.id}
                className="inline-flex gap-4 text-clamp leading-none"
              >
                <div className="flex w-5 cursor-default flex-col justify-center text-xl">
                  <span>{"#"}</span>
                  <span>{title?.id}</span>
                </div>

                <span
                  suppressHydrationWarning
                  className="cursor-pointer whitespace-nowrap hover:text-secondaryLight"
                  onMouseEnter={() => {
                    setModelName(title?.model), setName(title?.id)
                  }}
                  onMouseLeave={() => {
                    setName(0)
                  }}
                >
                  {title?.title}
                </span>
                <span className="flex w-5 items-center justify-center text-secondaryLight">
                  {name === title?.id && <span>{">"}</span>}
                </span>
              </div>
            )
          })}
        </div>
        <div className="sticky top-0 flex max-h-screen flex-1 items-center justify-center">
          <div className="">
            <VoxelMain modelName={modelName} />
          </div>
        </div>
      </div>

      <div className="flex justify-between gap-3 px-2">
        <div className="w-1 rounded-full bg-gradient-to-t from-error to-primaryLight" />
        <div className="flex flex-1 flex-col">
          {titleData?.map(title => {
            const formatter = new Intl.DateTimeFormat("en", { month: "short" })
            return (
              <div
                key={title?.id}
                className="flex gap-4 text-clamp leading-none"
              >
                <div className="flex w-5 cursor-default flex-col justify-center text-xl">
                  <span>{"#"}</span>
                  <span>{title?.id}</span>
                </div>

                <div
                  suppressHydrationWarning
                  className="flex flex-1 cursor-pointer justify-between gap-3 whitespace-nowrap hover:text-secondaryLight"
                  onMouseEnter={() => {
                    setModelName(title?.model), setName(title?.id)
                  }}
                  onMouseLeave={() => {
                    setName(0)
                  }}
                >
                  <span>{currentDate?.toLocaleDateString("ru-RU")}</span>
                  <div>
                    <span>{currentDate?.getHours() + ":"}</span>
                    <span>{currentDate?.getMinutes() + ":"}</span>
                    <span>{currentDate?.getSeconds()}</span>
                  </div>
                  <div>
                    <span>{currentDate?.getDate()}</span>
                  </div>
                  <div>
                    <span>{formatter.format(currentDate)}</span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
