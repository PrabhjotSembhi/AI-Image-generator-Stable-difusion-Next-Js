import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
    name: string
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
){

    const prompt = req.body.prompt;
    const negative_prompt = req.body.negative_prompt

    let firstResponse = await fetch("https://api.replicate.com/v1/predictions", {
        method: "POST",
        headers:{
            "Content-Type" :"application/json",
            Authorization: "Token" + "b4dd8145e451f2f4ec81f22976eb2bfd73a491b9"
        },
        body: JSON.stringify({
            version: "f178fa7a1ae43a9a9af01b833b9d2ecf97b1bcb0acfd2dc5dd04895e042863f1",
            input:{
                prompt,
                negative_prompt,
                width:384,
                hight:384
            }
        })

    })

    res.status(200).json({name: 'john'})
}