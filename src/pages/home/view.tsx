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

  const [modelName, setModelName] = useState("moon")

  const [name, setName] = useState(0)

  return (
    <div className="flex flex-1 justify-between p-3">
      <div className="flex flex-1 flex-col justify-between">
        {titleData?.map(title => {
          return (
            <div key={title?.id} className="flex gap-2">
              <div className="flex cursor-default flex-col justify-center text-xl">
                <div>{"#"}</div>
                <div>{title?.id}</div>
              </div>

              <div
                suppressHydrationWarning
                className="flex flex-1 cursor-pointer text-clamp hover:text-secondaryLight"
                onMouseEnter={() => {
                  setModelName(title?.model), setName(title?.id)
                }}
                onMouseLeave={() => {
                  setName(0)
                }}
              >
                {title?.title}
                {name === title?.id && <span>{"->"}</span>}
              </div>
            </div>
          )
        })}
      </div>
      <div className="static flex flex-1 cursor-grab items-center justify-center">
        <div className="fixed z-20 min-h-svh w-2/4">
          <Image
            fill
            alt={"title"}
            blurDataURL={BLUR}
            className="max-h-dvh w-auto object-cover"
            placeholder="blur"
            quality={100}
            sizes="(100vw - 32px) 165px, 280px"
            src={defaultPic3}
          />
        </div>
        <div className="fixed z-20 min-h-svh w-2/4">
          <Image
            fill
            alt={"title"}
            blurDataURL={BLUR}
            className="border-inherit max-h-dvh w-auto rounded-xl border-4 border-solid border-primaryMain object-cover"
            placeholder="blur"
            quality={100}
            sizes="(100vw - 32px) 165px, 280px"
            src={defaultPic}
          />
        </div>
        <div className="fixed z-30 min-h-dvh w-2/4">
          <Image
            fill
            alt={"title"}
            blurDataURL={BLUR}
            className="max-h-dvh w-auto object-cover"
            placeholder="blur"
            quality={100}
            sizes="(100vw - 32px) 165px, 280px"
            src={defaultPic2}
          />
        </div>
        <div className="fixed z-30 min-h-dvh w-2/4">
          <Image
            fill
            alt={"title"}
            blurDataURL={BLUR}
            className="max-h-dvh w-auto object-cover"
            placeholder="blur"
            quality={100}
            sizes="(100vw - 32px) 165px, 280px"
            src={defaultPic4}
          />
        </div>

        <div className="fixed z-50">
          <VoxelMain modelName={modelName} />
        </div>
      </div>
    </div>
  )
}
