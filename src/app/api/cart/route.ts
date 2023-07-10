import { NextRequest, NextResponse } from "next/server";
import { db , cartTable } from "@/lib/drizzle"
import { v4 as uuid } from "uuid" // for generate random ids
import { cookies } from "next/headers";

export const GET = async (request:Request) => {
  try {
    const res = await db.select().from(cartTable);
    return NextResponse.json({ res })
  }
  catch (error){
    console.log(error)
    return NextResponse.json({message : "something went wrong"})
  }
}

export const POST = async (request:Request) => {

  const req = await request.json()
  const uid = uuid(); //generate random ids

  const setcookies = cookies();
 
  if(!cookies().has("user_id")) //check if not has user_id so will set it
    {  setcookies.set("user_id", uid) }

  try {
    const res = await db.insert(cartTable).values({
      product_id: req.product_id,
      quantity: 1,
      user_id: cookies().get("user_id")?.value as string
    }).returning();
    return NextResponse.json({ res })
  }
  catch (error){
    console.log(error)
    return NextResponse.json({message : "something went wrong"})
  }
}