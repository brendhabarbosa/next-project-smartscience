
import { handlers } from "../../../../auth";

export const { GET, POST } = handlers
// export const { auth, signIn, handlers, signOut } = NextAuth(authOptions)

// import { NextResponse } from 'next/server';
// import fs from 'fs';
// import path from 'path';

// const filePath = path.join(process.cwd(), "data", "users.json");

// export async function POST(request: Request) {
//   try {
//     const data = await request.json() 
//     if (!data.email || !data.password) {
//       return NextResponse.json({ message: "Dados incompletos." }, { status: 400 });
//     }

//     const users = JSON.parse(fs.readFileSync(filePath, "utf-8"))
//     const user = (users.find((u: any)=> u.email === data.email))

//     if (user !== undefined && user.password === data.password) {
//         const res = NextResponse.json({ message: "Login realizado." }, { status: 200 })
//         res.cookies.set('access', user.email, { path: '/' })

//         return res
//   } else{
//     return NextResponse.json({ message: "Usuário não encontrado." }, { status: 404 })
//     }
//   } catch (error){
//      return NextResponse.json({ message: "Erro! Inscrição não realizada." }, { status: 500 })
//   }
// }