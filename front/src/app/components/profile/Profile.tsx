import { IUser } from "@/types"

async function Profile () {
  const res = fetch('http://localhost:3001/users')
  const profileDB: IUser = await (await res).json()
  return profileDB
}