"use client";

export default async function Page({
    params,
  }: {
    params: Promise<{ slug: string }>
  }) {
    const slug = (await params).slug
    console.log("This is Client Side Rendering")
    return <div>Multicatch Dynamic Routing {slug}</div>
  }